import socketEvents from '@/constants/socketEvents';
import { useRoomStore } from '@/stores';
import { Box, CircularProgress } from '@mui/material';
import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
    const roomId = useRoomStore(state => state.roomId);
    const [socket, setSocket] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL);
        setSocket(newSocket);

        newSocket.emit(socketEvents.CREATE_ROOM, roomId);

        newSocket.on(socketEvents.ROOM_CREATED_SUCCESSFULLY, () => {
            setIsLoading(false);
        });

        return () => newSocket.disconnect();
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {isLoading ? (
                <Box
                    sx={{
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CircularProgress size={60} />
                </Box>
            ) : (
                children
            )}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
