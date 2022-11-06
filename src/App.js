import React,{useState} from "react"
import Nav from "./component/Nav.js"
import Chat from "./component/Chat.js"

const App = () => {

  const [server,setServer] = useState("main")
  
  const serverClicked = (serverName) => {
      setServer(serverName)
  }

  return (
    <div className="flex text-white bg-slate-800 h-screen">
      <Nav serverClicked={serverClicked}/>
      <Chat server={server}/>
    </div>
  );
}

export default App;
