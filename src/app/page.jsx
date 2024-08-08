import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <Button>Home</Button>
            <Link href="/room/abc">
                <Button>Room</Button>
            </Link>
        </div>
    );
};

export default HomePage;
