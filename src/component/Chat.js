import React,{useRef} from 'react'
import {db} from '../firebase.js'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  updateDoc,
  Timestamp,
} from 'firebase/firestore';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from '@firebase/storage';
import { useState } from 'react'
import { useEffect } from 'react'
import Messages from "./component/Messages.js"
import LoginArea from './component/LoginArea.js'

const Chat = ({server,signInClicked,signOutClicked,isUserSignedIn,userName,profileUrl,getUid}) => {
    const [message,setMessage] = useState([])
    const messageRef = useRef()
    const handleSaveText = async (e) => {
        e.preventDefault()
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
                uid: getUid(),
                userName: userName(),
                profileUrl: profileUrl(),
                text: messageRef.current.value,
                created: Timestamp.now()
            })
            const input = document.getElementById("msg")
            input.value = ""
            const chatarea = document.getElementById("chatarea")
            chatarea.scrollTop = chatarea.scrollHeight;
        }catch{
            alert("Unexpected Error")
        }
    }

    const handleSaveImg = async(e) => {
        e.preventDefault()
        if (!isUserSignedIn()){
            alert("You need to login to sent messages");
            return ;
        }
        let file = e.target.files[0]
        const input = document.getElementById("image-form")
        input.reset();
        if (!file.type.match('image.*')) {
            alert("You are only allowed to share images.")
            return;
        }
        
        try{
            const messageRef  = await addDoc(collection(getFirestore(), 'messages'), {
                uid: getUid(),
                userName: userName(),
                profileUrl: profileUrl(),
                imageUrl: "",
                created: Timestamp.now()
              });
            console.log(messageRef )
            const filePath = `${getUid()}/${messageRef.id}/${file.name}`;
            const newImageRef = ref(getStorage(), filePath);
            const fileSnapshot = await uploadBytesResumable(newImageRef, file);

            const publicImageUrl = await getDownloadURL(newImageRef);
            await updateDoc(messageRef,{
                imageUrl: publicImageUrl,
                storageUri: fileSnapshot.metadata.fullPath
            });
            
        }catch(e){
            console.log(e)
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
        <div className='flex-grow flex flex-col text-slate-300 text-sm w-full'>
            <div className='h-20 px-6 shadow-md text-xl flex justify-between items-center gap-5'>
                <h2 className='md:text-lg text-sm'># <span className='text-white font-bold'>{server}</span></h2>
                <LoginArea signInClicked={signInClicked} signOutClicked={signOutClicked}/>
            </div>
            <Messages message={message}/>
            <div className="m-4 px-3 py-1 gap-5 flex items-center bg-slate-600 rounded-lg">
                <form onSubmit={handleSaveText} className="grow">
                    <input className="w-full focus:outline-none bg-slate-600 p-2 ml-3 flex-grow" id="msg" type="text" placeholder='Enter your message' ref={messageRef} autoComplete="off"/>
                </form>
                <form id="image-form" action="#">
                    <label>
                    <input id="mediaCapture" type="file" accept="image/*" capture="camera" hidden={true} onChange={handleSaveImg}/>
                    <svg className="h-6 w-6 mr-3 text-slate-400 hover:text-slate-200 transition-all duration-200 cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <circle cx="8.5" cy="8.5" r="1.5" />  <polyline points="21 15 16 10 5 21" /></svg>
                    </label>
                </form>
            </div>
            
        </div>
    )
}

export default Chat