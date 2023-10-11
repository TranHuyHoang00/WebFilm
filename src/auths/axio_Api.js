import axios from 'axios';
import { GetLocal_Token } from './localStorage';
const api = axios.create({
    baseURL: `${process.env.REACT_APP_API}`,
});
api.interceptors.request.use(
    (config) => {
        let token = GetLocal_Token();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
api.interceptors.response.use(

    (response) => {
        return response;
    },
    async (error) => {
        if (error.response.status === 401) {
        }
        return Promise.reject(error);
    }
);

export default api;
