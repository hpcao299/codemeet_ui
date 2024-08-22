import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (err) {
        return Promise.reject(err);
    },
);

axiosClient.interceptors.response.use(
    function (response) {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    function (err) {
        return Promise.reject(err.response.data);
    },
);

export default axiosClient;
