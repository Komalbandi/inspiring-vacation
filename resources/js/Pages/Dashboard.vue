<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div
                        class="p-6 text-gray-900 flex sm:flex-col md:flex-row-reverse"
                        v-if="playerDataCollection.data !== 0"
                    >
                        <div class="sm:w-full md:w-1/2 md:ml-6">
                            <PlayLists
                                class="mb-1"
                                :lists="
                                    playerDataCollection.data.buildPlayList()
                                "
                            ></PlayLists>
                        </div>
                        <div class="sm:w-full md:w-1/2">
                            <CurrentlyPlaying
                                class="w-full"
                                :artist="getCurrnetPLayList().artist()"
                                :song="getCurrnetPLayList().song()"
                                :musicTimes="getCurrnetPLayList().musicTime()"
                                :image="getCurrnetPLayList().image()"
                            />
                            <PlayControls class="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import { onBeforeMount, reactive } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PlayControls from "@/Components/molecules/PlayControls.vue";
import CurrentlyPlaying from "@/Components/organisms/CurrentlyPlaying.vue";
import PlayLists from "@/Components/organisms/PlayLists.vue";
import { Head } from "@inertiajs/vue3";
import { Services } from "./Services";
import { PlayerDataCollections } from "../models/Collections/PlayerDataCollections";

let service = new Services();

let playerDataCollection = reactive({ data: 0 });

onBeforeMount(() => {
    getPlayListCommand();
});

function getPlayListCommand() {
    getPlayerData().then((data) => {
        setPlayerDataCollection(data);
    });
}

function getPlayerData() {
    return new Promise((resolve) => {
        service.getPlayerData().then((res) => {
            resolve(res);
        });
    });
}

function setPlayerDataCollection(lists) {
    playerDataCollection.data = new PlayerDataCollections(lists);
}

function getCurrnetPLayList() {
    return playerDataCollection.data.getNextSong(null, false);
}
</script>
