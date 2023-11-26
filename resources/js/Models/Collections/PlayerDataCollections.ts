import { PlayListInterface } from "@/Interfaces/";
import { PlayerDataModel } from "../PlayerDataModel";
export class PlayerDataCollections {
    datas: PlayerDataModel[] = [];
    constructor(datas: PlayListInterface[]) {
        datas.forEach((data: PlayListInterface) => {
            this.add(data);
        });
    }
    add(data: PlayListInterface) {
        this.datas.push(new PlayerDataModel(data));
    }
    get() {
        return this.datas;
    }
    clear() {
        this.datas = [];
    }
}
