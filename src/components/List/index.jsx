import React from "react"
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

export default List