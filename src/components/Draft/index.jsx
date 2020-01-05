import React from "react"
import Editor from "draft-js-plugins-editor"
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin"
import "draft-js-inline-toolbar-plugin/lib/plugin.css"
import styled from "styled-components"
import createMarkdownShortcutsPlugin from "draft-js-md-keyboard-plugin"

const inlineToolbarPlugin = createInlineToolbarPlugin()
const { InlineToolbar } = inlineToolbarPlugin

const StyledEditor = styled(Editor)`
    /* font-size: 1.1rem; */
    &:focus{
        outline: none;
    }
    p{
        margin-bottom: 25px;
    }
    ul, ol{
        margin-left: 25px;
        margin-bottom: 25px;
    }
    li{
        padding-left: 5px;
        margin-bottom: 10px;
    }
`

const Draft = ({
    value,
    onChange
}) =>
    <>
        <StyledEditor 
            editorState={value} 
            onChange={onChange} 
            plugins={[
                inlineToolbarPlugin,
                createMarkdownShortcutsPlugin()
            ]}
            />
        <InlineToolbar/>
    </>

export default Draft