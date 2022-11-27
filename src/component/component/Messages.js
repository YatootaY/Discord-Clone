import React,{useRef} from "react";


const Messages = ({message}) => {
    const prevMsg = useRef()
    const continuous = useRef()
    const isMessageContinuous = (newMsg,prev) => {
        if (!prev.current){
            prevMsg.current = newMsg
            continuous.current = false;
            return;
        }
        const minutePassed = (newMsg.data.created.seconds-prev.current.data.created.seconds)/60
        console.log(newMsg.data.text,prevMsg.current.data.text)
        continuous.current = (newMsg.data.uid === prev.current.data.uid && minutePassed <= 1)
        prevMsg.current = newMsg
        
        return;
    }
    return(
        <div className='py-7 flex-grow flex flex-col overflow-auto ' id='chatarea'>
                {
                    message.map((msg) => {
                        isMessageContinuous(msg,prevMsg)
                        return(
                        <div className='px-7 py-1 hover:bg-[#1d2738] cursor-pointer flex gap-3 items-top' key={msg.id}>
                            {    
                                (() => {
                                    if(!continuous.current){
                                        return(<img src={msg.data.profileUrl} alt="profilePic" className='w-10 h-10 mt-2 rounded-full bg-center bg-cover'/>)
                                    }else{
                                        return(<div className="w-10 h-10"></div>)
                                    }
                                })()
                            }
                            <div className="flex flex-col">
                                {    
                                    (() => {
                                        if(!continuous.current){
                        
                                            return(
                                                <div>
                                                    <h2 className='text-white font-semibold md:text-base text-sm'>{msg.data.userName}</h2>
                                                    <h3 className='text-[0.6rem]'>{
                                                        (() => {
                                                            const today = new Date().toLocaleDateString()
                                                            const yesterday = new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString()
                                                            const createdDate = new Date(msg.data.created.seconds*1000).toLocaleDateString()
                                                            if (today === createdDate){
                                                                return "Today " + new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(msg.data.created.seconds*1000)
                                                           }else if(yesterday === createdDate ){
                                                                return "Yesterday  " + new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(msg.data.created.seconds*1000)
                                                            }
                                                            else{
                                                                return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(msg.data.created.seconds*1000)
                                                            }
                                                        })()
                                                    }
                                                    </h3>
                                                </div>
                                            )
                                        }
                                    })()
                                }
                                {
                                    (() => {
                                        if(msg.data.imageUrl){
                                            return(<img src={msg.data.imageUrl} className="w-[65%]"/>)
                                        }else{
                                            return(<p className="md:text-base text-sm">{msg.data.text}</p>);
                                        }
                                    })()
                                }
                            </div>
                        </div>
                        )
                    })
                }
            </div>
    )
}

export default Messages;