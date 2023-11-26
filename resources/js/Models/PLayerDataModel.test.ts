import { describe, expect, test, vi } from "vitest";
import { PlayerDataModel } from "./PlayerDataModel";

describe("Test Player model", () => {
    test("set Model", () => {
        let data = {
            artist: "Ed Sheeran",
            song: "Shape of You",
            musicTime: "3:16",
        };
        let playerModel = new PlayerDataModel(data);

        expect(playerModel.artist()).toEqual(data.artist);
        expect(playerModel.song()).toEqual(data.song);
        expect(playerModel.musicTime()).toEqual(data.musicTime);
    });
});
