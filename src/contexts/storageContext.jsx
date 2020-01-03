import React from "react"
import useStorage from "../hooks/useStorage"

const StorageContext = React.createContext()

export const StorageContextProvider = ({
    children
}) => {

    const [documents, setDocuments] = useStorage("documents", [])

    return (
        <StorageContext.Provider
            value={{
                documents,
                setDocuments
            }}
        >
            {children}
        </StorageContext.Provider>
    )
}

export const StorageContextConsumer = StorageContext.Consumer