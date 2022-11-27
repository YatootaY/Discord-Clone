import React from "react";


const LoginArea = ({signInClicked,signOutClicked}) => {

    return(
        <div id="authArea" className='flex items-center gap-5 my-2'>
            <img src="" alt="profilePic" className='md:w-12 md:h-12 w-10 h-10 rounded-full bg-center bg-cover m-auto' id="profilePic" hidden={true}/>
            <div className="flex flex-col justify-center space-y-[-5px]">
                <p id="username" hidden={true} className='font-semibold md:text-sm text-xs'></p>
                <a id="signOut" hidden={true} onClick={signOutClicked} className="cursor-pointer hover:underline transition-all duration-300 md:text-[0.6rem] text-[0.5rem] font-semibold ">Log out</a>
                <a id="signIn" hidden={true} onClick={signInClicked} className="cursor-pointer bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-[0.8rem] font-semibold w-fit px-5 py-1 rounded-sm">Login</a>
                
            </div>
        </div>
    )
}

export default LoginArea;