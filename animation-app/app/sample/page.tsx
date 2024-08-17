import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/fadeInItem/FadeIn";
import ParallaxComponent from "@/components/parallax/Parallax01";
import Bubble from "@/components/animation-parts/Bubble";
import SectionTitle from "@/components/title/SectionTitle";
import styles from './page.module.scss';
const SamplePage = () => {
    return (
        <>
            <ParallaxComponent />
            <section className={styles['section']}>
                <SectionTitle
                    title='Section Title'
                />
            </section>
            SamplePage
            <FadeIn>
            <Bubble />
            </FadeIn>
        </>
    )
}
export default SamplePage;
