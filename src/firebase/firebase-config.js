// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALJ41GrtlM7SmYhZwl03kbODGPBoeLMzU",
    authDomain: "chat-wave-6b511.firebaseapp.com",
    projectId: "chat-wave-6b511",
    storageBucket: "chat-wave-6b511.appspot.com",
    messagingSenderId: "241405657328",
    appId: "1:241405657328:web:87bb3b93e1e1ba18420235",
    measurementId: "G-5RV24KWE9Z"
};

// Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const authentication=getAuth(app);
    const db=getFirestore(app);
    

export { authentication, db};