'use client';
import styles from './Page.module.scss';
import classnames from 'classnames';
import { useEffect, useRef } from 'react';
import Gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

Gsap.registerPlugin(ScrollTrigger);
Gsap.config({
    nullTargetWarn: false,
});
const PageSample001: React.FC = () => {
    const elementsRef = useRef<HTMLElement[]>([]);
    const kvTitleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (kvTitleRef.current) {
            const splitKvText = new SplitType(kvTitleRef.current, { types: 'chars', tagName: 'span' })
            Gsap.fromTo(
                splitKvText.chars,
                { opacity: 0, y: -20 }, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: 0.3,
                ease: 'power2.out'
            }
            )
        }
        // FadeIn animation
        elementsRef.current.forEach((elm, index) => {
            const splitText = new SplitType(elm, { types: 'chars', tagName: 'span' })
            if (elm) {
                Gsap.fromTo(
                    splitText.chars,
                    { opacity: 0, },
                    {
                        opacity: 1,
                        duration: 1,
                        stagger: 0.3,
                        scrollTrigger: {
                            trigger: elm,
                            start: 'top 80%',
                            end: 'top 0',
                            toggleActions: 'play reset restart none',
                            // markers: true,
                        },
                    }
                );
            }
        });
    }, [elementsRef, kvTitleRef]);
    return (
        <main className={classnames(styles['main'])}>
            <section className={classnames(styles['bg-area'], styles['bg-area-kv'])}>
                <div className={styles['bg-inner']}>
                    <div className={classnames(styles['kv'])}>
                        <h1 className={styles['kv__title']} ref={kvTitleRef}>Seasonally</h1>
                        <div className={styles['kv__scroll-down']}><span>Scroll</span></div>
                    </div>
                </div>
            </section>
            <div className={classnames(styles['title-area'], styles['title-area-spring'])}>
                <div className={styles['title-container']}>
                    <p></p>
                    <p className={classnames(styles['title-text'], styles['title-text-spring'])} ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        SPRING
                    </p>
                </div>
            </div>

            <section className={classnames(styles['bg-area'], styles['bg-area-spring'])}>
                <div className={styles['bg-layer']}></div>
                <div className={styles['bg-inner']}>
                    <div className={classnames(styles['content'])}>
                        <h2 className={styles['content__title']}>Spring</h2>
                        <h3 className={styles['content__subtitle']}>The Arrival of Spring</h3>
                        <p className={styles['content__paragraph']}>Spring is a season of new beginnings. As the cold winds of winter give way to warmer breezes, trees begin to bud, and flowers bloom in vibrant colors. The gentle sunlight brings life back to nature, filling our hearts with hope and joy.</p>
                        <p className={styles['content__paragraph']}>When cherry blossoms reach full bloom, people flock to parks for hanami, or flower viewing, celebrating the fleeting beauty of the season. The cityscape bathed in soft pink hues becomes a symbolic reminder of the transient nature of life.</p>
                        <p className={styles['content__paragraph']}>Spring is also the beginning of a new agricultural cycle. Farmers sow seeds and prepare the fields for a new harvest. The efforts made during this time will lead to a bountiful yield in the fall.</p>
                    </div>
                </div>
            </section>

            <div className={classnames(styles['title-area'], styles['title-area-summer'])}>
                <div className={styles['title-container']}>
                    <p className={classnames(styles['title-text'], styles['title-text-spring'])} ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        SPRING
                    </p>
                    <p className={classnames(styles['title-text'], styles['title-text-summer'])} ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        SUMMER
                    </p>
                </div>
            </div>

            <section className={classnames(styles['bg-area'], styles['bg-area-summer'])}>
                <div className={styles['bg-layer']}></div>
                <div className={styles['bg-inner']}>
                    <div className={styles['content']}>
                        <h2 className={styles['content__title']}>Summer</h2>
                        <h3 className={styles['content__subtitle']}>The Radiance of Summer</h3>
                        <p className={styles['content__paragraph']}>
                            Summer arrives with the strongest sunlight and long daylight hours. It’s a season when people flock to the sea and mountains, engaging in outdoor activities. The heat of summer brings an energetic and lively time for all.
                        </p>
                        <p className={styles['content__paragraph']}>
                            The lush green trees and meadows thrive under the summer sun, full of life and vitality. As the cool evening breeze sweeps in, the sounds of insects fill the air, creating a soothing natural symphony. Fireworks light up the summer night sky, bringing joy and excitement to all who watch.
                        </p>
                        <p className={styles['content__paragraph']}>
                            This season is also filled with festivals and events, offering plenty of opportunities to spend fun times with family and friends. Enjoying cold drinks and ice cream during the heat of summer is a delight that is uniquely tied to this season.
                        </p>
                    </div>
                </div>
            </section>

            <div className={classnames(styles['title-area'], styles['title-area-autumn'])}>
                <div className={styles['title-container']}>
                    <p className={classnames(styles['title-text'], styles['title-text-summer'])} ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        SUMMER
                    </p>
                    <p className={classnames(styles['title-text'], styles['title-text-autumn'])} ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        AUTUMN
                    </p>
                </div>
            </div>

            <section className={classnames(styles['bg-area'], styles['bg-area-autumn'])}>
                <div className={styles['bg-inner']}>
                    <div className={styles['bg-layer']}></div>
                    <div className={styles['content']}>
                        <h2 className={styles['content__title']}>Autumn</h2>
                        <h3 className={styles['content__subtitle']}>The Harvest of Autumn</h3>
                        <p className={styles['content__paragraph']}>
                            Autumn arrives with a gentle breeze, as the heat of summer fades away. The leaves on the trees turn vibrant shades of red and yellow, showcasing the unique beauty of the season. The long autumn nights bring a calm and serene atmosphere, providing time for quiet reflection.
                        </p>
                        <p className={styles['content__paragraph']}>
                            This season is a time of harvest, with fields yielding a rich bounty. Crops mature, and harvest festivals are held across the land, where people express gratitude and share in the joy of abundance. The flavors of autumn add a rich variety to the dining table.
                        </p>
                        <p className={styles['content__paragraph']}>
                            Autumn is also considered a season of culture and art. Art festivals and concerts are held, allowing people to enjoy the arts. Spending time with a warm drink, reading a book, or watching a movie is one of the many pleasures of autumn.
                        </p>

                    </div>
                </div>
            </section>

            <div className={classnames(styles['title-area'], styles['title-area-winter'])}>
                <div className={styles['title-container']}>
                    <p className={classnames(styles['title-text'], styles['title-text-autumn'])} ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        AUTUMN
                    </p>
                    <p className={classnames(styles['title-text'], styles['title-text-winter'])} ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        WINTER
                    </p>
                </div>
            </div>

            <section className={classnames(styles['bg-area'], styles['bg-area-winter'])}>
                <div className={styles['bg-inner']}>
                    <div className={styles['bg-layer']}></div>
                    <div className={styles['content']}>
                        <h2 className={styles['content__title']}>Winter</h2>
                        <h3 className={styles['content__subtitle']}>The Stillness of Winter</h3>
                        <p className={styles['content__paragraph']}>
                            Winter arrives with a cold wind, bringing a season where nature takes a temporary rest. When snow covers the ground, the world is wrapped in silence, and a landscape of white spreads out as far as the eye can see. The cold of winter makes us appreciate warmth all the more.
                        </p>
                        <p className={styles['content__paragraph']}>
                            The winter night sky is clear, with stars shining more brilliantly than ever. The sight of the night sky, or snowflakes dancing in the air, creates a magical and captivating scene. Winter also brings a longing for the warmth of a fireplace and hearty meals.
                        </p>
                        <p className={styles['content__paragraph']}>
                            This season is also a time for spending more time with family and friends. The celebrations of Christmas and New Year&apos;s bring warmth to everyone&apos;s hearts, filling the season with smiles. The warmth shared among people during the cold of winter fills our hearts with joy.
                        </p>
                    </div>
                </div>
            </section>
        </main >
    )
}
export default PageSample001;
