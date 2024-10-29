import axios from "axios";


export const getAll = async () => {
    try {
        let response = await axios.get("http://localhost:3090/list");
        return response.data;
    } catch (e) {
        return [];
    }
}

export const save = async (job) => {
    try {
        await axios.post("http://localhost:3090/list", job);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}