import React, { useState, useEffect } from "react"
import useStorage from "../hooks/useStorage"

const StorageContext = React.createContext()

export const StorageContextProvider = ({
    children
}) => {

    const fetchMostRecent = () => {
        return allDocs[allDocs.length - 1] || {
            id: 1,
            title: "",
            body: ""
        }
    }

    const [allDocs, setAllDocs] = useStorage([])
    const [selectedDoc, setSelectedDoc] = useState(fetchMostRecent())

    const handleTitleChange = newTitle => setSelectedDoc({
        ...selectedDoc,
        title: newTitle
    })

    const handleBodyChange = newBody => setSelectedDoc({
        ...selectedDoc,
        body: newBody
    })

    const save = () => {
        let docsCopy = [].concat(allDocs)
        docsCopy.push(selectedDoc)
        setAllDocs(docsCopy)
    }

    return (
        <StorageContext.Provider
            value={{
                selectedDoc,
                setSelectedDoc,
                handleTitleChange,
                handleBodyChange,
                save
            }}
        >
            {children}
        </StorageContext.Provider>
    )
}

export const StorageContextConsumer = StorageContext.Consumer