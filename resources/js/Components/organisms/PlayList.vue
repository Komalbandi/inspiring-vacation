<script setup>
const props = defineProps(["artist", "song", "musicTime"]);
</script>
<template>
    <div class="flex flex-row justify-between">
        <div class="music-name">
            <p class="text-white">{{ props.artist }}</p>
            <p class="text-purple-light">{{ props.song }}</p>
        </div>
        <div class="music-time">
            <p class="text-white">{{ props.musicTime }}</p>
        </div>
    </div>
</template>
