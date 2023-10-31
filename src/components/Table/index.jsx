import styles from "./styles.module.scss";

export default function Table({ children, 
  padding, padding_top, padding_right, padding_left, padding_bottom, 
  margin, margin_top, margin_right, margin_left, margin_bottom, 
  style,boxShadow, ...props }) {
  
  const allStyle = {
    ...(padding && { padding }),
    ...(padding_top && { paddingTop: padding_top }),
    ...(padding_bottom && { paddingBottom: padding_bottom }),
    ...(padding_left && { paddingLeft: padding_left }),
    ...(padding_right && { paddingRight: padding_right }),
    ...(margin && { margin }),
    ...(margin_top && { marginTop: margin_top }),
    ...(margin_bottom && { marginBottom: margin_bottom }),
    ...(margin_left && { marginLeft: margin_left }),
    ...(margin_right && { marginRight: margin_right }),
    ...(style && { ...style }),
    ...(boxShadow && { boxShadow: 'var(--table-box-shadow)'})
  };
  
  return (
    <table className={styles.table} {...props} style={allStyle}>{children}</table>
  );
}
