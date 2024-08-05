import { create } from 'zustand';

const useLayoutStore = create(set => ({
    roomDetailsTabValue: 0,
    openRoomDetails: false,

    setOpenRoomDetails: (bool, tabIndex) => {
        set(state => ({
            openRoomDetails: bool,
            roomDetailsTabValue: tabIndex !== undefined ? tabIndex : state.roomDetailsTabValue,
        }));
    },
    setRoomDetailsTab(value) {
        set(() => ({ roomDetailsTabValue: value }));
    },
}));

export default useLayoutStore;
