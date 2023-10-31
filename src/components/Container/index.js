import styles from './styles.module.scss';

export default function Container({children}) {

    return (
        <div className={styles.estilo}>
            {children}
        </div>
    )
}