import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import DashboardActions from './DashboardActions';
import DashboardHeaderActions from './DashboardHeaderActions';

const DashboardPage = () => {
    return (
        <>
            <Box
                component="header"
                sx={{
                    width: '100%',
                }}
            >
                <Container
                    sx={{
                        py: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="h6">CodeMeet</Typography>
                    <DashboardHeaderActions />
                </Container>
            </Box>
            <Container sx={{ mb: 3 }}>
                <Box sx={{ mt: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            p: 2,
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
                                3:10 PM
                            </Typography>
                            <Typography variant="h6" component="div">
                                Saturday, March 23, 2024
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
                </Box>
                <DashboardActions />
            </Container>
        </>
    );
};

export default DashboardPage;
