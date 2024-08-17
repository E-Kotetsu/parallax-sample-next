import styles from './styles.module.scss';

const Bubble: React.FC = () => {
    return (
        <span className={styles['bubble-wrap']}>
            <span className={styles['bubble']}></span>
        </span>
    )
}
export default Bubble;