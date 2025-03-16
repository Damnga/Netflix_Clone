
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,signOut } from "firebase/auth";
import {addDoc,getFirestore,collection} from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBRVuh2xQy7GB0e4G7zJLJ5Wpxdeu31-do",
  authDomain: "netfilx-clone-f5339.firebaseapp.com",
  projectId: "netfilx-clone-f5339",
  storageBucket: "netfilx-clone-f5339.firebasestorage.app",
  messagingSenderId: "163049339059",
  appId: "1:163049339059:web:a0a7915f2327bc2525d8c6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name,email,password)=>{
    try{
        const res= await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
            password,
        });
        alert("User created successfully");
    }catch(err){
        toast.error(err.message);
    }
}
const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(err){
        toast.error(err.message);
    }
}
const logout = ()=>{
    signOut(auth);
}
export {auth,signup,login,logout,db};