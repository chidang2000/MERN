import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:8000/',
});

export const adressRequest = axios.create({
    baseURL: 'https://provinces.open-api.vn/api/',
});

export default httpRequest;
