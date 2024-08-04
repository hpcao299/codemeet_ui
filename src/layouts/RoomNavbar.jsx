import ActionButton from '@/components/ActionButton';
import {
    BackHandOutlined,
    CallEnd,
    MessageOutlined,
    Mic,
    MoreVert,
    PeopleAlt,
} from '@mui/icons-material';
import { AppBar, Badge, Container, IconButton, Typography } from '@mui/material';

const RoomNavbar = () => {
    return (
        <AppBar position="fixed" sx={{ top: 'unset', bottom: 0 }} color="transparent">
            <Container
                maxWidth={false}
                sx={{
                    paddingY: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h6" component="div">
                    CodeMeet
                </Typography>
                <Container
                    maxWidth={false}
                    sx={{ display: 'flex', gap: '14px', width: 'max-content', padding: 0 }}
                >
                    <ActionButton size="medium" aria-label="off-mic">
                        <Mic sx={{ fontSize: '26px' }} />
                    </ActionButton>
                    <ActionButton size="medium" aria-label="raise-hand">
                        <BackHandOutlined sx={{ fontSize: '26px' }} />
                    </ActionButton>
                    <ActionButton size="medium" aria-label="settings">
                        <MoreVert sx={{ fontSize: '26px' }} />
                    </ActionButton>
                    <ActionButton
                        size="medium"
                        color="error"
                        sx={{
                            paddingX: '16px',
                            backgroundColor: '#d32f2f',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#ed3535',
                                color: '#fff',
                            },
                        }}
                    >
                        <CallEnd sx={{ fontSize: '26px' }} />
                    </ActionButton>
                </Container>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <IconButton size="medium" sx={{ padding: '10px' }} aria-label="show-members">
                        <Badge badgeContent={4} color="primary">
                            <PeopleAlt sx={{ fontSize: '26px' }} />
                        </Badge>
                    </IconButton>
                    <IconButton size="medium" sx={{ padding: '10px' }} aria-label="show-chat">
                        <MessageOutlined sx={{ fontSize: '26px' }} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: '400', marginLeft: '6px' }}
                    >
                        10:52
                    </Typography>
                </div>
            </Container>
        </AppBar>
    );
};

export default RoomNavbar;
