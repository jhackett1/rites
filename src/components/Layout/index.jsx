import React from "react"
import styled from "styled-components"
import Sidebar from "../Sidebar"

const Container = styled.main`
  margin: 0px auto;
  padding: 0px 20px;
  max-width: 650px;
  width: 100%;
  min-height: 100vh;
`

const RecentsButton = styled.button`
    font-family: "Open Sans", sans-serif;
    background: none;
    border: none;
    font-weight: light;
    font-size: 0.9rem;
    text-transform: uppercase;
    position: sticky;
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
  height: 100vh;
  z-index: 2;
`

const Layout = ({
    panelOpen,
    setPanelOpen,
    children
}) => {

  return(
    <>
      <Sidebar panelOpen={panelOpen}/>
      <RecentsButton onClick={()=> setPanelOpen(!panelOpen)}>{panelOpen ? "Close recents" : "Recents"}</RecentsButton>
      <Container>
          {children}
      </Container>
      {panelOpen && <Overlay onClick={()=> setPanelOpen(false)}/>}
    </>
  )
}

export default Layout