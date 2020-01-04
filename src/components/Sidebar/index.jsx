import React from "react"
import styled from "styled-components"
import List from "../List"
import { Link } from "react-router-dom"

const Outer = styled.aside`
    height: 100%;
    border-right: 1px solid #1c1c1c;
    width: 300px;
`

const Sidebar = () =>
    <Outer>
        <Link to="/new">New document</Link>
        <List/>
    </Outer>

export default Sidebar