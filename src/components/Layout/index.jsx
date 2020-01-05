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
  margin: 50px auto;
  padding: 20px;
  max-width: 650px;
  width: 100%;
  @media screen and (min-width: 600px){
    margin: 75px auto 50px auto;
  }
  @media screen and (min-width: 1000px){
    margin: 120px auto 50px auto;
  }
`

const RecentsButton = styled.button`
    font-family: "Open Sans", sans-serif;
    background: none;
    border: none;
    font-weight: light;
    font-size: 0.9rem;
    text-transform: uppercase;
    position: absolute;
    left: 20px;
    top: 20px;
    cursor: pointer;
    letter-spacing: 1px;
    z-index: 2;
    &:focus{
        background: #ADFEEA;
        outline: 2px solid #ADFEEA;
    }
`

const Overlay = styled.div`
  background: white;
  opacity: 0.75;
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
        <Container>
  <RecentsButton onClick={()=> setPanelOpen(!panelOpen)}>{panelOpen ? "Close recents" : "Recents"}</RecentsButton>
            {children}
        </Container>
        {panelOpen && <Overlay onClick={()=> setPanelOpen(false)}/>}
        </Main>
    </Outer>
  )
}

export default Layout