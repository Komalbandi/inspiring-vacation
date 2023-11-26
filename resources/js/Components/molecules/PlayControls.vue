<script setup>
import PlayerButton from "@/Components/atoms/PlayerButton.vue";
import PlayIcon from "@/Components/atoms/PlayIcon.vue";
import PreviousTrackPlayIcon from "@/Components/atoms/PreviousTrackPlayIcon.vue";
import NextTrackPlayIcon from "@/Components/atoms/NextTrackPlayIcon.vue";
import ShufflePlayIcon from "@/Components/atoms/ShufflePlayIcon.vue";
</script>
<style>
.play-controls {
    display: flex;
    justify-content: center;
}
</style>
<template>
    <div class="play-controls">
        <PlayerButton>
            <ShufflePlayIcon class="fill-white"/>
        </PlayerButton>

        <PlayerButton class="flex justify-center">
            <PreviousTrackPlayIcon class="fill-white" />
        </PlayerButton>

        <PlayerButton class="flex justify-center">
            <PlayIcon />
        </PlayerButton>

        <PlayerButton class="flex justify-center">
            <NextTrackPlayIcon class="fill-white" />
        </PlayerButton>
    </div>
</template>
