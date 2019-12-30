import React from "react"
import { StorageContextConsumer } from "../../contexts/storageContext"

const EditorView = ({
    selectedDoc,
    setSelectedDoc
}) => {

    return(
        <>
            <input 
                value={selectedDoc.title} 
                onChange={e => setSelectedDoc({
                    ...selectedDoc, 
                    title: e.target.value
                })} 
                placeholder="Enter title..."
                />
            <br/>
            <textarea 
                onChange={e => setSelectedDoc({
                    ...selectedDoc, 
                    body: e.target.value
                })}
                placeholder="Enter body..."
                >
                {selectedDoc.body}
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