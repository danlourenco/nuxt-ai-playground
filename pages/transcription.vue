<script setup lang="ts">
const { data, pending, error, refresh } = await useFetch('/api/videos') 
</script>
<template>
    <h1 class="text-5xl center">Transcription</h1>
    <div v-if="pending"><NuxtLoadingIndicator /></div>
    <div class="flex gap-4 container flex-wrap">
        <VideoCard v-for="video in data?.results" :key="video.id" :title="video.title" :description="video.description" :thumbnail="video.thumbnail" :id="video.id" />
    </div>
</template>