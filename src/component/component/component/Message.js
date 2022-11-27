import React from "react";

const Message = ({msg}) => {

    return(
        <div className="flex flex-col ml-14">
                                
                                {
                                    (() => {
                                        if(msg.data.imageUrl){
                                            return(<img src={msg.data.imageUrl} className="md:w-[30%] w-[50%]"/>)
                                        }else{
                                            return(<p className="md:text-sm text-xs">{msg.data.text}</p>);
                                        }
                                    })()
                                }
        </div>
    )
}

export default Message