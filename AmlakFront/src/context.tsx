import React, { useContext } from 'react'
import { useState, createContext } from "react";
import { showMenu } from './models/test';



const AppContext = createContext<showMenu | null>(null);

const AppProvider = ({children}:any)=>{
    const [showMenu , setShowMenu] = useState<boolean>(false)

    return <AppContext.Provider value = {{showMenu,setShowMenu}} >{children}</AppContext.Provider>
}


export const useGlobalcontext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider};