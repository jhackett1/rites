import React, { useMemo, useCallback } from "react"
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from "slate-react"
// import { withHistory } from "slate-history"
import isHotkey from 'is-hotkey'
import { withShortcuts } from "./markdown-shortcuts"
import { HOTKEYS, Leaf, toggleMark } from "./keyboard-shortcuts"

const Element = ({ attributes, children, element }) => {
    switch (element.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'heading-three':
        return <h3 {...attributes}>{children}</h3>
      case 'heading-four':
        return <h4 {...attributes}>{children}</h4>
      case 'heading-five':
        return <h5 {...attributes}>{children}</h5>
      case 'heading-six':
        return <h6 {...attributes}>{children}</h6>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      default:
        return <p {...attributes}>{children}</p>
    }
}

const SlateEditor = ({
    value,
    onChange
}) => {

    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const renderElement = useCallback(props => <Element {...props} />, [])
    const editor = useMemo(() => withShortcuts(withReact(createEditor())), [])

    return(
        <Slate 
            editor={editor} 
            value={value} 
            onChange={onChange} 
            >
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Write a story..."
                onKeyDown={event => {
                    for (const hotkey in HOTKEYS) {
                      if (isHotkey(hotkey, event)) {
                        event.preventDefault()
                        const mark = HOTKEYS[hotkey]
                        toggleMark(editor, mark)
                    }
                }}}
                />
        </Slate>
    )
}

export default SlateEditor