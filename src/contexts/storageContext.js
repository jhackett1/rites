import React, { useState, useEffect } from "react"

const StorageContext = React.createContext()

export const StorageContextProvider = ({
    children
}) => {

    const [ documents, setDocuments ] = useState([])

    // unbake
    useEffect(()=>{
        initialise()
        window.localStorage.getItem(JSON.parse(documents))
    }, [])

    // bake
    useEffect(()=>{
        initialise()
        window.localStorage.setItem(JSON.stringify(documents))
    }, [documents])

    const initialise = () => {
        if(!window.localStorage.getItem("documents")){
            window.localStorage.setItem(JSON.stringify([]))
        }
    }

    return (
        <StorageContext.Provider
            value={{
                documents: documents
            }}
        >
            {children}
        </StorageContext.Provider>
    )
}

export const StorageContextConsumer = StorageContext.Consumer