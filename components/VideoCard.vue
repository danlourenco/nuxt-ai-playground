<script setup lang="ts">

interface Props {
    title: string;
    url: string;
    imageUrl?: string;
}
defineProps<Props>();
</script>
<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <NuxtLink :to="url" class="btn btn-primary">Details</NuxtLink>
            </div>
        </div>
    </div>
</template>