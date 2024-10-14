import { useState, useEffect } from 'react';
import { getCurrentTime } from '@/utils/timeUtil'; // Assuming you already have this function

export const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    useEffect(() => {
        const now = new Date();
        const secondsRemaining = 60 - now.getSeconds(); // Calculate how many seconds are left in this minute

        // Update at the start of the next minute
        const timeoutId = setTimeout(() => {
            setCurrentTime(getCurrentTime());

            // After the first timeout, set an interval to update every minute
            const intervalId = setInterval(() => {
                setCurrentTime(getCurrentTime());
            }, 60000); // 60000ms = 1 minute

            return () => clearInterval(intervalId); // Cleanup interval on component unmount
        }, secondsRemaining * 1000);

        return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
    }, []);

    return currentTime;
};
