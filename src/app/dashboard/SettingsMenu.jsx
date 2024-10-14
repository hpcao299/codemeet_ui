'use client';

import { AccountCircle, Logout, Settings } from '@mui/icons-material';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { SignOutButton } from '@clerk/nextjs';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useLayoutStore } from '@/stores';

const RoomSettings = dynamic(() => import('@/layouts/RoomSettings'), { ssr: false });
const AccountSettings = dynamic(() => import('@/layouts/AccountSettings'), { ssr: false });

const SettingsMenu = () => {
    const [setOpenSettingsModal, setOpenAccountSettingsModal] = useLayoutStore(state => [
        state.setOpenSettingsModal,
        state.setOpenAccountSettingsModal,
    ]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick}>
                <Settings fontSize="medium" />
            </IconButton>
            <Menu
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        handleClose();
                        setOpenAccountSettingsModal(true);
                    }}
                >
                    <AccountCircle sx={{ mr: 0.6 }} /> My account
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleClose();
                        setOpenSettingsModal(true);
                    }}
                >
                    <Settings sx={{ mr: 0.6 }} /> Settings
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <SignOutButton>
                    <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                        <Logout sx={{ mr: 0.6 }} />
                        Logout
                    </MenuItem>
                </SignOutButton>
            </Menu>
            <AccountSettings />
            <RoomSettings />
        </div>
    );
};

export default SettingsMenu;
