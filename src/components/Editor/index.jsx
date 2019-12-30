import React, { useState, useEffect } from "react"
import "medium-editor/dist/css/medium-editor.css"
import Editor from "react-medium-editor"
import { StorageContextConsumer } from "../../contexts/storageContext"

const EditorView = context => {

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    useEffect(()=>{
        let thisDoc = context.getMostRecentDoc()
        setId(thisDoc.id)
        setTitle(thisDoc.title)
        setText(thisDoc.content)
    }, [])

    useEffect(()=>{
        console.log("update effect firing...")
        context.updateDoc({
            id: id,
            dateUpdated: new Date(),
            title: title,
            text: text
        })
    }, [title, text])

    return (
        <StorageContextConsumer>
            {
            context =>
                <>
                    <h2>List of docs</h2>
                    <ul>
                        {context.documents && context.documents.map(doc =>
                            <li>{doc.title}</li>
                        )}
                    </ul>

                    <h2>New doc</h2>
                    <small>{text}</small>
                    <br/>
                    <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title..."/>
                    <Editor
                        style={{
                            border: "1px solid black"
                        }}
                        text={text}
                        onChange={text => setText(text)}
                        />
                </>
            }
        </StorageContextConsumer>
    )
}

export default () =>
    <StorageContextConsumer>
        {
            context =>
                <EditorView {...context}/>
        }
    </StorageContextConsumer>