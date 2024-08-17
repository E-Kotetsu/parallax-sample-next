'use client';
import { useEffect, useRef } from 'react';
import Rellax from 'rellax';
import './styles.scss';

const ParallaxComponent = () => {
  const rellaxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (rellaxRef.current) {
      new Rellax(rellaxRef.current, {
        speed: -5, // スクロール速度を設定
        center: true, // 背景を中央に固定
      });
      return () => {
        // if(rellaxRef.current) {
          // rellaxRef.current.destroy();
        // }
      };
    }
  }, []);

  return (
    <div ref={rellaxRef} className='bg rellax' data-rellax-speed="0"></div>
    // <div className="parallax-wrapper">
    //     <div className='bg rellax' data-rellax-speed="0.2"></div>
    //   <div className="rellax" data-rellax-speed="2">
    //     <h1>Parallax Effect with Rellax</h1>
    //   </div>
    //   <div className="content">
    //     <p>Scroll to see the effect!</p>
    //   </div>
    // </div>
  );
};

export default ParallaxComponent;