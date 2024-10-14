import { Box, Container, Typography } from '@mui/material';
import DashboardActions from './DashboardActions';
import DashboardBanner from './DashboardBanner';
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
                <DashboardBanner />
                <DashboardActions />
            </Container>
        </>
    );
};

export default DashboardPage;
