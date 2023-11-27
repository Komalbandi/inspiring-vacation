import { PlayListInterface } from "@/Interfaces/";
import { PlayerDataModel } from "../PlayerDataModel";
export class PlayerDataCollections {
    datas: PlayerDataModel[] = [];
    constructor(datas: PlayListInterface[]) {
        datas.forEach((data: PlayListInterface, index) => {
            this.add(data, index);
        });
    }
    add(data: PlayListInterface, index: number) {
        this.datas.push(new PlayerDataModel(data, index));
    }
    get() {
        return this.datas;
    }
    clear() {
        this.datas = [];
    }

    getNextSong(currentSongIndex?: number, isShuffle?: boolean) {
        let notPlayed = this.getUnplayedList();
        if (!this.areAllSongsPlayed()) {
            if (isShuffle) {
                return notPlayed[this.getRandomArrayIdFromUnplayedList()];
            } else {
                let ids = this.getArrayIndexs(notPlayed);
                let nextIndex;
                if (currentSongIndex) {
                    nextIndex = ids.findIndex((id) => id > currentSongIndex);
                } else {
                    nextIndex = 0;
                }
                return notPlayed[nextIndex];
            }
        } else {
            this.resetPlayedList();
            this.getNextSong(null, isShuffle);
        }
    }

    getRandomArrayIdFromUnplayedList() {
        let notPlayed = this.getUnplayedList();
        let ids = this.getArrayIndexs(notPlayed);
        return Math.floor(Math.random() * ids.length);
    }

    getUnplayedList() {
        return this.get().filter((data) => data.played() === false);
    }

    areAllSongsPlayed() {
        return this.getUnplayedList().length === 0 ? true : false;
    }

    getArrayIndexs(songs) {
        return songs.map((song) => song.Id());
    }

    buildPlayList() {
        let tmpPlayList = [];

        this.get().forEach((data) => {
            tmpPlayList.push({
                song: data.song(),
                artist: data.artist(),
                musicTime: data.musicTime(),
            });
        });

        return {
            playList: tmpPlayList,
        };
    }

    resetPlayedList() {
        this.get().forEach((data) => {
            data.setUnplayed();
        });
    }
}
