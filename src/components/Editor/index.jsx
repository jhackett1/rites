import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useIdle } from "use-idle"
import ContentEditable from "react-contenteditable"
import Editor from "react-medium-editor"
import "medium-editor/dist/css/medium-editor.css"

const SavingMessage = styled.p`
    font-family: "Open Sans", sans-serif;
    font-weight: light;
    font-size: 0.9rem;
    text-transform: uppercase;
    position: absolute;
    right: 10px;
    bottom: 10px;
    letter-spacing: 1px;
`

const EditorArea = ({
    selectedDoc,
    setSelectedDoc,
    documents,
    setDocuments
}) => {

    const [unsavedChanges, setUnsavedChanges] = useState(true)

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
                    if(e.target.value !== "") setUnsavedChanges(true)
                }}
                tagName="h1"
            />
            <Editor
                tag="div"
                text={selectedDoc.body}
                onChange={text => {
                    handleBodyChange(text)
                    if(text !== "") setUnsavedChanges(true)
                }}
                // options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
                />
            {unsavedChanges && <SavingMessage>Saving changes...</SavingMessage>}
        </>
    )
}

export default EditorArea