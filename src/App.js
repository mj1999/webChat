import ChatDisplay from "./components/ChatDisplay";
import ConversationBox from "./components/ConversationBox";
import ChatHeader from "./components/ChatHeader";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [conversations,setConversations] = useState(data.conversations)
  const [activeConversation,setActiveConversation] = useState(data.conversations[0]);
  const [activeId,setActiveId] = useState(data.conversations[0].id);
  return (
    <div style={styles} className="App">
      <div style={leftBox}>
        {conversations.map((item)=>
          <div style={conversationItem} onClick={()=>{
            const conv = conversations.find((convo)=>convo.id===item.id);
            setActiveConversation(conv);
            setActiveId(conv.id);
          }}>
            <ConversationBox id={item.id} activeId={activeId} key={item.id} type={item.type} participants={item.participants} lastMessage={item.messages[item.messages.length-1]} groupName={item.groupName}/>
          </div>
          
        )}
      </div>
      <div style={rightBox}><ChatHeader conversation={activeConversation}  />
      <ChatDisplay/></div>
      
    </div>
  );
}

const styles = {
  display:"flex",
  backgroundColor:"grey",
  padding:"0.5%",
  justifyContent:"space-between",
  borderRadius:"5px",
  height:"100vh",
}
const leftBox = {
  width:"29.5%",
  borderRadius:"5px",
  display:"flex",
  flexDirection:"column",
  backgroundColor:"white"

}
const rightBox ={
  width:"70%",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between",
  borderRadius:"5px"
}
const conversationItem = {
  height:"10%",
  borderRadius:"5px",
}
export default App;
