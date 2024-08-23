import React, { createContext, useContext, useState, useCallback } from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

const SnackbarProvider = ({ children }) => {
    const [snackbars, setSnackbars] = useState([]);

    const addSnackbar = useCallback((message, severity = 'info', Icon) => {
        const id = new Date().getTime(); // Use timestamp as ID
        setSnackbars(prevSnackbars => [...prevSnackbars, { id, message, severity, Icon }]);
    }, []);

    const removeSnackbar = useCallback(id => {
        setSnackbars(prevSnackbars => prevSnackbars.filter(snackbar => snackbar.id !== id));
    }, []);

    return (
        <SnackbarContext.Provider value={addSnackbar}>
            {children}
            {snackbars.map(({ id, message, severity, Icon }) => (
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    sx={{ bottom: 'calc(82px + 16px) !important' }}
                    key={id}
                    open={true}
                    autoHideDuration={2500}
                    onClose={() => removeSnackbar(id)}
                    TransitionComponent={SlideTransition}
                >
                    <Alert
                        icon={<Icon fontSize="inherit" />}
                        onClose={() => removeSnackbar(snackbar.id)}
                        severity={severity}
                        sx={{ width: '100%' }}
                    >
                        {message}
                    </Alert>
                </Snackbar>
            ))}
        </SnackbarContext.Provider>
    );
};

export default SnackbarProvider;
