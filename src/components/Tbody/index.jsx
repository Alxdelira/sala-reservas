import styles from "./styles.module.css";

export default function Tbody({ children }) {
  return <tbody className={styles.tbody}>{children}</tbody>;
}