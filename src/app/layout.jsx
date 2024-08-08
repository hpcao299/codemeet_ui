import poppins from '@/config/font';
import theme from '@/config/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
