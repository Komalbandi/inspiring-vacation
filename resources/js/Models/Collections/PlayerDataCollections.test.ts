import { describe, expect, test, vi } from "vitest";
import { PlayerDataCollections } from "./PlayerDataCollections";

describe("Test Player collection", () => {
    test("set collection", () => {
        let lists = [
            {
                artist: "Ed Sheeran",
                song: "Shape of You",
                musicTime: "3:16",
            },
            { artist: "Billie Eilish", song: "BadGuy", musicTime: "4:00" },
            { artist: "Post Malone", song: "Circles", musicTime: "5:00" },
            {
                artist: "Taylor Swift",
                song: "Shake ItOff",
                musicTime: "3:00",
            },
            {
                artist: "The Weeknd",
                song: "Blinding Lights",
                musicTime: "1:59",
            },
            { artist: "EdSheeran", song: "Photograph", musicTime: "7:00" },
            {
                artist: "Adele",
                song: "Rolling in the Deep",
                musicTime: "6:20",
            },
            { artist: "PostMalone", song: "Sunflower", musicTime: "6:00" },
        ];
        let playerCollection = new PlayerDataCollections(lists);

        expect(playerCollection.get().length).toEqual(8);

        for (let i = 0; i < playerCollection.get().length; i++) {
            expect(playerCollection.get()[i].artist()).toEqual(lists[i].artist);
            expect(playerCollection.get()[i].song()).toEqual(lists[i].song);
            expect(playerCollection.get()[i].musicTime()).toEqual(
                lists[i].musicTime
            );
        }
    });
});
