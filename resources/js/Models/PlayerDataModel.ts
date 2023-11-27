import { PlayListInterface } from "@/Interfaces/";
export class PlayerDataModel {
    data: PlayListInterface;
    constructor(data: PlayListInterface, index: number) {
        this.data = data;
        this.data.id = index;
        this.data.played = false;
    }

    artist() {
        return this.data.artist;
    }

    song() {
        return this.data.song;
    }

    musicTime() {
        return this.data.musicTime;
    }

    Id() {
        return this.data.id;
    }

    image() {
        return this.data.image;
    }

    played() {
        return this.data.played;
    }

    setUnplayed() {
        this.data.played = false;
    }

    setPlayed() {
        this.data.played = true;
    }
}
