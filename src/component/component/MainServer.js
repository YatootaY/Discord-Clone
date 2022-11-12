import React from "react";
import discordLogo from "../../images/discord logo.png"

const MainServer = ({serverClicked}) => {
    return(
        <div className="pb-5 border-b border-slate-800 border-lengt flex flex-col gap-3 items-center">
            <h1 className="font-semibold text-sm text-slate-400">Discord</h1>
            <button onClick={() => serverClicked("main")} className="bg-slate-800 px-4 py-4 rounded-3xl cursor-pointer transition-all ease-in-out delay-50 focus:rounded-2xl focus:bg-blue-600 hover:rounded-2xl hover:bg-blue-600 ">
                <img 
                src={discordLogo} 
                alt="discord logo" 
                className=" w-7"/>
            </button>
        </div>
    )
}

export default MainServer;