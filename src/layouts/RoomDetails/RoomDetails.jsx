'use client';

import tabs from '@/constants/tabs';
import { useLayoutStore } from '@/stores';
import { ChatBubbleOutlined, Close, PeopleAltOutlined } from '@mui/icons-material';
import { Box, Drawer, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import RoomChatTab from './RoomChatTab';
import RoomMembersTab from './RoomMembersTab';

const CustomTab = styled(Tab)({
    width: '50%',
    minHeight: '56px',
});

const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`room-tabpanel-${index}`}
            aria-labelledby={`room-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
};

const RoomDetails = () => {
    const [open, tabIndex, setOpen, setTabIndex] = useLayoutStore(state => [
        state.openRoomDetails,
        state.roomDetailsTabValue,
        state.setOpenRoomDetails,
        state.setRoomDetailsTab,
    ]);

    const handleChangeTab = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)} sx={{ height: '100%' }}>
            <Box
                sx={{
                    width: '400px',
                    padding: '24px 20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Typography variant="h6" component="div">
                        Meeting details
                    </Typography>
                    <IconButton fontSize="medium" onClick={() => setOpen(false)}>
                        <Close />
                    </IconButton>
                </Box>
                <Tabs
                    value={tabIndex}
                    onChange={handleChangeTab}
                    aria-label="room-tabs"
                    sx={{
                        marginTop: '14px',
                        width: '100%',
                        borderBottom: 1,
                        borderBottomColor: '#ccc',
                    }}
                >
                    <CustomTab
                        label="People (4)"
                        icon={<PeopleAltOutlined />}
                        iconPosition="start"
                        id={`room-tab-${tabs.ROOM_MEMBERS}`}
                        aria-controls={`room-tabpanel-${tabs.ROOM_MEMBERS}`}
                    />
                    <CustomTab
                        label="Chat"
                        icon={<ChatBubbleOutlined />}
                        iconPosition="start"
                        id={`room-tab-${tabs.ROOM_CHAT}`}
                        aria-controls={`room-tabpanel-${tabs.ROOM_CHAT}`}
                    />
                </Tabs>
                <Box sx={{ mt: 3, height: '100%', overflowY: 'scroll', pb: 3 }}>
                    <TabPanel value={tabIndex} index={tabs.ROOM_MEMBERS}>
                        <RoomMembersTab />
                    </TabPanel>
                    <TabPanel value={tabIndex} index={tabs.ROOM_CHAT}>
                        <RoomChatTab />
                    </TabPanel>
                </Box>
            </Box>
        </Drawer>
    );
};

export default RoomDetails;
