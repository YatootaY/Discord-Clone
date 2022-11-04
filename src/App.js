import React from "react"
import Nav from "./component/Nav.js"
import Chat from "./component/Chat.js"

const App = () => {
  

  return (
    <div className="grid grid-cols-12 text-white bg-slate-800 h-screen space-x-5">
      <Nav/>
      <Chat/>
    </div>
  );
}

export default App;
