import React, { useState } from "react"
import "medium-editor/dist/css/medium-editor.css"
import Editor from "react-medium-editor"

const App = () => {
  const [text, setText] = useState("Test test")
  return (
    <div>
      {text}
      <Editor
        text={text}
        onChange={text => setText(text)}
        />
    </div>
  )
}

export default App