import React from "react"
import styled from "styled-components"
import { StorageContextConsumer } from "../../contexts/storageContext"
import { Link } from "react-router-dom"
import moment from "moment"
import { convertFromRaw } from "draft-js"

const Ul = styled.ul`
    height: 100%;
    overflow: scroll;
`

const Li = styled.li`
    padding: 20px;
    display: block;
    position: relative;
`

const StyledLink = styled(Link)`
    color: #1c1c1c;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 3;
    }
`

const H2 = styled.h2`
    margin-top: 0px;
    margin-bottom: 5px;
`

const TimeAgo = styled.p`
    margin-top: 5px;
    opacity: 0.75;
    font-size: 0.9rem;
    &::first-letter{
        text-decoration: capitalize;
    }
`

const List = ({
    documents
}) => 
    <Ul>
        {documents
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(doc =>
            <Li 
                key={doc.id}
                onContextMenu={e => console.log(e)}
                >
                <StyledLink to={`/${doc.id}`}><H2>{doc.title}</H2></StyledLink>
                <p dangerouslySetInnerHTML={{
                    __html: convertFromRaw(doc.body)
                        .getPlainText()
                        .split(" ")
                        .slice(0, 20)
                        .join(" ") + "..."
                    }}></p>
                <TimeAgo>{moment(doc.date).fromNow()}</TimeAgo>
            </Li>
        )}
    </Ul>

export default props =>
    <StorageContextConsumer>
        {context =>
            <List {...context} {...props}/>
        }
    </StorageContextConsumer>