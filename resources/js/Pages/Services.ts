import axios from "axios";
export class Services {
    getPlayerData() {
        let url = "http://localhost/api/playList";
        return new Promise((resolve) => {
            axios
                .post(url, {})
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }
}
