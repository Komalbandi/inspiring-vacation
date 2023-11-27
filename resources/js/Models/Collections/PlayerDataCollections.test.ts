import { beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { PlayerDataCollections } from "./PlayerDataCollections";

describe("Test Player collection", () => {
    let lists = [
        {
            artist: "Ed Sheeran",
            song: "Shape of You",
            musicTime: "3:16",
            image: "https://i.ytimg.com/vi/JGwWNGJdvx8/maxresdefault.jpg",
        },
        {
            artist: "Billie Eilish",
            song: "BadGuy",
            musicTime: "4:00",
            image: "https://i.ytimg.com/vi/DyDfgMOUjCI/maxresdefault.jpg",
        },
        {
            artist: "Post Malone",
            song: "Circles",
            musicTime: "5:00",
            image: "https://i.ytimg.com/vi/wXhTHyIgQ_U/maxresdefault.jpg",
        },
        {
            artist: "Taylor Swift",
            song: "Shake ItOff",
            musicTime: "3:00",
            image: "https://i.ytimg.com/vi/nfWlot6h_JM/maxresdefault.jpg",
        },
        {
            artist: "The Weeknd",
            song: "Blinding Lights",
            musicTime: "1:59",
            image: "https://i.ytimg.com/vi/4NRXx6U8ABQ/maxresdefault.jpg",
        },
        {
            artist: "EdSheeran",
            song: "Photograph",
            musicTime: "7:00",
            image: "https://i.ytimg.com/vi/nSDgHBxUbVQ/maxresdefault.jpg",
        },
        {
            artist: "Adele",
            song: "Rolling in the Deep",
            musicTime: "6:20",
            image: "https://i.ytimg.com/vi/rYEDA3JcQqw/maxresdefault.jpg",
        },
        {
            artist: "PostMalone",
            song: "Sunflower",
            musicTime: "6:00",
            image: "https://i.ytimg.com/vi/ApXoWvfEYVU/maxresdefault.jpg",
        },
    ];

    let playerCollection;

    beforeEach(() => {
        playerCollection = null;
        playerCollection = new PlayerDataCollections(lists);
    });

    test("set collection", () => {
        expect(playerCollection.get().length).toEqual(8);

        for (let i = 0; i < playerCollection.get().length; i++) {
            expect(playerCollection.get()[i].Id()).toEqual(i);
            expect(playerCollection.get()[i].artist()).toEqual(lists[i].artist);
            expect(playerCollection.get()[i].song()).toEqual(lists[i].song);
            expect(playerCollection.get()[i].musicTime()).toEqual(
                lists[i].musicTime
            );
            expect(playerCollection.get()[i].image()).toEqual(lists[i].image);
        }
    });

    test("resetPlayedList", () => {
        playerCollection.resetPlayedList();

        for (let i = 0; i < playerCollection.get().length; i++) {
            expect(playerCollection.get()[i].played()).toEqual(false);
        }
    });

    test("test getArrayIndexes and getUnplayedList", () => {
        playerCollection.get()[0].setPlayed();
        playerCollection.get()[1].setPlayed();

        let unplayed = playerCollection.getUnplayedList();
        let indexes = playerCollection.getArrayIndexs(unplayed);

        expect(indexes).toEqual([2, 3, 4, 5, 6, 7]);
    });

    test("test areAllSongsPlayed", () => {
        expect(playerCollection.areAllSongsPlayed()).toEqual(false);

        playerCollection.get()[0].setPlayed();
        playerCollection.get()[1].setPlayed();
        expect(playerCollection.areAllSongsPlayed()).toEqual(false);

        for (let i = 2; i < playerCollection.get().length; i++) {
            playerCollection.get()[i].setPlayed();
        }
        expect(playerCollection.areAllSongsPlayed()).toEqual(true);
    });

    test("getNextSong When player is played for the first time, and no shuffle", () => {
        let nextSong = playerCollection.getNextSong(null, false);
        expect(nextSong.Id()).toEqual(0);
        expect(nextSong.artist()).toEqual(lists[0].artist);
        expect(nextSong.image()).toEqual(lists[0].image);
        expect(nextSong.song()).toEqual(lists[0].song);
    });

    test("getNextSong after first two songs are played, and no shuffle", () => {
        playerCollection.get()[0].setPlayed();
        playerCollection.get()[1].setPlayed();
        let nextSong = playerCollection.getNextSong(1, false);
        expect(nextSong.Id()).toEqual(2);
        expect(nextSong.artist()).toEqual(lists[2].artist);
        expect(nextSong.image()).toEqual(lists[2].image);
        expect(nextSong.song()).toEqual(lists[2].song);
    });

    test("getNextSong When player is played for the first time, and shuffle is on", () => {
        vi.spyOn(
            PlayerDataCollections.prototype,
            "getRandomArrayIdFromUnplayedList"
        ).mockImplementation(() => {
            return 5;
        });

        let nextSong = playerCollection.getNextSong(null, true);
        expect(nextSong.Id()).toEqual(5);
        expect(nextSong.artist()).toEqual(lists[5].artist);
        expect(nextSong.image()).toEqual(lists[5].image);
        expect(nextSong.song()).toEqual(lists[5].song);
    });

    test("getNextSong after first two songs are played, and shuffle is on", () => {
        vi.spyOn(
            PlayerDataCollections.prototype,
            "getRandomArrayIdFromUnplayedList"
        ).mockImplementation(() => {
            return 3;
        });
        playerCollection.get()[0].setPlayed();
        playerCollection.get()[1].setPlayed();
        let nextSong = playerCollection.getNextSong(1, true);
        expect(nextSong.Id()).toEqual(5);
        expect(nextSong.artist()).toEqual(lists[5].artist);
        expect(nextSong.image()).toEqual(lists[5].image);
        expect(nextSong.song()).toEqual(lists[5].song);
    });
});
