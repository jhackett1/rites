import React, { useState, useEffect } from "react"
import Editor from "../components/Editor"
import { StorageContextConsumer } from "../contexts/storageContext"

const MostRecentPage = ({
    documents,
    setDocuments,
    match
}) => {

    const [selectedDoc, setSelectedDoc] = useState({
        title: "",
        body: ""
    })

    useEffect(()=>{
        setSelectedDoc(documents.filter(doc => doc.id === parseInt(match.params.id))[0])
    }, [match, setSelectedDoc, documents])

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