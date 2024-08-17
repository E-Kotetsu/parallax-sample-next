'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import luxy from 'luxy.js';
import styles from './LuxyScroll.module.scss';
import classNames from 'classnames';

const LuxyScroll: React.FC = () => {
  useEffect(() => {
    luxy.init({
      wrapperSpeed: 0.08,
      targetSpeed: 0.08,
      wrapper: '#luxy',
      targets: '.luxy-el',
    });

    // return () => {
    //   luxy.cancel(); // クリーンアップ
    // };
  }, []);

  return (
    <div id="luxy" data-speed-y="0">
      <section >
        <div className={styles['section-inner']}>
          <h2>1st Section</h2>
            <div className={styles['container']}>
                <figure className={styles['figure-container']}>
                    <div className={classNames('luxy-el', styles['figure-container__image'])} data-speed-y="5" data-offset="-50" data-luxy-elasticity="0.2">
                        <Image src='/img/constellation/orion.jpg' width='500' height='300' alt=''/>
                    </div>
                    <figcaption className={classNames('luxy-el', styles['figure-container__caption'])} data-speed-y="5" data-offset="0" data-luxy-elasticity="0.2">
                        <h3>Orion</h3>
                    </figcaption>
                </figure>
            </div>
            <div className={styles['container']}>
                <figure className={styles['figure-container']}>
                    <div className={classNames('luxy-el', styles['figure-container__image'])} data-speed-y="5" data-offset="250" data-luxy-elasticity="0.2">
                        <Image src='/img/constellation/orion.jpg' width='500' height='300' alt=''/>
                    </div>
                    <figcaption className={classNames('luxy-el', styles['figure-container__caption'])} data-speed-y="5" data-offset="0" data-luxy-elasticity="0.2">
                        <h3>Orion</h3>
                    </figcaption>
                </figure>
            </div>
            <div className={styles['container']}>
                <figure className={styles['figure-container']}>
                    <div className={classNames('luxy-el', styles['figure-container__image'])} data-speed-y="5" data-offset="550" data-luxy-elasticity="0.2">
                        <Image src='/img/constellation/orion.jpg' width='500' height='300' alt=''/>
                    </div>
                    <figcaption className={classNames('luxy-el', styles['figure-container__caption'])} data-speed-y="5" data-offset="0" data-luxy-elasticity="0.2">
                        <h3>Orion</h3>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
    <section style={{height: '300vh'}}>

    </section>
    </div>
  );
};

export default LuxyScroll;
