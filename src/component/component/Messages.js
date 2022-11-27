import React from "react";


const Messages = ({message}) => {
    return(
        <div className='py-7 flex-grow flex flex-col gap-1 overflow-auto ' id='chatarea'>
                {
                    message.map((msg) => {
                        return(
                        <div className='px-7 py-1 space-y-1 my-1 hover:bg-[#1d2738] cursor-pointer flex gap-3 items-top' key={msg.id}>
                            <img src={msg.data.profileUrl} alt="profilePic" className='w-10 h-10 mt-2 rounded-full bg-center bg-cover'/>
                            <div className="flex gap-1 flex-col">
                                <div className='flex gap-3 align-baseline'>
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
                                <div>
                                    {
                                        (() => {
                                            if(msg.data.imageUrl){
                                                return(<img src={msg.data.imageUrl} className="md:w-[65%] w-[80%]"/>)
                                            }else{
                                                return(<p className="md:text-base text-sm">{msg.data.text}</p>);
                                            }
                                        })()
                                    }
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
    )
}

export default Messages;