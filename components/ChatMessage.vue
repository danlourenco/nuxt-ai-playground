<script setup lang="ts">
defineProps({
    message: String,
    isUser: Boolean,
    isLoading: Boolean
});
</script>
<template>
    <div class="chat" :class="[isUser ? 'chat-end' : 'chat-start']" >
        <div class="chat-bubble font-mono" :class="[isUser ? 'chat-bubble-primary' : 'chat-bubble-success']">{{ message }}</div>
    </div>
</template>