import axios from "axios";


const api = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
});

export default api