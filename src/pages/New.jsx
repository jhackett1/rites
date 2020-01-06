import React, { useState } from "react"
import EditorArea from "../components/EditorArea"
import { StorageContextConsumer } from "../contexts/storageContext"
import { createEditorState } from "medium-draft"

const NewPage = ({
    documents,
    setDocuments
}) => {

    const createNew = () => { 
        let newId = documents.sort((a, b) => b.id - a.id)[0].id + 1
        return {
            id: newId,
            title: "",
            body: createEditorState()
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