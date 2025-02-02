import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from '@/app/firebase'


const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()

    const googleSignIn = () =>{
        const Provider = new GoogleAuthProvider();
        signInWithPopup(auth, Provider)
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logout }}>
            {children}
        </AuthContext.Provider>)
}


export const UserAuth = () => {

    return useContext(AuthContext)

}