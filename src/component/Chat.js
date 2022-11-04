import React,{useRef} from 'react'
import {db} from '../firebase.js'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot} from '@firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'

const Chat = () => {
    
    const [message,setMessage] = useState([])
    const messageRef = useRef()
    const handleSave = async (e) => {
        e.preventDefault()

        try{
            await addDoc(collection(db,"discord msg"), {
                text: messageRef.current.value,
                created: Timestamp.now()
            })
        }catch{
            alert(e)
        }
    }

    useEffect( () => {
        const q = query(collection(db,"discord msg"),orderBy("created"))
        onSnapshot(q,(querySnapshot) => {
            setMessage(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
        console.log(message)
    },[])
    
    return(
        <div>
            <div>
                {
                    message.map((msg) => {
                        return(<h2 id={msg.id}>
                            {msg.data.text}
                        </h2>)
                    })
                }
            </div>
            
            <form onSubmit={handleSave} className="text-black">
                <input type="text" placeholder='Enter your message' ref={messageRef} />
                <button type='submit'>Sent</button>
            </form>
        </div>
    )
}

export default Chat