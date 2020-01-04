import React, { useState, useEffect } from "react"
import Editor from "../components/Editor"
import { StorageContextConsumer } from "../contexts/storageContext"

const MostRecentPage = ({
    documents,
    setDocuments,
    history,
    match
}) => {

    const [selectedDoc, setSelectedDoc] = useState({
        title: "",
        body: ""
    })

    useEffect(()=>{
            if(documents.filter(doc => doc.id === parseInt(match.params.id))[0]){
                setSelectedDoc(documents.filter(doc => doc.id === parseInt(match.params.id))[0])
            } else {
                history.push("/")
            }
    }, [match, setSelectedDoc, documents, history])

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