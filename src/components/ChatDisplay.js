import styles from "./styles/chatDisplay.module.css"
function ChatDisplay({messages,user,type}){
    console.log(type);
    return <>
        <div className={styles.display}>
        {messages.map((message)=>(
            <div className={styles.messageDisplay}>
                {message.sender.id === user.id?<div className={styles.myText}>{message.content}</div>
                :
                <div className={styles.othersText}>{message.content}</div>}
                <div className={styles.senderName}>{message.sender.id !== user.id && type === "group" ? message.sender.displayName:""}</div>
            </div>
        ))}
        </div>
        <div className={styles.createMessage}>
            <input className={styles.textBox}/>
            <button className={styles.sendBtn}>Send</button>
        </div>

    </>
}

export default ChatDisplay;