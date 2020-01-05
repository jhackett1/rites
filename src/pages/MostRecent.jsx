import React, { useState } from "react"
import EditorArea from "../components/EditorArea"
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
                body: doc.body
            }
        } else {
            return {
                id: 1,
                title: "",
                body: [{
                    type: 'paragraph',
                    children: [{ text: ""}],
                }]
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