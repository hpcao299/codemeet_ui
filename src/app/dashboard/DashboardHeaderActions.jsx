import { currentUser } from '@clerk/nextjs/server';
import { Settings } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const DashboardHeaderActions = async () => {
    const user = await currentUser();

    console.log(user);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image
                src="/example_avatar.png"
                alt="Example"
                width={34}
                height={34}
                style={{ borderRadius: '50%' }}
            />
            <IconButton>
                <Settings fontSize="medium" />
            </IconButton>
            <Button variant="outlined">Upgrade to Pro</Button>
        </Box>
    );
};

export default DashboardHeaderActions;
