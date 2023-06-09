import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    const clear = () => {
        setCurrentUser(null)
        setIsLoading(false)
    }

    const authStateChanged = (user) => {
        setIsLoading(true);
        if(!user){
            clear();
            return;
        }
        setCurrentUser(user)
        setIsLoading(false)
        // console.log(user);
    }

    const signOut  = () => {
        authSignOut(auth).then(()=>clear());
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,authStateChanged);
        return () => unSubscribe();
    }, [])

    return(
        <UserContext.Provider value={{
            currentUser,setCurrentUser,isLoading,setIsLoading,signOut
        }}>
            {children}
        </UserContext.Provider>
    )

}

export const useAuth = () => useContext(UserContext);