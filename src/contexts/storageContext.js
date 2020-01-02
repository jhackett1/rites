import React, { useState } from "react"
import useStorage from "../hooks/useStorage"

const StorageContext = React.createContext()

export const StorageContextProvider = ({
    children
}) => {

    const [allDocs, setAllDocs] = useStorage([])

    const fetchMostRecent = () => {
        if(allDocs && allDocs[0]){
            return allDocs.sort((a, b) => b.date - a.date)[0]
        }
        return  {
            id: 1,
            title: "",
            body: ""
        }
    }

    console.log(fetchMostRecent())

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
        let remainingDocs = allDocs.filter(doc => doc.id !== selectedDoc.id)
        setAllDocs(remainingDocs.concat({
            ...selectedDoc,
            date: new Date()
        }))
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