'use client';
import { useEffect, useRef } from 'react';
import Rellax from 'rellax';
// import './styles.scss';

const Parallax02 = () => {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (textRef.current) {
      new Rellax(textRef.current, {
        speed: -2, // スクロール速度（負の値で逆方向に動く）
        center: true, // スクロール位置の中央で効果を適用
      });
    }
  }, []);

  return (
    <div
    ref={textRef}
    style={{
      fontSize: '4rem',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    }}
  >
    Welcome to My Website
  </div>
  );
};

export default Parallax02;