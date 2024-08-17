'use client';
import styles from './KeyVisual.module.scss';
import { useEffect, useState, useMemo } from 'react';
import classNames from 'classnames';
const KeyVisual: React.FC = () => {
    const [isInvisible, setIsInvisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 300) {
                setIsInvisible(true);
            } else {
                setIsInvisible(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const KvClassNames = useMemo(() => {
        return classNames(styles['key-visual'], {
            [styles['key-visual--invisible']]: isInvisible,
            [styles['key-visual--visible']]: !isInvisible,
        });
    }, [isInvisible]);

    return (
        <div className={KvClassNames}>
            KeyVisual
        </div>
    )
}
export default KeyVisual;