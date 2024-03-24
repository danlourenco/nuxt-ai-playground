<script setup lang="ts">

</script>
<template>
    <div class="w-1/4">
        <h2>Chatbot</h2>
        <div>
            <ChatMessage message="I'm a bot" :is-bot="true" />
            <ChatMessage message="Hello" :is-bot="false" />
        </div>
        <div class="join w-full mt-4">
            <input class="input input-bordered join-item border-primary w-full" placeholder="Type a message here" />
            <button class="btn btn-outline btn-primary join-item ">Send</button>
        </div>
    </div>
</template>