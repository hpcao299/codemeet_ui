import routes from '@/config/routes';
import { ArrowOutward } from '@mui/icons-material';
import { Box, Button, Link as MuiLink, TextField, Typography } from '@mui/material';
import Image from 'next/image';

const SignupPage = () => {
    return (
        <Box className="flex-center" sx={{ width: '100vw', height: '100vh' }}>
            <Box sx={{ maxWidth: '350px', width: '100%' }}>
                <Typography variant="h4" component="h1" sx={{ mb: 0.5 }}>
                    Signup
                </Typography>
                <Typography variant="body1" component="div" sx={{ mb: 3 }}>
                    Register for our great service 🖐️
                </Typography>
                <Typography variant="body1" component="label" htmlFor="email">
                    Email
                </Typography>
                <TextField
                    fullWidth
                    id="email"
                    label=""
                    variant="outlined"
                    placeholder="E.g: example@gmail.com"
                    inputProps={{ style: { padding: '14px' } }}
                    name="email"
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
                    placeholder="Enter your password"
                    inputProps={{ style: { padding: '14px' } }}
                    name="password"
                    sx={{ mt: 1, mb: 2 }}
                />
                <Typography variant="body1" component="label" htmlFor="confirm_password">
                    Confirm your password
                </Typography>
                <TextField
                    fullWidth
                    id="confirm_password"
                    label=""
                    variant="outlined"
                    name="confirm_password"
                    placeholder="Re-enter your password"
                    inputProps={{ style: { padding: '14px' } }}
                    sx={{ mt: 1, mb: 2.5 }}
                />
                <Button variant="contained" fullWidth size="large">
                    Register account
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 2 }}>
                    <Box sx={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></Box>
                    <Typography variant="body2" component="div" sx={{ color: '#bfbfbf', mx: 3 }}>
                        or register with Google
                    </Typography>
                    <Box sx={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></Box>
                </Box>
                <Button
                    variant="outlined"
                    startIcon={
                        <Image src="/google_icon.webp" alt="Google Icon" width={20} height={20} />
                    }
                    fullWidth
                    sx={{
                        mb: 3,
                        textTransform: 'none',
                        borderColor: '#ddd',
                        color: '#000',
                    }}
                >
                    Register with Google
                </Button>
                <Typography variant="body2" component="div" textAlign="center">
                    Already have an account?{' '}
                    <MuiLink
                        href={routes.login}
                        underline="hover"
                        sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                        Login <ArrowOutward fontSize="small" />
                    </MuiLink>
                </Typography>
            </Box>
        </Box>
    );
};

export default SignupPage;
