'use client';

import { Close } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useState, useRef } from 'react';
import styles from './CodeScreen.module.css';

const CodeOutput = () => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(200);
    const handleRef = useRef(null);
    const divRef = useRef(null);

    const handleMouseDown = event => {
        event.preventDefault();
        const startY = event.clientY;
        const initialHeight = divRef.current.clientHeight;

        const handleMouseMove = event => {
            const deltaY = event.clientY - startY;
            const newHeight = Math.max(initialHeight - deltaY, 44);
            setHeight(newHeight);
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <>
            {!open && (
                <button
                    aria-label="Open output"
                    className={styles.outputOpenBtn}
                    onClick={() => setOpen(true)}
                >
                    Output
                </button>
            )}
            {open && (
                <div ref={divRef} className={styles.output} style={{ height: `${height}px` }}>
                    <div>
                        Hello World! <br></br> Test ne
                    </div>
                    <div>
                        Hello World! <br></br> Test ne
                    </div>
                    <div>
                        Hello World! <br></br> Test ne
                    </div>
                    <div className={styles.closeOutputBtn}>
                        <IconButton aria-label="Close output" onClick={() => setOpen(false)}>
                            <Close fontSize="small" />
                        </IconButton>
                    </div>
                    <div
                        ref={handleRef}
                        className={styles.outputResizer}
                        onMouseDown={handleMouseDown}
                    ></div>
                    <Button
                        variant="outlined"
                        size="small"
                        aria-label="Run code"
                        className={styles.runCode}
                    >
                        Run code
                    </Button>
                </div>
            )}
        </>
    );
};

export default CodeOutput;
