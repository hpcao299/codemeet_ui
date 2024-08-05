import { Send } from '@mui/icons-material';
import { Box, IconButton, Switch, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const RoomChatTab = () => {
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
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                    <Message />
                ))}
            </Box>
            <SendMessage />
        </Box>
    );
};

const SendMessage = () => {
    const [value, setValue] = useState('');

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

const Message = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="div" fontWeight="500">
                    Demo user
                </Typography>
                <Typography variant="body2" component="div" sx={{ ml: 2, color: '#777' }}>
                    3:03 PM
                </Typography>
            </Box>
            <Typography variant="body1" component="div" fontSize={15} fontWeight="400">
                Where are the links bro?
            </Typography>
        </Box>
    );
};

export default RoomChatTab;
