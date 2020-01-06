import React from "react"
import { StorageContextConsumer } from "../../contexts/storageContext"
import { Link } from "react-router-dom"
import moment from "moment"
import { Node } from "slate"

// const serialise = value => value.map(n => Node.string(n)).join('\n')

const List = ({
    documents
}) => 
    <ul>
        {documents
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(doc =>
            <li key={doc.id}>
                <Link to={`/${doc.id}`}><h2>{doc.title}</h2></Link>
                {/* <p dangerouslySetInnerHTML={{
                    __html: serialise(doc.body)
                        .split(" ")
                        .slice(0, 20)
                        .join(" ") + "..."
                    }}></p> */}
                <p>{moment(doc.date).fromNow()}</p>
            </li>
        )}
    </ul>

export default props =>
    <StorageContextConsumer>
        {context =>
            <List {...context} {...props}/>
        }
    </StorageContextConsumer>