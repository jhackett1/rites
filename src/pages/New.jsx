import React, { useState } from "react"
import Editor from "../components/Editor"
import { StorageContextConsumer } from "../contexts/storageContext"

const NewPage = ({
    documents,
    setDocuments
}) => {

    const createNew = () => { 
        let newId = documents.sort((a, b) => b.id - a.id)[0].id + 1
        return {
            id: newId,
            title: "",
            body: ""
        }
    }

    const [selectedDoc, setSelectedDoc] = useState(createNew())

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
            <NewPage {...context} {...props}/>
        }
    </StorageContextConsumer>