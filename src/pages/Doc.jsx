import React, { useState, useEffect } from "react"
import EditorArea from "../components/EditorArea"
import { StorageContextConsumer } from "../contexts/storageContext"
import { createEditorState } from "medium-draft"

const MostRecentPage = ({
    documents,
    setDocuments,
    history,
    match
}) => {

    const [selectedDoc, setSelectedDoc] = useState({
        title: "",
        body: createEditorState()
    })

    useEffect(()=>{
            if(documents.filter(doc => doc.id === parseInt(match.params.id))[0]){
                let doc = documents.filter(doc => doc.id === parseInt(match.params.id))[0]
                setSelectedDoc({
                    ...doc,
                    body: createEditorState(doc.body)
                })
            } else {
                history.push("/")
            }
    }, [match, setSelectedDoc, documents, history])

    return(
        <EditorArea
            selectedDoc={selectedDoc}
            setSelectedDoc={setSelectedDoc}
            documents={documents}
            setDocuments={setDocuments}
            />
    )
}

export default props =>
    <StorageContextConsumer>
        {context =>
            <MostRecentPage {...context} {...props}/>
        }
    </StorageContextConsumer>