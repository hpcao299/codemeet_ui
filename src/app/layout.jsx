import poppins from '@/config/font';
import theme from '@/config/theme';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={poppins.className}>
                    <ClerkLoading>
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                    </ClerkLoading>
                    <ClerkLoaded>
                        <AppRouterCacheProvider>
                            <ThemeProvider theme={theme}>{children}</ThemeProvider>
                        </AppRouterCacheProvider>
                    </ClerkLoaded>
                </body>
            </html>
        </ClerkProvider>
    );
}
