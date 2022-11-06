import React from 'react'
import discordLogo from "../images/discord logo.png"
import onePiece from "../images/one piece.jpg"
import firebase from "../images/firebase.png"

const Nav = ({serverClicked}) => {

    return(
        <div className="bg-black self-stretch px-5 py-5 flex flex-col items-center w-fit gap-7">
            <div className="pb-5 border-b border-slate-800 border-lengt flex flex-col gap-3 items-center">
                <h1 className="font-semibold text-sm text-slate-400">Discord</h1>
                <button className="bg-slate-800 px-4 py-4 rounded-3xl cursor-pointer transition-all ease-in-out delay-50 focus:rounded-2xl focus:bg-blue-600 hover:rounded-2xl hover:bg-blue-600 ">
                    <img 
                    src={discordLogo} 
                    alt="discord logo" 
                    className=" w-7"/>
                </button>
            </div>
            
            <img src={onePiece} alt="one" onClick={() => serverClicked("onePiece")} className=" transition-all duration-400 ease-in-out object-cover w-14 h-14 bg-slate-800 rounded-[50%] cursor-pointer hover:rounded-2xl "/>

            <img src={firebase} alt="one" onClick={() => serverClicked("firebase")} className=" transition-all duration-400 ease-in-out object-cover w-14 h-14 bg-slate-800 rounded-[50%] cursor-pointer hover:rounded-2xl "/>
        </div>
    )
}

export default Nav