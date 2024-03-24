<script setup lang="ts">
import { useChat } from 'ai/vue';

const { messages, input, handleSubmit } = useChat();
</script>
<template>
    <div class="w-1/4">
        <h2>Chatbot</h2>
        <div>
            <ChatMessage v-for="m in messages" key="m.id" :message="m.content" :is-user="m.role === 'user'" />
        </div>
        <form class="join w-full mt-4" @submit="handleSubmit">
            <input class="input input-bordered join-item border-primary w-full" placeholder="Type a message here" v-model="input"/>
            <input type="submit" class="btn btn-outline btn-primary join-item " />
        </form>
    </div>
</template>