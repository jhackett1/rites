import React, { useState, useRef } from "react"

const TitleEditor = ({
    onChange,
    html
}) => {

    const [lastHtml, setLastHtml] = useState("")
    const instance = useRef(null)

    const emitChange = () => {
        const html = instance.current.innerHTML
        if (onChange && html !== lastHtml) {
            onChange({
                target: {
                    value: html
                }
            })
        }
        setLastHtml(html)
    }
    
    return(
        <div 
            onInput={emitChange} 
            onBlur={emitChange}
            ref={instance}
            contentEditable
            dangerouslySetInnerHTML={{__html: html}}
            >
         </div>
    )
}

export default TitleEditor