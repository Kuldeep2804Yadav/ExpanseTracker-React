
import React,{useState} from "react";

 export const Context = React.createContext(null);

 export const ContextProvider=({children})=>{
    const [contactFormOpen, setContactFormOpen] = useState(false);

    const contextValue={
        setContactFormOpen,
        contactFormOpen
    }

    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    )
}