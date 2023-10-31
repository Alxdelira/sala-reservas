import styles from "./styles.module.css";
import classNames from "classnames";

export default function Tr({ children, center, left, right, ...props }) {
  
  const classes = classNames({
    [styles.tr]: true, 
    [styles.center]: props.center,
    [styles.right]: props.right,
    [styles.left]: props.left,
  });
  
  return <tr className={classes} {...props}>{children}</tr>;
}