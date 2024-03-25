<script setup lang="ts">

interface Props {
    title: string;
    description: string;
    id: string;
    thumbnail: string;
}
const props = defineProps<Props>();
const route = `/summaries/${props.id}`
</script>
<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img :src="props.thumbnail" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">{{ props.title }}</h2>
            <p>{{ props.description }}</p>
            <div class="card-actions justify-end">
                <NuxtLink :to="route" class="btn btn-primary">Details</NuxtLink>
            </div>
        </div>
    </div>
</template>