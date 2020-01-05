import React, { useState } from "react"
import Editor from "../components/Editor"
import { EditorState, convertFromRaw } from "draft-js"
import { StorageContextConsumer } from "../contexts/storageContext"

const MostRecentPage = ({
    documents,
    setDocuments
}) => {

    const fetchMostRecent = () => {
        if(documents && documents[0]){
            let doc = documents.sort((a, b) => b.date - a.date)[0]
            return {
                ...doc,
                body: EditorState.createWithContent(convertFromRaw(doc.body))
            }
        } else {
            return {
                id: 1,
                title: "",
                body: EditorState.createEmpty()
            }
        }
    }

    const [selectedDoc, setSelectedDoc] = useState(fetchMostRecent())

    return(
        <Editor
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