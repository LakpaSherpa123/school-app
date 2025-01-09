import React from 'react'
import {App} from './app'

//@ts-expect-error
import { createRoot } from 'react-dom'    //connects react to the webpage with DOM

const root = createRoot(  
    document.getElementById('root')     // creates a component 
)

root.render(<App />)                    //render the component