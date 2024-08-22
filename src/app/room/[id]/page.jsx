'use client';

import SocketProvider from '@/app/SocketContext';
import CodeScreen from '@/layouts/CodeScreen';
import RoomNavbar from '@/layouts/RoomNavbar';
import { MicOff } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const RoomDetails = dynamic(() => import('@/layouts/RoomDetails'), { ssr: false });
const RoomSettings = dynamic(() => import('@/layouts/RoomSettings'), { ssr: false });

const RoomMeet = () => {
    return (
        <SocketProvider>
            <div style={{ height: '100vh' }}>
                <Container
                    maxWidth={false}
                    sx={{ height: 'calc(100% - 82px)', p: '24px', display: 'flex' }}
                >
                    <CodeScreen />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: '30px',
                            flex: 1,
                            gap: '20px',
                            overflowY: 'scroll',
                        }}
                    >
                        {[1, 1].map((_, index) => (
                            <PersonBox key={index} />
                        ))}
                    </Box>
                </Container>
                <RoomNavbar />
                <RoomDetails />
                <RoomSettings />
            </div>
        </SocketProvider>
    );
};

const PersonBox = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                justifySelf: 'center',
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: '8px',
                background: '#f5f5f5',
                border: '1px solid #eee',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <Image
                src="/example_avatar.png"
                alt="Demo user"
                width={64}
                height={64}
                style={{ marginBottom: '8px', borderRadius: '50%' }}
            />
            <Typography variant="body1">Demo user</Typography>
            <Box
                sx={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: '#e5e5e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* <Mic fontSize="small" /> */}
                <MicOff fontSize="small" />
            </Box>
        </Box>
    );
};

export default RoomMeet;
