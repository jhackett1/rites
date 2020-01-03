import React, { useState } from "react"
import useStorage from "../hooks/useStorage"

const StorageContext = React.createContext()

export const StorageContextProvider = ({
    children
}) => {

    const [allDocs, setAllDocs] = useStorage([])

    const fetchMostRecent = () => {
        console.log("derp")
        return (allDocs && allDocs[0]) ? allDocs.sort((a, b) => b.date - a.date)[0] : {
            id: 1,
            title: "",
            body: ""
        }
    }

    const [selectedDoc, setSelectedDoc] = useState(fetchMostRecent())

    console.log(selectedDoc)
    
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

    const getDocById = id => {
        setSelectedDoc(allDocs.filter(doc => doc.id === id)[0])
    }

    const newDoc = () => {
        let newId = allDocs.sort((a, b) => b.id - a.id)[0].id + 1
        console.log(newId)
        setSelectedDoc({
            id: newId,
            title: "",
            body: ""
        })
    }

    return (
        <StorageContext.Provider
            value={{
                allDocs,
                selectedDoc,
                setSelectedDoc,
                handleTitleChange,
                handleBodyChange,
                save,
                getDocById,
                newDoc
            }}
        >
            {children}
        </StorageContext.Provider>
    )
}

export const StorageContextConsumer = StorageContext.Consumer