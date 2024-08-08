import { Logout, MoreVert, Search, StarBorder } from '@mui/icons-material';
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    OutlinedInput,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const RoomMembersTab = () => {
    return (
        <Box>
            <FormControl sx={{ width: '100%' }}>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                    placeholder="Search for people"
                    label=""
                />
            </FormControl>
            <div>
                {[1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                    <Person key={index} />
                ))}
            </div>
        </Box>
    );
};

const Person = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ mt: 3.5, display: 'flex', alignItems: 'center' }}>
            <Image
                src="/example_avatar.png"
                alt="Example avatar"
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
            />
            <Box sx={{ ml: 1.5, flex: 1 }}>
                <Typography variant="body2" component="div" fontWeight="500">
                    Amy Lui (you)
                </Typography>
                <Typography variant="body2" component="div" fontSize="12px">
                    Meeting host
                </Typography>
            </Box>
            <IconButton onClick={handleClick}>
                <MoreVert />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{ py: '4px' }}>
                <MenuItem divider onClick={handleClose} sx={{ fontSize: '14px' }}>
                    <StarBorder sx={{ mr: '4px' }} /> Make co-host
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ fontSize: '14px', color: 'error.main' }}>
                    <Logout sx={{ mr: '4px' }} /> <span>Remove</span>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default RoomMembersTab;
