import React from "react"
import { StorageContextConsumer } from "../../contexts/storageContext"
import { Link } from "react-router-dom"

const List = ({
    documents
}) => 
    <ul>
        {documents.map(doc =>
            <li key={doc.id}>
                <Link to={`/${doc.id}`}>{doc.title}</Link>
            </li>
        )}
    </ul>

export default props =>
    <StorageContextConsumer>
        {context =>
            <List {...context} {...props}/>
        }
    </StorageContextConsumer>