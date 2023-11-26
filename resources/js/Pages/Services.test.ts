import { describe, expect, test, vi } from "vitest";
import { Services } from "./Services";
import * as axios from "axios";

describe("Test services", () => {
    test("getData from server", () => {
        let responseData = {
            playList: [
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
            ],
        };
        vi.spyOn(Services.prototype, "getPlayerData").mockImplementation(() => {
            return new Promise((resolve) => {
                resolve({ data: responseData });
            });
        });

        let services = new Services();
        services.getPlayerData().then((response) => {
            expect(response.data.playList.length).toEqual(8);
        });
    });
});
