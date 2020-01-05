import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useIdle } from "use-idle"
import ContentEditable from "react-contenteditable"
import SlateEditor from "../SlateEditor"

import Editor from "rich-markdown-editor";


const SavingMessage = styled.p`
    font-family: "Open Sans", sans-serif;
    font-weight: light;
    font-size: 0.9rem;
    text-transform: uppercase;
    position: absolute;
    right: 20px;
    bottom: 20px;
    letter-spacing: 1px;
`

const TitleEditor = styled(ContentEditable)`
    font-size: 2.5rem;
    min-height: 60px;
    margin-bottom: 25px;
    @media screen and (min-width: 1000px){
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
                body: selectedDoc.body,
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
                    const node = document.createElement('div')
                    node.innerHTML = e.target.value
                    handleTitleChange(node.innerText.replace(/(?:\r\n|\r|\n)/g, ' '))
                    if(e.target.value !== "") setUnsavedChanges(true)
                }}
                tagName="h1"
                placeholder="Title..."
            />

 
<Editor
  defaultValue="Hello world!"
/>


            <SlateEditor
                value={selectedDoc.body}
                onChange={value => {
                    handleBodyChange(value)
                    setUnsavedChanges(true)
                }}
            />
            {unsavedChanges && <SavingMessage>Saving changes...</SavingMessage>}
        </>
    )
}

export default EditorArea