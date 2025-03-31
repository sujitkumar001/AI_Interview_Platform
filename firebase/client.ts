import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeP7TOJV-1Ms7iDgTtgvUmmKYuEiEZpp4",
    authDomain: "talk2hire-7d261.firebaseapp.com",
    projectId: "talk2hire-7d261",
    storageBucket: "talk2hire-7d261.firebasestorage.app",
    messagingSenderId: "771483916009",
    appId: "1:771483916009:web:95ba6bafea021497bc8278",
    measurementId: "G-DPQ1NSM9QE"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);