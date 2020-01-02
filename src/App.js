import React from "react"
import { StorageContextProvider } from "./contexts/storageContext"
import EditorView from "./components/EditorView"
import "./style.scss"

const App = () => 
  <StorageContextProvider>
    <div className="container">
      <EditorView/>
    </div>
  </StorageContextProvider>

export default App