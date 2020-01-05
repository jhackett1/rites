import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useIdle } from "use-idle"
import ContentEditable from "react-contenteditable"
import Editor from "react-medium-editor"
import "medium-editor/dist/css/medium-editor.css"
import "medium-editor/dist/css/themes/beagle.css"

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

const StyledEditor = styled(Editor)`
    /* font-size: 1.1rem; */
    &:focus{
        outline: none;
    }
    p{
        margin-bottom: 25px;
    }
    ul, ol{
        margin-left: 25px;
        margin-bottom: 25px;
    }
    li{
        padding-left: 5px;
        margin-bottom: 10px;
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

    // useEffect(() => {
    //     if (isIdle && unsavedChanges){
    //         let remainingDocs = documents.filter(doc => doc.id !== selectedDoc.id) 
    //         setDocuments(remainingDocs.concat({
    //             ...selectedDoc,
    //             date: new Date()
    //         }))
    //         setUnsavedChanges(false)
    //     }
    // }, [isIdle, unsavedChanges, documents, selectedDoc, setDocuments])

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

            {console.log(selectedDoc.body)}
            <StyledEditor
                tag="div"
                text={selectedDoc.body}
                onChange={text => {
                    if(text === "<p><br></p>") text = ""
                    handleBodyChange(text)
                    if(text !== "") setUnsavedChanges(true)
                }}
                options={{
                    // placeholder: (selectedDoc.body === "") ? "The rest is your canvas..." : false
                    placeholder: false,
                    toolbar: { buttons: ["bold", "italic", "underline", "unorderedlist", "h2", "h3"] } 
                }}
                />
            {unsavedChanges && <SavingMessage>Saving changes...</SavingMessage>}
        </>
    )
}

export default EditorArea