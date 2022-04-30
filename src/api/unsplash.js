import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 3ZtaHsoW6LFAWnt3f7U-Ki9pZtJLkT9x62GyaD5E9lM",
        "Accept-Version": "v1",
    },
});
