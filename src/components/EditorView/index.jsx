import React, { useState, useEffect } from "react"
import { StorageContextConsumer } from "../../contexts/storageContext"
import { useIdle } from "use-idle"

const EditorView = ({
    selectedDoc,
    handleTitleChange,
    handleBodyChange,
    save
}) => {

    const [unsavedChanges, setUnsavedChanges] = useState(false)

    const isIdle = useIdle({
        timeToIdle: 500
    })

    useEffect(() => {
        if (isIdle && unsavedChanges){
            save()
            console.log("saving...")
            setUnsavedChanges(false)
        }
    }, [isIdle, save, unsavedChanges])

    return(
        <>
            <textarea
                className="title-editor"
                value={selectedDoc.title} 
                onChange={e => {
                    setUnsavedChanges(true)
                    handleTitleChange(e.target.value)
                }} 
                placeholder="Enter title..."
                >
            </textarea>
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

export default () =>
    <StorageContextConsumer>
        {
            context =>
                <EditorView {...context}/>
        }
    </StorageContextConsumer>