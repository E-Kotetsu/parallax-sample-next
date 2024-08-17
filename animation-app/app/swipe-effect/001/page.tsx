'use client';
import styles from './Page.module.scss';
import classnames from 'classnames';
import luxy from 'luxy.js';
import { useEffect } from 'react';

// const doObserve = (elementSelector: string) => {
//     const targets = document.querySelectorAll(elementSelector);
    
//     const options: IntersectionObserverInit = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0,
//     };
  
//     const observer = new IntersectionObserver((items: IntersectionObserverEntry[]) => {
//       items.forEach((item) => {
//         if (item.isIntersecting) {
//           item.target.classList.add('scrollon');
//         } else {
//           item.target.classList.remove('scrollon');
//         }
//       });
//     }, options);
  
//     targets.forEach((target) => {
//       observer.observe(target);
//     });
//   };

const PageSwipeEffect001: React.FC = () => {
    // useEffect(() => {
    //     doObserve('.section'); // ターゲットセレクタの指定
    //   }, []);
    useEffect(() => {
        luxy.init({
          wrapperSpeed: 0.08,
          targetSpeed: 0.08,
          wrapper: '#luxy',
        //   targets: '.luxy-el',
        });
    
        // return () => {
        //   luxy.cancel(); // クリーンアップ
        // };
      }, []);
    return (
        // <main>
            <div id="luxy" className={classnames('scroll-container', styles['scroll-container'])}>
                <section className={classnames('section', styles['section'],styles['section-01'])} data-speed-y="-20" data-offset="0" data-luxy-elasticity="0.2">
                    
                </section>
                <section className={classnames('section',styles['section'],styles['section-02'])} data-speed-y="-20" data-offset="0" data-luxy-elasticity="0.2">
                    
                </section>
                <section className={classnames('section',styles['section'],styles['section-03'])}>
                    
                </section>
                <section className={classnames('section',styles['section'],styles['section-04'])}>
                    
                </section>
            </div>
        // </main>
    
    )
}
export default PageSwipeEffect001;
