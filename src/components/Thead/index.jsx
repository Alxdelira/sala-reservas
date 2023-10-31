import styles from "./styles.module.css";

export default function Thead({ children }) {
  return <thead className={styles.thead}>{children}</thead>;
}