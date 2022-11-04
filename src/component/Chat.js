import React,{useRef} from 'react'
import firestore from "../firebase.js"
import {addDoc, collection} from "@firebase/firestore"

const Chat = () => {
    
    const messageRef = useRef();
    const ref = collection(firestore,"main message")

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value)

        let data = {
            message: messageRef.current.value
        }
        try{
            addDoc(ref,data)
        }catch(e){
            console.log(e)
        }
    }

    return(
        <div>
            <h1 className='text-white'>Hello</h1>
            <form onSubmit={handleSave} className="text-black">
                <input type="text" placeholder='Enter your message' ref={messageRef} />
                <button type='submit'>Sent</button>
            </form>
        </div>
    )
}

export default Chat