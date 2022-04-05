import axios from "axios";
const URL = "http://localhost:3001/recordstore";

export function getIndex () {
    const response = axios.get(URL);
    return response;
};

export function getItem(id) {
    const response = axios.get(`${URL}/${id}`);
    return response;
};

export function deleteItem(id) {
    const response = axios.delete(`${URL}/${id}`);
    return response;
};

export function createItem(id) {
    const response = axios.post(URL, id);
    return response;
};

export function editItem(id, updatedItem) {
    const response = axios.put(`${URL}/${id}`, updatedItem);
    return response;
};