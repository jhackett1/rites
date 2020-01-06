import React, { useState } from "react"
import EditorArea from "../components/EditorArea"
import { StorageContextConsumer } from "../contexts/storageContext"
import { createEditorState } from "medium-draft"

const MostRecentPage = ({
    documents,
    setDocuments
}) => {

    const fetchMostRecent = () => {
        if(documents && documents[0]){
            let doc = documents.sort((a, b) => b.date - a.date)[0]
            return {
                ...doc,
                body: createEditorState(doc.body)
            }
        } else {
            return {
                id: 1,
                title: "",
                body: createEditorState()
            }
        }
    }

    const [selectedDoc, setSelectedDoc] = useState(fetchMostRecent())

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