import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import { StorageContextProvider } from "./contexts/storageContext"
import EditorView from "./components/EditorView"
import "./style.scss"

const App = () => 
  <StorageContextProvider>
    <Router>
      <div className="container">
        <Route exact path="/" component={EditorView}/>
        <Route path="/:id" component={EditorView}/>
        <Route path="/new" component={}/>
      </div>
    </Router>
  </StorageContextProvider>

export default App