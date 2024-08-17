import styles from './SectionTitle.module.scss';
type Props = {
    title: string;
}
const SectionTitle: React.FC<Props> = ( props ) => {
    const { title } = props;
    return (
        <h2 className={styles['section-title']}>{title}</h2>
    )
}
export default SectionTitle;
