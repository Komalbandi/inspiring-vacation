<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <PlayLists class="mb-1" :lists="lists"></PlayLists>
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
import { Services } from "./Services";

let service = new Services();

let lists;

function getPlayerData() {
    service.getPlayerData().then((res) => {
        this.lists = res.data;
    });
}

</script>
