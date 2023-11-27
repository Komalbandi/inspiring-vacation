import { beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Dashboard from "./Dashboard.vue";
const wrapper = mount(Dashboard);

describe("Dashboard test", () => {
    test("getPlayListCommand", () => {
        vi.spyOn(Dashboard.prototype, "getPlayListCommand").getMockImplementation();
        vi.spyOn(Dashboard.prototype, "getPlayerData").getMockImplementation();
        vi.spyOn(Dashboard.prototype, "setPlayerData").getMockImplementation();
        Dashboard.getPlayListCommand();

        expect(Dashboard.prototype.getPlayerData).toHaveBeenCalled();
        expect(Dashboard.prototype.setPlayerData).toHaveBeenCalled();
    });
});
