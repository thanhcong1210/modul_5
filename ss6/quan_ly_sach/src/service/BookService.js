import axios from "axios";


const URL_BOOK = "http://localhost:8080/books";

export const getAllBooks = async () => {
    try {
        let response = await axios.get(URL_BOOK);
        return response.data;
    } catch (err) {
        return [];
    }
}

export const saveBook = async (todo) => {
    try {
        await axios.post(URL_BOOK, todo);
        return true
    } catch (err) {
        return false;
    }
}

export const deleteBook = async (id) => {
    try {
        await axios.delete(`${URL_BOOK}/${id}`);
        return true
    } catch (err) {
        return false
    }
}

export const getBookById = async (id) => {
    try {
        const response = await axios.get(`${URL_BOOK}/${id}`);
        return response.data;
    } catch (err) {
        return [];
    }
}

export const editBook = async (id, value) => {
    try {
        await axios.put(`${URL_BOOK}/${id}`, value);
        return true;
    } catch (err) {
        return false;
    }
}