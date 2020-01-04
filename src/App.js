import React from "react"
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
  *{
      font-family: Lora, serif;
      color: #1C1C1C;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body{
    overflow: hidden;
  }
`

const App = () => 
  <StorageContextProvider>
    <GlobalStyle/>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={MostRecent}/>
          <Route path="/new" component={New}/>
          <Route path="/:id" component={Doc}/>
        </Switch>
      </Layout>
    </Router>
  </StorageContextProvider>

export default App