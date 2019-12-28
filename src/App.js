import React, { useState } from 'react'

const App = () => {

  const [text, setText] = useState("")

  return (
    <div>

      {text}

      <textarea onChange={e => setText(e.target.value)}>{text}</textarea>
    </div>
  );
}

export default App