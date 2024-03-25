<script setup lang="ts">
const videos = [
    {
        title: 'Norfolk Zoning Board of Appeals Meeting - march 20, 2024',
        url: 'https://www.youtube.com/watch?v=X4Hcd2lOxmY'
    },
    {
        title: 'Video 2',
        url: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    }
]
const selectedUrl = ref('');
const { refresh } = await useFetch('/api/transcription', {
    lazy: true,
    method: 'POST',
    body: { url: selectedUrl.value }
});

// const getYouTubeTranscription = async (url: string) => {
//     try {
//         const response = await fetch('/api/transcription');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//         return { error: error.message as Error };
//     }
// };
</script>
<template>
    <h1 class="text-5xl center">Transcription</h1>

    <div class="flex gap-4">
        <VideoCard v-for="video in videos" :key="video.url" :title="video.title" :url="video.url" />
    </div>
</template>