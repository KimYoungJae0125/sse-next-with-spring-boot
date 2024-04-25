import styles from './display.module.css'
import {Message} from "../message/message";
export const Display = () => {

    const chats = [
        {
            user: "me",
            message: "hi",
            isSelf: true
        },
        {
            user: "nick",
            message: "hi2",
            isSelf: false
        }
    ]
    return (
        <div className={styles.display}>
            {/*<Message message = {"test1"} />*/}
            {/*<Message message = {"test2"} />*/}
            {chats.map((chat, index) =>
                <Message key={index} chat = {chat} />
                )
            }
        </div>
    )
}