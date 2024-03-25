import { Client, MusicClient } from "youtubei";

export default defineEventHandler(async (event) => {    
    const youtube = new Client()
    const channel = await youtube.findOne("Norfolk Community Television (NCTV)", {
		type: "channel", // video | playlist | channel | all
	});
    await channel?.live.next()
    console.log(channel?.live.items);
    const results = channel?.live.items.map((item) => ({
        description: item.description,
        duration: item.duration,
        id: item.id,
        thumbnail: item.thumbnails.best,
        title: item.title,
        uploadDate: item.uploadDate,
    }))
    return {
        results
    }
});