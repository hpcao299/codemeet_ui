import { create } from 'zustand';

const useRoomStore = create(set => ({
    roomId: '',
    setRoomId(id) {
        set(() => ({ roomId: id }));
    },
}));

export default useRoomStore;
