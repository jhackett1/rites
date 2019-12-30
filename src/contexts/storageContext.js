import React, { useState, useEffect } from "react"
import "./seed"

const StorageContext = React.createContext()

export const StorageContextProvider = ({
    children
}) => {

    const [selectedDoc, setSelectedDoc] = useState({})
    const [allDocs, setAllDocs] = useState([])

    return (
        <StorageContext.Provider
            value={{
                selectedDoc,
                setSelectedDoc
            }}
        >
            {children}
        </StorageContext.Provider>
    )
}

export const StorageContextConsumer = StorageContext.Consumer