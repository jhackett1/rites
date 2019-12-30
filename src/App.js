import React from "react"
import { StorageContextProvider } from "./contexts/storageContext"
import Editor from "./components/Editor"

const App = () => 
  <StorageContextProvider>
    <Editor/>
  </StorageContextProvider>

export default App