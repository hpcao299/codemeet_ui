'use client';

import { useLayoutStore } from '@/stores';
import { Close, DarkMode, LightMode, Mic, SettingsBrightness } from '@mui/icons-material';
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Typography,
} from '@mui/material';
import styles from './RoomSettings.module.css';

const RoomSettings = () => {
    const [open, setOpen] = useLayoutStore(state => [
        state.openSettingsModal,
        state.setOpenSettingsModal,
    ]);

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40vw',
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: '12px',
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 2,
                    }}
                >
                    <Typography variant="h4" component="h4">
                        Settings
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </Box>
                <div>
                    <Typography variant="h6" component="h5" color="primary.main">
                        Microphone
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: 1,
                            mb: 3,
                        }}
                    >
                        <FormControl size="small" sx={{ width: '70%' }}>
                            <InputLabel>Microphone</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Microphone"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton sx={{ mr: 0.5 }}>
                                <Mic />
                            </IconButton>
                            <div className={`${styles.talkingIndicator}`}>
                                <div className={styles.dot}></div>
                                <div className={styles.dot}></div>
                                <div className={styles.dot}></div>
                            </div>
                        </Box>
                    </Box>
                </div>
                <div>
                    <Typography variant="h6" component="h5" color="primary.main">
                        Speakers
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: 1,
                            mb: 3,
                        }}
                    >
                        <FormControl size="small" sx={{ width: '70%' }}>
                            <InputLabel>Speakers</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Speakers"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div>
                    <Typography variant="h6" component="h5" color="primary.main">
                        Appearance
                    </Typography>
                    <Box
                        sx={{
                            mt: 1.2,
                        }}
                    >
                        <ButtonGroup
                            variant="outlined"
                            sx={{
                                '.MuiButtonGroup-grouped:not(.MuiButton-colorPrimary)': {
                                    borderColor: '#dfe2e7',
                                    color: '#000',
                                },
                                '.MuiButtonGroup-grouped': {
                                    minWidth: '100px',
                                },
                            }}
                        >
                            <Button startIcon={<LightMode />} size="large" color="info">
                                Light
                            </Button>
                            <Button startIcon={<SettingsBrightness />} size="large" color="info">
                                System
                            </Button>
                            <Button startIcon={<DarkMode />} size="large" color="primary">
                                Dark
                            </Button>
                        </ButtonGroup>
                        <Box sx={{ mt: 1.5 }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        inputProps={{
                                            'aria-label': 'Use same theme for code editor.',
                                        }}
                                        defaultChecked
                                    />
                                }
                                label="Use same theme for code editor."
                            />
                            <Typography
                                variant="h6"
                                component="h6"
                                color="primary"
                                fontSize="18px"
                                fontWeight="500"
                                sx={{ mt: 1 }}
                            >
                                Editor appearance
                            </Typography>
                            <ButtonGroup
                                variant="outlined"
                                sx={{
                                    '.MuiButtonGroup-grouped:not(.MuiButton-colorPrimary)': {
                                        borderColor: '#dfe2e7',
                                        color: '#000',
                                    },
                                    '.MuiButtonGroup-grouped': {
                                        minWidth: '100px',
                                    },
                                    mt: 1.2,
                                }}
                            >
                                <Button startIcon={<LightMode />} size="medium" color="info">
                                    Light
                                </Button>
                                <Button startIcon={<DarkMode />} size="medium" color="primary">
                                    Dark
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Box>
                </div>
            </Box>
        </Modal>
    );
};

export default RoomSettings;
