import React from 'react';

const CodeScreen = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '40%',
                border: '1px solid #cccccc',
                borderRadius: '8px',
                overflow: 'hidden',
            }}
        >
            <div
                style={{ borderBottom: '1px solid #cccccc', display: 'flex', overflowX: 'scroll' }}
            >
                <div style={{ padding: '8px 12px', backgroundColor: '#eeeeee' }}>
                    <div>main.js</div>
                </div>
            </div>
        </div>
    );
};

export default CodeScreen;
