import axios from "axios";
export class Services {
    getPlayerData() {
        return new Promise((resolve) => {
            axios
                .post("/api/getPlayerData", {})
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }
}
