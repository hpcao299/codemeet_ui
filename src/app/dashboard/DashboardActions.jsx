'use client';

import roomApi from '@/apis/roomApi';
import DashboardActionBtn from '@/components/DashboardActionBtn';
import { useRoomStore } from '@/stores';
import { Add, CalendarToday, PersonAddAlt1 } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

const DashboardActions = () => {
    const router = useRouter();
    const setRoomId = useRoomStore(state => state.setRoomId);

    const handleCreateRoom = async () => {
        try {
            const { data } = await roomApi.createRoom();
            setRoomId(data.roomId);
            router.push(`/room/${data.roomId}`);
        } catch (error) {
            console.error('Room creation failed:', error);
        }
    };

    return (
        <Grid container sx={{ mt: 1 }} spacing={3}>
            <Grid item md={4}>
                <DashboardActionBtn
                    backgroundColor="primary.main"
                    backgroundColorHover="primary.light"
                    title="Create Meeting"
                    desc="Start an instant meeting"
                    Icon={Add}
                    onClick={handleCreateRoom}
                    fontSizeIcon="32px"
                />
            </Grid>
            <Grid item md={4}>
                <DashboardActionBtn
                    backgroundColor="secondary.main"
                    backgroundColorHover="secondary.light"
                    title="Schedule Meeting"
                    desc="Plan your meeting"
                    Icon={CalendarToday}
                    fontSizeIcon="25px"
                />
            </Grid>
            <Grid item md={4}>
                <DashboardActionBtn
                    backgroundColor="#eaa00c"
                    backgroundColorHover="#e8b54f"
                    title="Join Meeting"
                    desc="Start an instant meeting"
                    Icon={PersonAddAlt1}
                    fontSizeIcon="28px"
                />
            </Grid>
        </Grid>
    );
};

export default DashboardActions;
