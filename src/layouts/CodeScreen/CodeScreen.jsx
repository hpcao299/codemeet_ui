import Editor from '@monaco-editor/react';
import { Add, Close } from '@mui/icons-material';
import Image from 'next/image';
import javascript from '~/public/javascript.svg';
import CodeOutput from './CodeOutput';
import styles from './CodeScreen.module.css';

const CodeScreen = () => {
    const handleEditorChange = value => {
        console.log(value);
    };

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={`${styles.navtab} ${styles.active}`}>
                    <Image src={javascript} alt="Javascript icon" height={20} width={20} />
                    <span>main.js</span>
                    <button className={styles.closeBtn} aria-label="Close tab">
                        <Close fontSize="small" />
                    </button>
                </div>
                <div className={styles.navtab}>
                    <Image src={javascript} alt="Javascript icon" height={20} width={20} />
                    <span>main.js</span>
                    <button className={styles.closeBtn} aria-label="Close tab">
                        <Close fontSize="small" />
                    </button>
                </div>
                <div className={styles.navtab}>
                    <Image src={javascript} alt="Javascript icon" height={20} width={20} />
                    <span>main.js</span>
                    <button className={styles.closeBtn} aria-label="Close tab">
                        <Close fontSize="small" />
                    </button>
                </div>
                <button className={styles.addBtn} aria-label="Add tab">
                    <Add fontSize="small" />
                </button>
            </nav>
            <div className={styles.code}>
                <Editor
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                    onChange={handleEditorChange}
                    options={{
                        minimap: { enabled: false },
                    }}
                />
            </div>
            <CodeOutput />
        </div>
    );
};

export default CodeScreen;
