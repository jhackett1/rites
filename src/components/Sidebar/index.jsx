import React from "react"
import styled from "styled-components"
import List from "../DocumentList"
import { Link } from "react-router-dom"

const Outer = styled.aside`
    height: 100vh;
    border-right: 1px solid #1c1c1c;
    width: 300px;
    position: absolute;
    left: -300px;
`

const NewButton = styled(Link)`
    width: 100%;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-weight: light;
    font-size: 0.9rem;
    padding: 20px;
    background: #1c1c1c;
    display: block;
    color: white;
    text-decoration: none;
    letter-spacing: 1px;
    &:hover{
      filter: brightness(0.9)
    }
    &:focus{
        outline: 2px solid #ADFEEA;
    }
`

const Sidebar = ({
    panelOpen
}) => {
    return(
        <Outer 
            aria-hidden={!panelOpen}
        >
            <NewButton to="/new">New</NewButton>
            <List/>
        </Outer>
    )

}

export default Sidebar