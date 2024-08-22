import axiosClient from './axiosClient';

const roomApi = {
    async createRoom() {
        const url = '/room/create';
        return axiosClient.post(url);
    },
};

export default roomApi;
