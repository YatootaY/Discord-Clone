import React from "react";


const LoginArea = ({signInClicked,signOutClicked}) => {

    return(
        <div id="authArea" className='flex items-center gap-5'>
            <img src="" alt="profilePic" className='w-14 h-14 rounded-full bg-center bg-cover m-auto' id="profilePic" hidden={true}/>
            <div className="flex flex-col justify-center space-y-[-5px]">
                <p id="username" hidden={true} className='font-semibold text-sm'></p>
                <a id="signOut" hidden={true} onClick={signOutClicked} className="cursor-pointer hover:underline transition-all duration-300 text-[0.6rem] font-semibold ">Log out</a>
                <a id="signIn" hidden={true} onClick={signInClicked} className="cursor-pointer bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-[0.8rem] font-semibold w-fit px-5 py-1 rounded-sm">Login</a>
                
            </div>
        </div>
    )
}

export default LoginArea;