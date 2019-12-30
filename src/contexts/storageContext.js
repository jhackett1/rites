import React, { useState, useEffect } from "react"

const StorageContext = React.createContext()

export const StorageContextProvider = ({
    children
}) => {

    const [documents, setDocuments] = useState([])

    // unbake
    useEffect(() => {
        setDocuments(JSON.parse(window.localStorage.getItem("documents")))
    }, [])

    // bake
    useEffect(()=>{
        window.localStorage.setItem("documents", JSON.stringify(documents))
    })

    

    return (
        <StorageContext.Provider
            value={{}}
        >
            {children}
        </StorageContext.Provider>
    )
}

export const StorageContextConsumer = StorageContext.Consumer