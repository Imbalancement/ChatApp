import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    
    // eslint-disable-next-line react-refresh/only-export-components
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-app") )|| null)

    return <AuthContext.Provider value ={{authUser, setAuthUser}}>

    {children}

    </AuthContext.Provider>
}