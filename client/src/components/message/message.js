import styles from './message.module.css'
export const Message = ({chat}) => {
    return (
        <div className={styles.messageBox}>
            <div className={`${styles.message} ${chat.isSelf ? styles.self : styles.other}`}>{chat.user} : {chat.message}</div>
        </div>
    )
}