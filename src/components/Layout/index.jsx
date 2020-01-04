import React, { useState } from "react"
import styled from "styled-components"
import Sidebar from "../Sidebar"

const Outer = styled.div`
  height: 100vh;
  width: calc(100vw + 300px);
  display: flex;
  transition: transform 0.5s ease-out;
  transform: ${props => props.panelOpen ? "translateX(0px)" : "translateX(-300px)"}
`

const Main = styled.main`
  position: relative;
  flex: 1;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 25px;
  max-width: 650px;
  width: 100%;
  @media screen and (min-width: 800px){
    padding: 60px 25px;
  }
  @media screen and (min-width: 1100px){
    padding: 100px 25px;
  }
`

const Layout = ({
    children
}) => {

  const [panelOpen, setPanelOpen] = useState(false)

  return(
    <Outer panelOpen={panelOpen}>
        <Sidebar/>
        <Main>
        <Container>
            <button onClick={()=> setPanelOpen(!panelOpen)}>Open recents</button>
            {children}
        </Container>
        </Main>
    </Outer>
  )
}

export default Layout