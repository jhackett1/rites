import React, { useState, useEffect } from "react"
import { useIdle } from "use-idle"
import ContentEditable from "react-contenteditable"

const Editor = ({
    selectedDoc,
    setSelectedDoc,
    documents,
    setDocuments
}) => {

    const [unsavedChanges, setUnsavedChanges] = useState(false)

    const isIdle = useIdle({
        timeToIdle: 500
    })

    const handleTitleChange = newTitle => setSelectedDoc({
        ...selectedDoc,
        title: newTitle
    })

    const handleBodyChange = newBody => setSelectedDoc({
        ...selectedDoc,
        body: newBody
    })

    useEffect(() => {
        if (isIdle && unsavedChanges){
            let remainingDocs = documents.filter(doc => doc.id !== selectedDoc.id) 
            setDocuments(remainingDocs.concat({
                ...selectedDoc,
                date: new Date()
            }))
            setUnsavedChanges(false)
        }
    }, [isIdle, unsavedChanges, documents, selectedDoc, setDocuments])

    return(
        <>
            <ContentEditable
                style={{
                    minHeight: "100px"
                }}
                html={selectedDoc.title}
                onChange={e => {
                    handleTitleChange(e.target.value)
                    setUnsavedChanges(true)
                }}
                tagName="h1"
            />
            <textarea 
                className="body-editor"
                onChange={e => {
                    setUnsavedChanges(true)
                    handleBodyChange(e.target.value)
                }}
                placeholder="Enter body..."
                value={selectedDoc.body}
                >
            </textarea>
        </>
    )
}

export default Editor