import { currentUser } from '@clerk/nextjs/server';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import SettingsMenu from './SettingsMenu';

const DashboardHeaderActions = async () => {
    const user = await currentUser();

    console.log(user);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image
                src={user.imageUrl}
                alt={user.firstName}
                width={34}
                height={34}
                style={{ borderRadius: '50%' }}
            />
            <SettingsMenu />
            <Button variant="outlined">Upgrade to Pro</Button>
        </Box>
    );
};

export default DashboardHeaderActions;
