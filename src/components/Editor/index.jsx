import React, { useState, useEffect } from "react"
import { useIdle } from "use-idle"
import ContentEditable from "react-contenteditable"
import Editor from "react-medium-editor"
import "medium-editor/dist/css/medium-editor.css"

const EditorArea = ({
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
            <Editor
                tag="div"
                text={selectedDoc.body}
                onChange={text => {
                    setUnsavedChanges(true)
                    handleBodyChange(text)
                }}
                // options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
                />
            {unsavedChanges && <p>Saving changes...</p>}
        </>
    )
}

export default EditorArea