<script setup lang="ts">
import { useChat } from 'ai/vue';

const { messages, input, handleSubmit, isLoading } = useChat();
</script>
<template>
    <div class="flex flex-col h-full my-8 justify-between">
        <h2 class="text-lg font-mono">OpenAI Chatbot with Vercel AI</h2>
        <div class="overflow-y-scroll max-h-fit">
            <ChatMessage v-for="m in messages" key="m.id" :message="m.content" :is-user="m.role === 'user'" :is-loading="isLoading" />
        </div>
        <form class="join w-full mt-4 justify-self-end" @submit="handleSubmit" >
            <input class="input input-bordered join-item border-primary w-full" placeholder="Type a message here" v-model="input"/>
            <input type="submit" class="btn btn-outline btn-primary join-item " />
        </form>
    </div>
</template>