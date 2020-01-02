import React from "react"
import { StorageContextConsumer } from "../../contexts/storageContext"

const EditorView = ({
    selectedDoc,
    handleTitleChange,
    handleBodyChange,
    save
}) => {

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
            <button onClick={save}>
                Save
            </button>
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