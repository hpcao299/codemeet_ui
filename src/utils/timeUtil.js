export const getCurrentTime = () => {
    const current = new Date();

    // Get hours, minutes, and seconds
    let hours = current.getHours();
    const minutes = current.getMinutes().toString().padStart(2, '0');

    // Determine AM or PM suffix
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour format
    hours = hours % 12 || 12; // If hours is 0, set it to 12

    return `${hours}:${minutes} ${ampm}`;
};

export const getCurrentFormattedDate = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
};
