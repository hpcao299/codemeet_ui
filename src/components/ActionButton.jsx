'use client';

import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomButton = styled(IconButton)({
    backgroundColor: '#eeeeee',
    padding: '10px',
});

const ActionButton = ({ children, ...props }) => {
    return <CustomButton {...props}>{children}</CustomButton>;
};

export default ActionButton;
