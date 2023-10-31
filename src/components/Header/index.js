import styles from './styles.module.css';

export default function Header({children}) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1 className={styles.titulo}>{children}</h1>
            </div>
        </header>
    )
}