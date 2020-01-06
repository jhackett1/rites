import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useIdle } from "use-idle"
import ContentEditable from "react-contenteditable"
import Editor from "../DraftEditor"
import { convertToRaw } from "draft-js"
import moment from "moment"

const SavingMessage = styled.p`
    font-family: "Open Sans", sans-serif;
    font-weight: light;
    font-size: 0.9rem;
    text-transform: uppercase;
    position: fixed;
    right: 20px;
    bottom: 20px;
    letter-spacing: 1px;
`

const TitleEditor = styled(ContentEditable)`
    font-size: 2.5rem;
    min-height: 60px;
    margin-bottom: 25px;
    margin-top: 70px;
    @media screen and (min-width: 600px){
        margin-top: 95px;
    }
    @media screen and (min-width: 1000px){
        margin-top: 140px;
        font-size: 3rem;
    }

    &:focus{
        outline: none;
    }
    &:empty:before {
        content: attr(placeholder);
        display: block;
        color: #1c1c1c;
        opacity: 0.25;
    }
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
                body: convertToRaw(selectedDoc.body.getCurrentContent()),
                date: new Date()
            }))
            setUnsavedChanges(false)
        }
    }, [isIdle, unsavedChanges, documents, selectedDoc, setDocuments])

    return(
        <>
            <TitleEditor
                html={selectedDoc.title}
                onChange={e => {
                    handleTitleChange(e.target.value)
                    if(e.target.value !== "") setUnsavedChanges(true)
                }}
                tagName="h1"
                placeholder="Title..."
            />
            <Editor         
                value={selectedDoc.body}
                onChange={value => {
                    handleBodyChange(value)
                    setUnsavedChanges(true)
                }}
                />
            {unsavedChanges ? <SavingMessage>Saving changes...</SavingMessage> : <SavingMessage>Saved</SavingMessage>}
        </>
    )
}

export default EditorArea