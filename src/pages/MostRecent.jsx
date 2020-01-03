import React, { useState } from "react"
import Editor from "../components/Editor"
import { StorageContextConsumer } from "../contexts/storageContext"

const MostRecentPage = ({
    documents,
    setDocuments
}) => {

    const fetchMostRecent = () => {
        return (documents && documents[0]) ? documents.sort((a, b) => b.date - a.date)[0] : {
            id: 1,
            title: "",
            body: ""
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