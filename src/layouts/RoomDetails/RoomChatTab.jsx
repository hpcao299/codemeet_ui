import { useSocket } from '@/app/SocketContext';
import { Send } from '@mui/icons-material';
import { Box, IconButton, Switch, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const RoomChatTab = () => {
    const socket = useSocket();
    const [messages, setMessages] = useState([
        { username: 'Jameskaois69', content: 'Testing messages', time: '3:03 PM' },
    ]);

    useEffect(() => {
        if (!socket) return;

        socket.on('chat-message', message => {
            setMessages(state => [
                ...state,
                { username: 'Jameskaois69', content: message, time: '3:03 PM' },
            ]);
        });
    }, [socket]);

    return (
        <Box sx={{ paddingBottom: '70px' }}>
            <Box
                sx={{
                    p: '8px 16px',
                    background: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: '4px',
                }}
            >
                <Typography variant="body2" component="div">
                    Let everyone send messages
                </Typography>
                <Switch inputProps={{ 'aria-label': 'Allow messages' }} defaultChecked />
            </Box>
            <Box>
                {messages.map((messageItem, index) => (
                    <Message key={index} {...messageItem} />
                ))}
            </Box>
            <SendMessage socket={socket} setMessages={setMessages} />
        </Box>
    );
};

const SendMessage = ({ socket, setMessages }) => {
    const [value, setValue] = useState('');

    const handleSendMessage = e => {
        e.preventDefault();

        if (value && socket) {
            setMessages(state => [
                ...state,
                { content: value, username: 'Jameskaois69', time: '3:09 PM' },
            ]);
            socket.emit('chat-message', value);
            setValue('');
        }
    };

    return (
        <Box
            sx={{
                mt: 'auto',
                px: '20px',
                pt: 1,
                pb: 2.5,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                borderTop: 1,
                borderTopColor: '#eee',
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                zIndex: 10,
            }}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSendMessage}
        >
            <TextField
                label="Send a message to everyone"
                variant="standard"
                sx={{ flex: 1, mr: 1 }}
                size="small"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <IconButton disabled={!value} color="primary" type="submit">
                <Send fontSize="small" />
            </IconButton>
        </Box>
    );
};

const Message = ({ content, username, time }) => {
    return (
        <Box sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="div" fontWeight="500">
                    {username}
                </Typography>
                <Typography variant="body2" component="div" sx={{ ml: 2, color: '#777' }}>
                    {time}
                </Typography>
            </Box>
            <Typography variant="body1" component="div" fontSize={15} fontWeight="400">
                {content}
            </Typography>
        </Box>
    );
};

export default RoomChatTab;
