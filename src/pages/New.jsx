import React, { useState } from "react"
import EditorArea from "../components/EditorArea"
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
            body: [{
                type: 'paragraph',
                children: [{ text: ""}],
            }]
        }
    }

    const [selectedDoc, setSelectedDoc] = useState(createNew())

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
            <NewPage {...context} {...props}/>
        }
    </StorageContextConsumer>