import React from 'react';

const Server = ({pic,altName,serverClicked}) => {

    return(
        <div>
            <img src={pic} alt={altName} onClick={() => serverClicked(altName)} className=" transition-all duration-600 ease-in-out object-cover w-14 h-14 bg-slate-800 rounded-[50%] cursor-pointer hover:rounded-2xl "/>
        </div>
    )
}

export default Server;