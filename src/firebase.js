// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5zYkZgxIsjsRIq6YPwHttiet8GKC9X1A",
  authDomain: "discord-clone-e0d12.firebaseapp.com",
  projectId: "discord-clone-e0d12",
  storageBucket: "discord-clone-e0d12.appspot.com",
  messagingSenderId: "763609022916",
  appId: "1:763609022916:web:1c24a81fa86cf0d3216491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export default firestore