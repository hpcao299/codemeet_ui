import { Add, CalendarToday, PersonAddAlt1, Settings } from '@mui/icons-material';
import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

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
                </Container>
            </Box>
            <Container>
                <Box sx={{ mt: 3 }}>
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
                <Grid container sx={{ mt: 3 }} spacing={3}>
                    <Grid item md={4}>
                        <Box
                            sx={{
                                backgroundColor: 'primary.main',
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
                                    backgroundColor: 'primary.light',
                                },
                            }}
                        >
                            <Typography variant="h6" component="div">
                                Create Meeting
                            </Typography>
                            <Typography variant="body1" component="div">
                                Start an instant meeting
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
                                <Add fontSize="large" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box
                            sx={{
                                position: 'relative',
                                backgroundColor: 'secondary.main',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                height: '200px',
                                p: 2,
                                color: 'white',
                                transition: 'all .2s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'secondary.light',
                                },
                            }}
                        >
                            <Typography variant="h6" component="div">
                                Schedule Meeting
                            </Typography>
                            <Typography variant="body1" component="div">
                                Plan your meeting
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
                                <CalendarToday sx={{ fontSize: '25px' }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box
                            sx={{
                                position: 'relative',
                                backgroundColor: '#eaa00c',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                height: '200px',
                                p: 2,
                                color: 'white',
                                transition: 'all .2s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#e8b54f',
                                },
                            }}
                        >
                            <Typography variant="h6" component="div">
                                Join Meeting
                            </Typography>
                            <Typography variant="body1" component="div">
                                Start an instant meeting
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
                                <PersonAddAlt1 sx={{ fontSize: '28px' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default DashboardPage;
