import React, { useState, useEffect } from "react"
import "medium-editor/dist/css/medium-editor.css"
import Editor from "react-medium-editor"
import { StorageContextConsumer } from "../../contexts/storageContext"

const EditorView = context => {

    const doc = {}

    const setDoc = () => {}

    return (
        <>
            <h2>List of docs</h2>
            <ul>
                {context.documents && context.documents.map(doc =>
                    <li key={doc.id}>{doc.title}</li>
                )}
            </ul>

            {doc &&
                <>
                    <h2>New doc</h2>
                    <p><small>{doc.content}</small></p>
                    <input 
                        value={doc.title} 
                        onChange={e => setDoc({...doc, title: e.target.value})} 
                        placeholder="Enter title..."
                        />
                    <Editor
                        style={{
                            border: "1px solid black"
                        }}
                        text={doc.content}
                        onChange={text => setDoc({...doc, content: text})}
                        />
                </>
            }
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