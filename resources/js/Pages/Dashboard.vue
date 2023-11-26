<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <PlayLists
                            class="mb-1"
                            :lists="lists"
                        ></PlayLists>
                        <CurrentlyPlaying
                            artist="Michael"
                            song="thriller"
                            musicTimes="3:00"
                        />
                        <PlayControls />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PlayControls from "@/Components/molecules/PlayControls.vue";
import CurrentlyPlaying from "@/Components/organisms/CurrentlyPlaying.vue";
import PlayLists from "@/Components/organisms/PlayLists.vue";
import { Head } from "@inertiajs/vue3";

const lists = {
    playList: [
        { artist: "Ed Sheeran", song: "Shape of You", musicTime: "3:16" },
        { artist: "Billie Eilish", song: "BadGuy", musicTime: "4:00" },
        { artist: "Post Malone", song: "Circles", musicTime: "5:00" },
        { artist: "Taylor Swift", song: "Shake ItOff", musicTime: "3:00" },
        { artist: "The Weeknd", song: "Blinding Lights", musicTime: "1:59" },
        { artist: "EdSheeran", song: "Photograph", musicTime: "7:00" },
        { artist: "Adele", song: "Rolling in the Deep", musicTime: "6:20" },
        { artist: "PostMalone", song: "Sunflower", musicTime: "6:00" },
    ],
};
</script>
