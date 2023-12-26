import styles from "./styles/chatHead.module.css"
function ChatHeader({conversation}){
    return <div className={styles.display}>
        {conversation.type==="user"?
        <div className={styles.userHead}>
            <img className={styles.dpUser} alt="profile pic" src={conversation.participants[0].profilePicture}/>
            <div className={styles.heading}>{conversation.participants[0].displayName}</div>
        </div>
        :
        <div className={styles.groupHead}>
            <div className={styles.groupImgContainer}>
                <img alt="profile pic" className={styles.dpGroup} src={conversation.participants[0].profilePicture} />
                <img alt="profile pic" className={styles.dpGroup} src={conversation.participants[1].profilePicture} />
                <img alt="profile pic" className={styles.viewMore} src="https://icon2.cleanpng.com/20180203/paw/kisspng-menu-arrow-icon-down-arrow-png-transparent-image-5a756e457638b4.3161758215176453814842.jpg"/>
            </div>
            <div className={styles.heading}>{conversation.groupName}</div>
            <div className={styles.addParticipants}>+</div>
        </div>}
    </div>
}
export default ChatHeader;