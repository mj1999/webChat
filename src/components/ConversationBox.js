import { useState } from "react";
import styles from "./styles/conversations.module.css"

function ConversationBox({type,participants,lastMessage,pending,groupName,id,activeId}){
    const [read,setRead] = useState(activeId===id);
    const displayBlock = {
        backgroundColor: activeId===id?"lightgrey":"transparent",
        borderTopRightRadius:"5px",
        borderTopLeftRadius:"5px",
    }
    return <div className="conversation-container" style={displayBlock}>
        <div onClick={()=>{
        setRead(true);
    }} className={styles.display}>
        <div className={type==="user"?styles.leftBoxUser:styles.leftBoxGroup}>
            {type==="user"?<img alt="display pic" className={type==="user"?styles.dpUser:styles.dpGroup} src={participants[0].profilePicture} width="inherit"/>:
            <div className={styles.groupImgContainer}><img alt="display pic" className={type==="user"?styles.dpUser:styles.dpGroup} src={participants[0].profilePicture} width="inherit"/>
            <img alt="display pic" className={type==="user"?styles.dpUser:styles.dpGroup} src={participants[1].profilePicture} width="inherit"/>
            <div className={styles.groupCount}>{participants.length}</div>
            </div>}
        </div>
        <div className={styles.rightBox}>
            <div className={styles.upperSection}>
                <div className={styles.upperLeft}>{type==="user"?participants[0].displayName:groupName}</div>
                <div className={styles.upperRight}>{lastMessage.timestamp.substring(11,16)}</div>
            </div>
            <div className={styles.lowerSection}>
                <div className={styles.lowerLeft}>{lastMessage.content.length>38?lastMessage.content.substring(0,38)+"...":lastMessage.content}</div>
                {read?"":<div className={styles.lowerRight}></div>}
            </div>
        </div>
    </div>
    </div>
}

export default ConversationBox;