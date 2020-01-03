import React, { useState, useEffect } from "react"
import { StorageContextConsumer } from "../../contexts/storageContext"
import { useIdle } from "use-idle"
import ContentEditable from "react-contenteditable"
import List from "../List"

const EditorView = ({
    selectedDoc,
    handleTitleChange,
    handleBodyChange,
    getDocById,
    save,
    allDocs,
    match,
    newDoc
}) => {

    useEffect(()=>{
        if(match.params.id){
            getDocById(parseInt(match.params.id))
        }
    }, [match, getDocById])

    const [unsavedChanges, setUnsavedChanges] = useState(false)

    const isIdle = useIdle({
        timeToIdle: 500
    })

    useEffect(() => {
        if (isIdle && unsavedChanges){
            save()
            setUnsavedChanges(false)
        }
    }, [isIdle, save, unsavedChanges])

    return(
        <>

            <button onClick={newDoc}>New document</button>

            <List documents={allDocs}/>

            <ContentEditable
                style={{
                    height: "100px"
                }}
                html={selectedDoc.title}
                onChange={e => {
                    setUnsavedChanges(true)
                    handleTitleChange(e.currentTarget.textContent)
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

export default props =>
    <StorageContextConsumer>
        {context =>
            <EditorView {...context} {...props}/>
        }
    </StorageContextConsumer>