import classNames from "classnames"
import styles from "./style.module.scss"

export default function Mensagem({type, children}) {

    const classes = classNames({
        [styles.content]: true,
        [styles.success]: type === "success" ? true : false,
        [styles.error]: type === "error" ? true : false,
    })
    return (

        <>
            <div className={classes}>
                <p>{children}</p>
            </div>
        </>
    )
}