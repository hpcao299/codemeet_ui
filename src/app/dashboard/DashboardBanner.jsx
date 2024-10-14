'use client';

import { useCurrentTime } from '@/hooks';
import { getCurrentFormattedDate } from '@/utils/timeUtil';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const DashboardBanner = () => {
    const currentTime = useCurrentTime();

    return (
        <Box
            sx={{
                display: 'flex',
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                p: 2,
                mt: 1,
            }}
        >
            <Box
                sx={{
                    width: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}
            >
                <Typography variant="h3" component="div">
                    {currentTime}
                </Typography>
                <Typography variant="h6" component="div">
                    {getCurrentFormattedDate()}
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <Image
                        src="/meeting_image.jpg"
                        alt="Meeting Image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                    />
                    <Typography variant="h6" component="div" textAlign="center">
                        Meeting with code friend
                    </Typography>
                    <Typography variant="body1" component="div" textAlign="center">
                        Enjoy meeting with your code friend!
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardBanner;
