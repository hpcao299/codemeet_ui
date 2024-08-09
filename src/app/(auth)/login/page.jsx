import routes from '@/config/routes';
import { ArrowOutward } from '@mui/icons-material';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Link as MuiLink,
    TextField,
    Typography,
} from '@mui/material';
import Image from 'next/image';

const LoginPage = () => {
    return (
        <Box className="flex-center" sx={{ width: '100vw', height: '100vh' }}>
            <Box sx={{ maxWidth: '350px', width: '100%' }}>
                <Typography variant="h4" component="h1" sx={{ mb: 0.5 }}>
                    Login
                </Typography>
                <Typography variant="body1" component="div">
                    Hi, welcome back 🖐️
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={
                        <Image src="/google_icon.webp" alt="Google Icon" width={20} height={20} />
                    }
                    fullWidth
                    sx={{
                        my: 2,
                        textTransform: 'none',
                        borderColor: '#ddd',
                        color: '#000',
                    }}
                >
                    Login with Google
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Box sx={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></Box>
                    <Typography variant="body2" component="div" sx={{ color: '#bfbfbf', mx: 3 }}>
                        or login with email
                    </Typography>
                    <Box sx={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></Box>
                </Box>
                <Typography variant="body1" component="label" htmlFor="email">
                    Email
                </Typography>
                <TextField
                    fullWidth
                    id="email"
                    label=""
                    variant="outlined"
                    name="email"
                    placeholder="E.g: example@gmail.com"
                    inputProps={{ style: { padding: '14px' } }}
                    sx={{ mt: 1, mb: 2 }}
                />
                <Typography variant="body1" component="label" htmlFor="password">
                    Password
                </Typography>
                <TextField
                    fullWidth
                    id="password"
                    label=""
                    variant="outlined"
                    name="password"
                    placeholder="Enter your password"
                    inputProps={{ style: { padding: '14px' } }}
                    sx={{ mt: 1, mb: 2 }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 3,
                    }}
                >
                    <Box>
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label={<Typography variant="body2">Remember me</Typography>}
                        />
                    </Box>
                    <MuiLink fontSize="14px" href="#" underline="hover">
                        Forgot password?
                    </MuiLink>
                </Box>
                <Button variant="contained" fullWidth size="large">
                    Login
                </Button>
                <Typography variant="body2" component="div" textAlign="center" sx={{ mt: 3 }}>
                    Not registered yet?{' '}
                    <MuiLink
                        href={routes.signup}
                        underline="hover"
                        sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                        Create an account <ArrowOutward fontSize="small" />
                    </MuiLink>
                </Typography>
            </Box>
        </Box>
    );
};

export default LoginPage;
