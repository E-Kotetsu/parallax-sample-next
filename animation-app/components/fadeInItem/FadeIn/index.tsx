'use client';
import { useRef, useEffect, useState, useMemo } from "react";
import Rellax from 'rellax';
import './styles.scss';
import classNames from "classnames";

type Props = {
    children: React.ReactNode;
}
const FadeIn: React.FC<Props> = ( {children} ) => {
    const rellaxRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!rellaxRef.current) return;
        const rellax = new Rellax(rellaxRef.current);

        const handleScroll = () => {
            if (!rellaxRef.current) return;
            const rect = rellaxRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
    
            if (rect.top < windowHeight && rect.bottom >= 0) {
            setIsVisible(true);
            } else {
            setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 初回チェック
        return () => {
            window.removeEventListener('scroll', handleScroll);
            rellax.destroy();
        };
    }, []);
    const fadeInItemClassNames = useMemo(() => {
        return classNames('rellax fade-in', {
            'fade-in--visible': isVisible,
        });
    }, [isVisible]);

    return (
        <div
        ref={rellaxRef}
        className={fadeInItemClassNames}
        data-rellax-speed="2"
        >
            {children}
        </div>
    )
}
export default FadeIn;
