import React from "react"
import { StorageContextProvider } from "./contexts/storageContext"
import EditorView from "./components/EditorView"

const App = () => 
  <StorageContextProvider>
    <EditorView/>
  </StorageContextProvider>

export default App