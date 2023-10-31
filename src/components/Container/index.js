import styles from './styles.module.css';

export default function Container({children}) {

    return (
        <div className={styles.estilo}>
            {children}
        </div>
    )
}