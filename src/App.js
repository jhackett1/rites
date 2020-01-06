import React, { useState } from "react"
import { createGlobalStyle } from "styled-components"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { StorageContextProvider } from "./contexts/storageContext"
import Layout from "./components/Layout"

import MostRecent from "./pages/MostRecent"
import Doc from "./pages/Doc"
import New from "./pages/New"

const GlobalStyle = createGlobalStyle`
  @font-face{
      font-family: "Lora";
      src: url("/Lora-Regular.woff");
  }
  @font-face{
      font-family: "Lora";
      font-weight: bold;
      src: url("/Lora-Bold.woff");
  }
  @font-face{
      font-family: "Lora";
      font-style: italic;
      src: url("/Lora-Italic.woff");
  }
  @font-face{
      font-family: "Lora";
      font-weight: bold;
      font-style: italic;
      src: url("/Lora-BoldItalic.woff");
  }
  @font-face{
      font-family: "Open Sans";
      font-weight: light;
      src: url("/OpenSans-Light.woff");
  }
  *{
      font-family: Lora, serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  *::selection{
    background-color: #ADFEEA;
    opacity: 0.5;
  }
  body{
    transform: ${props => props.panelOpen ? "translateX(300px)" : ""};
    transition: transform 0.2s ease-out;
    color: #1C1C1C;
    /* @media (prefers-color-scheme: dark) {
      background-color: #1c1c1c;
      color: white !important;
    } */
  }

`

const App = () => {

  const [panelOpen, setPanelOpen ] = useState(false)

  return(
    <StorageContextProvider>
      <GlobalStyle panelOpen={panelOpen}/>
      <Router>
        <Layout
          panelOpen={panelOpen}
          setPanelOpen={setPanelOpen}
          >
          <Switch>
            <Route exact path="/" component={MostRecent}/>
            <Route path="/new" component={New}/>
            <Route path="/:id" component={Doc}/>
          </Switch>
        </Layout>
      </Router>
    </StorageContextProvider>
  )
}


export default App