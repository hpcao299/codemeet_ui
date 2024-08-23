'use client';

import SnackbarProvider from '@/app/SnakebarContext';
import SocketProvider from '@/app/SocketContext';
import CodeScreen from '@/layouts/CodeScreen';
import PersonBox from '@/layouts/PersonBox';
import RoomNavbar from '@/layouts/RoomNavbar';
import { Container } from '@mui/material';
import dynamic from 'next/dynamic';

const RoomDetails = dynamic(() => import('@/layouts/RoomDetails'), { ssr: false });
const RoomSettings = dynamic(() => import('@/layouts/RoomSettings'), { ssr: false });

const RoomMeet = () => {
    return (
        <SnackbarProvider>
            <SocketProvider>
                <div style={{ height: '100vh' }}>
                    <Container
                        maxWidth={false}
                        sx={{ height: 'calc(100% - 82px)', p: '24px', display: 'flex' }}
                    >
                        <CodeScreen />
                        <PersonBox />
                    </Container>
                    <RoomNavbar />
                    <RoomDetails />
                    <RoomSettings />
                </div>
            </SocketProvider>
        </SnackbarProvider>
    );
};

export default RoomMeet;
