'use client';

import { useLayoutStore } from '@/stores';
import { useClerk } from '@clerk/nextjs';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import Image from 'next/image';

const AccountSettings = () => {
    const { user } = useClerk();
    const [open, setOpen] = useLayoutStore(state => [
        state.openAccountSettingsModal,
        state.setOpenAccountSettingsModal,
    ]);

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '32vw',
        bgcolor: 'background.paper',
        py: 4,
        px: 3,
        borderRadius: '8px',
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h4" component="h4" sx={{ mb: 0.4 }}>
                    Profile settings
                </Typography>
                <Typography variant="body2" component="div">
                    Change your profile details.
                </Typography>
                <Box
                    sx={{
                        mt: 2,
                        p: 3,
                        background: '#f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        borderRadius: '4px',
                    }}
                >
                    <Image
                        src={user.imageUrl}
                        alt={user.fullName}
                        width={56}
                        height={56}
                        style={{ borderRadius: '50%' }}
                    />
                    <Typography variant="body2" sx={{ mt: 1, mb: 1.5, color: '#555' }}>
                        Image must be 256x256 · Max 2MB
                    </Typography>
                    <Button variant="outlined">Upload Image</Button>
                </Box>
                <TextField
                    variant="outlined"
                    label="Your name"
                    defaultValue={user.fullName}
                    fullWidth
                    helperText="This name is shown in meeting room."
                    sx={{ mt: 3 }}
                />
                <TextField
                    variant="outlined"
                    label="Username"
                    defaultValue={user.username}
                    fullWidth
                    sx={{ mt: 3 }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        mt: 2,
                        gap: 1,
                    }}
                >
                    <Button variant="outlined" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" disabled>
                        Save changes
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AccountSettings;
