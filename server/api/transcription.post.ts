import { YoutubeLoader } from "langchain/document_loaders/web/youtube";
import { OpenAI } from "langchain/llms/openai";
import { loadSummarizationChain } from "langchain/chains";
import {
  RecursiveCharacterTextSplitter,
} from "langchain/text_splitter";

export default defineEventHandler(async (event) => {

  const apiKey = useRuntimeConfig().openaiApiKey;
  if (!apiKey) throw new Error("Missing OpenAI API key");

  const llm = new OpenAI({
    openAIApiKey: apiKey,
    temperature: 0.1,
  });

  const body = await readBody(event);
  const url = body.url;

  const loader = YoutubeLoader.createFromUrl(url, {
    language: "en",
    addVideoInfo: true,
  });

  const result = await loader.load();

  const textSplitter = new RecursiveCharacterTextSplitter({
    separators: [" "],
    chunkSize: 2000,
    chunkOverlap: 100,
  });

  const texts = await textSplitter.splitDocuments(result);
  
  const chain = loadSummarizationChain(llm, {
    type: "map_reduce",
    verbose: false,
  });

  const res = await chain.call({
    input_documents: texts,
  });

  return {
    summary: res.text
  }
});
