import { create } from 'zustand';

const useLayoutStore = create(set => ({
    roomDetailsTabValue: 0,
    openRoomDetails: false,
    openSettingsModal: false,
    openAccountSettingsModal: false,

    setOpenRoomDetails: (bool, tabIndex) => {
        set(state => ({
            openRoomDetails: bool,
            roomDetailsTabValue: tabIndex !== undefined ? tabIndex : state.roomDetailsTabValue,
        }));
    },
    setRoomDetailsTab(value) {
        set(() => ({ roomDetailsTabValue: value }));
    },
    setOpenSettingsModal(bool) {
        set(() => ({ openSettingsModal: bool }));
    },
    setOpenAccountSettingsModal(bool) {
        set(() => ({ openAccountSettingsModal: bool }));
    },
}));

export default useLayoutStore;
