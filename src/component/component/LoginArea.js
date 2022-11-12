import React from "react";


const LoginArea = ({signInClicked,signOutClicked}) => {

    return(
        <div id="authArea" className='flex flex-col gap-2 items-center'>
            <img src="" alt="profilePic" className='w-16 h-16 rounded-full bg-center bg-cover m-auto' id="profilePic" hidden="true"/>
            <p id="username" hidden="true" className='font-semibold text-sm'></p>
            <button id="signIn" hidden="true" onClick={signInClicked} className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-[0.7rem] font-semibold w-fit px-3 py-1 rounded-lg">Login</button>
            <button id="signOut" hidden="true" onClick={signOutClicked} className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-[0.7rem] font-semibold w-fit px-3 py-1 rounded-lg">Log out</button>
        </div>
    )
}

export default LoginArea;