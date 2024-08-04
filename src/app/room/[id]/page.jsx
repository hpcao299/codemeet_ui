'use client';

import theme from '@/config/theme';
import CodeScreen from '@/layouts/CodeScreen';
import RoomNavbar from '@/layouts/RoomNavbar';
import { Container, ThemeProvider } from '@mui/material';

const RoomMeet = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ height: '100vh' }}>
                <Container
                    maxWidth={false}
                    sx={{ height: 'calc(100% - 82px)', paddingY: '24px', display: 'flex' }}
                >
                    <CodeScreen />
                </Container>
                <RoomNavbar />
            </div>
        </ThemeProvider>
    );
};

export default RoomMeet;
