import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
  
    const googleProvider = new GoogleAuthProvider();
  
    // Register
    const registerUser = (email, password) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    //   Login
    const loginUser = (email, password) => {
      setLoader(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    //google
    const google = () => {
      setLoader(true);
      return signInWithPopup(auth, googleProvider);
    };
  
 
  
    //Logout
    const logOut = () => {
      setLoader(true);
      return signOut(auth);
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoader(false)

            return ()=>{
                return unsubscribe()
            }
        })
    },[])

    const value = {
        user,
        loader,
        registerUser,
        loginUser,
        logOut,
        google,
      };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;