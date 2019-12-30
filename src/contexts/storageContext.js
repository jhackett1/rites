import React, { useState, useEffect } from "react"
import "./seed"

const StorageContext = React.createContext()

export const StorageContextProvider = ({
    children
}) => {

    const [documents, setDocuments] = useState([])

    return (
        <StorageContext.Provider
            value={{}}
        >
            {children}
        </StorageContext.Provider>
    )
}

export const StorageContextConsumer = StorageContext.Consumer