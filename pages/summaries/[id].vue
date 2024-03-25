<script setup lang="ts">
const route = useRoute()
const { data, pending, error } = useFetch('/api/transcription', {
    method: 'POST',
    body: { url: `https://www.youtube.com/watch?v=${route.params.id}` }
});
</script>
<template>
    <div>
        <h1 class="text-5xl center">Transcription</h1>
        <div v-if="pending">Please wait, loading summary<span class="loading loading-spinner loading-sm"></span></div>
        <div v-else-if="error" class="alert alert-error">Error: {{ error }}</div>
        <div v-else>
            {{ JSON.stringify(data, null, 2) }}
        </div>
    </div>
</template>