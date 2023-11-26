<script setup>
import PlayList from "@/Components/organisms/PlayList.vue";
const props = defineProps(["lists"]);
</script>
<template>
    <div v-for="playList in props.lists.playList">
        <PlayList
            :song="playList.song"
            :artist="playList.artist"
            :musicTime="playList.musicTime"
        />
    </div>
</template>
