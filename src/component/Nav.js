import React from 'react'
import discordLogo from "../images/discord logo.png"
import onePiece from "../images/one piece.jpg"
import firebase from "../images/firebase.png"

const Nav = ({serverClicked,signInClicked,signOutClicked}) => {

    return(
        <div className="bg-black self-stretch px-5 py-5 flex flex-col items-center w-fit gap-7">
        <div id="authArea" className='flex flex-col gap-2 items-center'>
            <div className='w-16 h-16 rounded-full bg-center bg-cover m-auto' id="profilePic" hidden="true"></div>
            <h1 id="username" hidden="true" className='font-semibold text-sm'></h1>
            <button id="signIn" hidden="true" onClick={signInClicked} className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-[0.7rem] font-semibold w-fit px-3 py-1 rounded-lg">Login</button>
            <button id="signOut" hidden="true" onClick={signOutClicked} className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-[0.7rem] font-semibold w-fit px-3 py-1 rounded-lg">Log out</button>
        </div>
            <div className="pb-5 border-b border-slate-800 border-lengt flex flex-col gap-3 items-center">
                <h1 className="font-semibold text-sm text-slate-400">Discord</h1>
                <button onClick={() => serverClicked("main")} className="bg-slate-800 px-4 py-4 rounded-3xl cursor-pointer transition-all ease-in-out delay-50 focus:rounded-2xl focus:bg-blue-600 hover:rounded-2xl hover:bg-blue-600 ">
                    <img 
                    src={discordLogo} 
                    alt="discord logo" 
                    className=" w-7"/>
                </button>
            </div>
            
            <img src={onePiece} alt="one" onClick={() => serverClicked("onePiece")} className=" transition-all duration-600 ease-in-out object-cover w-14 h-14 bg-slate-800 rounded-[50%] cursor-pointer hover:rounded-2xl "/>

            <img src={firebase} alt="one" onClick={() => serverClicked("firebase")} className=" transition-all duration-600 ease-in-out object-cover w-14 h-14 bg-slate-800 rounded-[50%] cursor-pointer hover:rounded-2xl "/>
        </div>
    )
}

export default Nav