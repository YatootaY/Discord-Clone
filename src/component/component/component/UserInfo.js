import React from "react";

const UserInfo = ({msg,continuous}) => {
    return(
        <div className="userInfo flex gap-4 mt-4 items-start">
            <div>
                <img src={msg.data.profileUrl} alt="profilePic" className='w-10 h-10 mt-1 rounded-full bg-center bg-cover'/>     
            </div>
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
                                
        </div>
    )
}

export default UserInfo