'use client';
import { useEffect } from 'react';
import Rellax from 'rellax';
import luxy from 'luxy.js';
import styles from './Page.module.scss'; // CSSモジュールをインポート
const PageParallax001 = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Rellaxの初期化
      new Rellax('.rellax', {
        speed: 2, // スクロール速度の調整
        horizontal: true,
      });
    }
  }, []);
  useEffect(() => {
    luxy.init({
      wrapperSpeed: 0.08,
      targetSpeed: 0.08,
      wrapper: '#luxy',
      targets: '.luxy-el',
    });
  }, []);
  return (
    <div id='luxy' className={styles['container']}>
      {/* キービジュアルセクション */}
      <div className={`${styles.hero} rellax`} data-rellax-speed="-1">
        <h1>Key Visual</h1>
        <p>Welcome to the site</p>
      </div>

      {/* 重なるセクション */}
      <section className={`${styles.section} rellax`} data-rellax-speed="10">
        <h2>Section 1</h2>
        <p>This section will overlap with the key visual</p>
      </section>
      <section className={`${styles.section} rellax`} data-rellax-speed="10">
        <h2>Section 2</h2>
        <p>Another section with parallax effect</p>
      </section>
      <section className={`${styles.section} rellax`} data-rellax-speed="10">
        <h2 className='rellax' data-rellax-vertical-scroll-axis="x" data-rellax-speed="10" data-rellax-percentage="0.5">Section 3</h2>
        <p>Yet another section</p>
      </section>
      <section className={`${styles.section}`} data-rellax-speed="5">
        <h2>Section 4</h2>
        <p>Yet another section</p>
      </section>
    </div>
  )
}
export default PageParallax001;
