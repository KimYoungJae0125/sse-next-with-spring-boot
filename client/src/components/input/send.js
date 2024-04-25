"use client"

import styles from "./send.module.css"
const send = () => {
    console.log("test")
}

export const SendInput = () => {
    return (
        <div>
            <input className={styles.sendInput}/>
            <button className={styles.sendButton} onClick={() => {send()}
            }>전송</button>
        </div>
    )
}