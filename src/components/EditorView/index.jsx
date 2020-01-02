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
    const [saving, setSaving] = useState(false)

    const isIdle = useIdle({
        timeToIdle: 1000
    })

    // this is naive and needs improving
    // should check:

    // 1. any changes since last change
    // 2. warn about autosave
    useEffect(() => {
        setSaving(true)
        isIdle && save()
        setSaving(false)
    }, [isIdle])

    return(
        <>
            <textarea
                className="title-editor"
                value={selectedDoc.title} 
                onChange={e => handleTitleChange(e.target.value)} 
                placeholder="Enter title..."
                >
            </textarea>
            <textarea 
                className="body-editor"
                onChange={e => handleBodyChange(e.target.value)}
                placeholder="Enter body..."
                value={selectedDoc.body}
                >
            </textarea>
            {saving && <p>Autosaving...</p>}
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