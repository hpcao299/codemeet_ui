import { Box, Typography } from '@mui/material';
import React from 'react';

const DashboardActionBtn = ({
    backgroundColor,
    backgroundColorHover,
    title,
    desc,
    Icon,
    fontSizeIcon = 'large',
    ...props
}) => {
    return (
        <Box
            sx={{
                backgroundColor: backgroundColor,
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '200px',
                p: 2,
                color: 'white',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all .2s ease',
                '&:hover': {
                    backgroundColor: backgroundColorHover,
                },
            }}
            {...props}
        >
            <Typography variant="h6" component="div">
                {title}
            </Typography>
            <Typography variant="body1" component="div">
                {desc}
            </Typography>
            <Box
                sx={{
                    position: 'absolute',
                    top: '16px',
                    left: '12px',
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    borderRadius: '8px',
                }}
                className="flex-center"
            >
                <Icon fontSize="large" sx={{ fontSize: fontSizeIcon }} />
            </Box>
        </Box>
    );
};

export default DashboardActionBtn;
