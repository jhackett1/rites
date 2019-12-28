import React, { useState, useEffect } from "react"

const ShortlistContext = React.createContext()

export const ShortlistContextProvider = ({
    children
}) => {

    const [ documents, setDocuments ] = useState([])

    // unbake
    useEffect(()=>{
        initialise()
    }, [])

    // bake
    useEffect(()=>{
        initialise()
    }, [documents])

    const initialise = () => {

    }

    return (
        <ShortlistContext.Provider
            value={{
                // shortlist: shortlist,
            }}
        >
            {children}
        </ShortlistContext.Provider>
    )
}

export const ShortlistContextConsumer = ShortlistContext.Consumer