<script setup>
const props = defineProps(["artist", "song", "musicTime", "image"]);
</script>
<template>
    <div class="flex flex-col justify-center">
        <img :src="props.image" class="w-full h-80 border-white border-r-2">
        <p class="flex justify-center text-white">{{ props.artist }}</p>
        <p class="flex justify-center text-purple-light">{{ props.song }}</p>
        <input
            class="playing-status"
            type="range"
            min="1"
            max="100"
            :value="props.musicTime"
        />
    </div>
</template>
