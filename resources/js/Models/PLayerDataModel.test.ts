import { describe, expect, test, vi } from "vitest";
import { PlayerDataModel } from "./PlayerDataModel";

describe("Test Player model", () => {
    let data = {
        artist: "Ed Sheeran",
        song: "Shape of You",
        musicTime: "3:16",
        image: "https://i.ytimg.com/vi/JGwWNGJdvx8/maxresdefault.jpg",
    };
    test("set Model", () => {
        let playerModel = new PlayerDataModel(data, 0);

        expect(playerModel.artist()).toEqual(data.artist);
        expect(playerModel.song()).toEqual(data.song);
        expect(playerModel.musicTime()).toEqual(data.musicTime);
        expect(playerModel.Id()).toEqual(0);
        expect(playerModel.image()).toEqual(data.image);
        expect(playerModel.played()).toEqual(false);
    });

    test('setUnplayed', () => {
        let playerModel = new PlayerDataModel(data, 0);
        playerModel.setPlayed();
        playerModel.setUnplayed();

        expect(playerModel.played()).toEqual(false);
    });
});
