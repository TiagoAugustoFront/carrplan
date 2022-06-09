import React,{useEffect, useState} from 'react'
import { createContext, useContext } from 'use-context-selector'
import { useHistory } from 'react-router'
import { postLogin } from '../services/post/requests'


interface AuthProvider {
    login(username:string,senha:string): Promise<void>
}


const context = createContext({} as AuthProvider)

export const AuthProvider:React.FC =({children})=>{
    const history = useHistory();
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        if(!window.localStorage.getItem("refresh")){
            history.push('/login')
        }
    }, [])
    
    return(
        <context.Provider
            value={{
                login: async(username,senha) =>{
                    const data = postLogin(username,senha);
                }
            }}
        >
            {children}
        </context.Provider>
    )
}

export function useAuth() {
    const Auth = useContext(context)
    if (!Auth) {
      throw new Error("This hook should be used inside a 'Prices Provide'.")
    }
    return Auth
}