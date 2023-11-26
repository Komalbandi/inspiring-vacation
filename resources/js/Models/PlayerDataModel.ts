import { PlayListInterface } from "@/Interfaces/";
export class PlayerDataModel {
    data: PlayListInterface;
    constructor(data: PlayListInterface) {
        this.data = data;
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
}
