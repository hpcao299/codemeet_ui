import React from 'react';

const AuthPageLayout = ({ children }) => {
    return (
        <div
            className="flex-center"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: 'url(/blue-gradient-bg.jpg)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            {children}
        </div>
    );
};

export default AuthPageLayout;
