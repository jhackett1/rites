import React from "react"
import { Editor } from "medium-draft"
import "medium-draft/lib/index.css"
import "./styles.scss"

const DraftEditor = ({
  value,
  onChange
}) =>
  <Editor
    editorState={value}
    onChange={onChange} 
    sideButtons={[]}
    toolbarConfig = {{
      inline: ['BOLD', 'ITALIC', 'UNDERLINE']
    }}
    blockButtons={[
      {
        label: 'H2',
        style: 'header-two',
        icon: 'header',
        description: 'Heading 2',
      },
      {
        label: 'H3',
        style: 'header-three',
        icon: 'header',
        description: 'Heading 3',
      }, 
      {
        label: 'UL',
        style: 'unordered-list-item',
        icon: 'list-ul',
        description: 'Unordered List',
      }, 
      {
        label: '“',
        style: 'blockquote',
        icon: 'quote-right',
        description: 'Blockquote',
      }
    ]}
    />

export default DraftEditor