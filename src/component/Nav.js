import React from 'react'
import onePiece from "../images/one piece.jpg"
import firebase from "../images/firebase.png"
import Server from "./component/Server.js"
import MainServer from "./component/MainServer.js"
import LoginArea from "./component/LoginArea.js"

const Nav = ({serverClicked}) => {

    return(
        <div className="bg-black self-stretch px-5 py-5 flex flex-col items-center w-fit gap-7">
            
            <MainServer serverClicked={serverClicked}/>

            <Server pic={onePiece} altName="onePiece" serverClicked={serverClicked}/>
            <Server pic={firebase} altName="firebase" serverClicked={serverClicked}/>
            
        </div>
    )
}

export default Nav