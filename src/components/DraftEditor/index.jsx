import React from 'react';
import { Editor, createEditorState } from 'medium-draft';
import 'medium-draft/lib/index.css';
import { BLOCK_BUTTONS } from 'medium-draft';

class DraftEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: createEditorState()
    }

    this.onChange = (editorState) => {
      this.setState({ editorState })
    }

    this.refsEditor = React.createRef()

  }

  componentDidMount() {
    this.refsEditor.current.focus()
  }

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        ref={this.refsEditor}
        editorState={editorState}
        sideButtons={[]}
        onChange={this.onChange} 
        toolbarConfig = {{
          block: ['unordered-list-item', 'header-one', 'header-three'],
          inline: ['BOLD', 'UNDERLINE', 'ITALIC'],
        }}
        />
    )
  }
}

export default DraftEditor