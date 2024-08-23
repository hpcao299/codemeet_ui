import { MicOff } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const PersonBox = () => {
    return (
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
                position: 'relative',
            }}
        >
            <PersonBoxItem />
            <MyPersonBoxItem />
        </Box>
    );
};

const MyPersonBoxItem = () => {
    return (
        <Box
            position="absolute"
            sx={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                justifySelf: 'center',
                width: '20%',
                aspectRatio: '1 / 1',
                borderRadius: '8px',
                background: '#f5f5f5',
                border: '1px solid #eee',
                overflow: 'hidden',
                bottom: '16px',
                right: '16px',
            }}
        >
            <Image
                src="/example_avatar.png"
                alt="Demo user"
                width={64}
                height={64}
                style={{ marginBottom: '8px', borderRadius: '50%' }}
            />
            <Typography variant="body1" fontWeight="500">
                Demo user
            </Typography>
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

const PersonBoxItem = () => {
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
                background: '#fdfdfd',
                border: '1px solid #eee',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <Image
                src="/example_avatar.png"
                alt="Demo user"
                width={88}
                height={88}
                style={{ marginBottom: '8px', borderRadius: '50%' }}
            />
            <Typography variant="h6" fontWeight="500">
                Demo user
            </Typography>
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

export default PersonBox;
