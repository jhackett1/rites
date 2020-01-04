import React, { useState } from "react"
import styled from "styled-components"
import Sidebar from "../Sidebar"

const Outer = styled.div`
  height: 100vh;
  width: calc(100vw + 300px);
  display: flex;
  transition: transform 0.2s ease-out;
  transform: ${props => props.panelOpen ? "translateX(0px)" : "translateX(-300px)"};
`

const Main = styled.main`
  position: relative;
  flex: 1;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 45px 35px;
  max-width: 650px;
  width: 100%;
  @media screen and (min-width: 800px){
    padding: 60px 25px;
  }
  @media screen and (min-width: 1000px){
    padding: 100px 25px;
  }
`

const RecentsButton = styled.button`
    font-family: "Open Sans", sans-serif;
    border: none;
    font-weight: light;
    font-size: 0.9rem;
    text-transform: uppercase;
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
    letter-spacing: 1px;
`

const Overlay = styled.div`
  background: white;
  opacity: 0.5;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`

const Layout = ({
    children
}) => {

  const [panelOpen, setPanelOpen] = useState(false)

  return(
    <Outer panelOpen={panelOpen}>
        <Sidebar panelOpen={panelOpen}/>
        <Main>
        {panelOpen && <Overlay onClick={()=> setPanelOpen(false)}/>}
        <Container>
            <RecentsButton onClick={()=> setPanelOpen(!panelOpen)}>Recents</RecentsButton>
            {children}
        </Container>
        </Main>
    </Outer>
  )
}

export default Layout