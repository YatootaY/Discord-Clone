import React,{useRef} from 'react'
import {db} from '../firebase.js'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot} from '@firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import Messages from "./component/Messages.js"
import LoginArea from './component/LoginArea.js'

const Chat = ({server,signInClicked,signOutClicked,isUserSignedIn}) => {
    
    const [message,setMessage] = useState([])
    const messageRef = useRef()
    const handleSave = async (e) => {
        e.preventDefault()
        console.log(isUserSignedIn)
        if (!isUserSignedIn()){
            alert("You need to login to sent messages");
            return ;
        }
        if (messageRef.current.value === ""){
            alert("You cannot sent empty message");
            return ;
        }
        try{
            await addDoc(collection(db,server), {
                text: messageRef.current.value,
                created: Timestamp.now()
            })
            const input = document.getElementById("msg")
            input.value = ""
            const chatarea = document.getElementById("chatarea")
            chatarea.scrollTop = chatarea.scrollHeight;
        }catch{
            alert(e)
        }
    }

    useEffect( () => {
        const q = query(collection(db,server),orderBy("created"))
        onSnapshot(q,(querySnapshot) => {
            setMessage(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
        const chatarea = document.getElementById("chatarea")
        chatarea.scrollTop = chatarea.scrollHeight;
    },[server])
    
    return(
        <div className='flex-grow flex flex-col text-slate-300 text-sm'>
            <div className='h-20 px-6 shadow-md text-xl flex justify-between items-center'>
                <h2># <span className='text-white font-bold'>{server}</span></h2>
                <LoginArea signInClicked={signInClicked} signOutClicked={signOutClicked}/>
            </div>
            <Messages message={message}/>
            <form onSubmit={handleSave} className="m-4 px-3 py-1 gap-5 flex items-center bg-slate-600 rounded-lg">
                <input className="focus:outline-none bg-slate-600 p-2 ml-3 flex-grow" id="msg" type="text" placeholder='Enter your message' ref={messageRef} autoComplete="off"/>
                <svg className="h-6 w-6 mr-3 text-slate-400 hover:text-slate-200 transition-all duration-200 cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <circle cx="8.5" cy="8.5" r="1.5" />  <polyline points="21 15 16 10 5 21" /></svg>
            </form>
        </div>
    )
}

export default Chat