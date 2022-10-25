import React from "react"
import discordLogo from "./images/discord logo.png"

const App = () => {
  

  return (
    <div className="flex text-white bg-slate-800 h-screen space-x-5">
      <div className="bg-black self-stretch px-3 py-5 flex flex-col items-center">
        <button className="bg-slate-800 px-4 py-4 rounded-3xl cursor-pointer transition-all ease-in-out delay-50 focus:rounded-2xl focus:bg-blue-600 hover:rounded-2xl hover:bg-blue-600 ">
          <img 
            src={discordLogo} 
            alt="discord logo" 
            className=" w-7"/>
        </button>
        
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
