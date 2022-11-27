import React,{useRef} from "react";
import UserInfo from "./component/UserInfo.js"
import Message from "./component/Message.js";

const Messages = ({message}) => {
    const prevMsg = useRef()
    const isMessageContinuous = (newMsg,prev) => {
        if (!prev.current){
            prevMsg.current = newMsg
            return false;
        }
        const minutePassed = (newMsg.data.created.seconds-prev.current.data.created.seconds)/60
        const result = ((newMsg.data.uid === prev.current.data.uid) && minutePassed <= 1)
        prevMsg.current = newMsg
        
        return result;
    }
    return(
        <div className='py-5 flex-grow flex flex-col overflow-auto ' id='chatarea'>
                {
                    message.map((msg) => {
                        const result = isMessageContinuous(msg,prevMsg)
                        console.log(result)
                        return(
                        <div className='px-7 py-1 hover:bg-[#1d2738] cursor-pointer flex flex-col gap-1 items-top' key={msg.id}>
                            {
                                (()=>{
                                    if(!result){
                                        return(<UserInfo msg={msg} continuous={result}/>)
                                    }
                                })()
                            }
                            <Message msg={msg}/>
                        </div>
                        )
                    })
                }
            </div>
    )
}

export default Messages;