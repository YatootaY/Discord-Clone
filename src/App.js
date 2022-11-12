import React,{useState, useEffect} from "react"
import Nav from "./component/Nav.js"
import Chat from "./component/Chat.js"
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@firebase/auth';

const App = () => {
  const [server,setServer] = useState("main")
  
  const serverClicked = (serverName) => {
    setServer(serverName)
  }
  const signInClicked = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(),provider)
  }

  const signOutClicked = () => {
    signOut(getAuth());
  }

  
  const getProfilePicUrl = () => {
    return getAuth().currentUser.photoURL || './images/discord logo.png';
  }
  
  const getUserName = () => {
    return getAuth().currentUser.displayName;
  }


  const authStateObserver = () => {
    const signInBtn = document.getElementById("signIn")
    const signOutBtn = document.getElementById("signOut")
    const userNameEle = document.getElementById("username")
    const profileEle = document.getElementById("profilePic")
    if (isUserSignedIn()) { 
      const userName = getUserName();
      userNameEle.textContent = userName;
      const profileUrl = getProfilePicUrl();
      profileEle.src =  profileUrl + '?sz=150';
      
      profileEle.removeAttribute('hidden');
      userNameEle.removeAttribute('hidden');
      signOutBtn.removeAttribute('hidden');

      signInBtn.setAttribute('hidden', 'true');
    } else { 
      profileEle.setAttribute('hidden','true');
      userNameEle.setAttribute('hidden', 'true');
      signOutBtn.setAttribute('hidden', 'true');
      signInBtn.removeAttribute('hidden');
    }
  }

  const initFirebaseAuth = () => {

    onAuthStateChanged(getAuth(), authStateObserver);
  }

  const isUserSignedIn = () => {
    return !!getAuth().currentUser;
  }

  const addSizeToGoogleProfilePic = (url) => {
    if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
      return url + '?sz=150';
    }
    return url;
  }

  useEffect( () => {
    initFirebaseAuth()
  },[])
  

  return (
    <div className="flex text-white bg-slate-800 h-screen">
      <Nav serverClicked={serverClicked}/>
      <Chat server={server} signInClicked={signInClicked} signOutClicked={signOutClicked}/>
    </div>
  );
}

export default App;
