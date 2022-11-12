import React,{useRef} from 'react'
import {db} from '../firebase.js'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot} from '@firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import Messages from "./component/Messages.js"
import LoginArea from './component/LoginArea.js'

const Chat = ({server,signInClicked,signOutClicked}) => {
    
    const [message,setMessage] = useState([])
    const messageRef = useRef()
    const handleSave = async (e) => {
        e.preventDefault()

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
            <form onSubmit={handleSave} className="m-4 ">
                <input id="msg" type="text" placeholder='Enter your message' ref={messageRef} autoComplete="off" className="w-full focus:outline-none bg-slate-600 px-5 py-3 pl-10 rounded-lg"/>
            </form>
        </div>
    )
}

export default Chat