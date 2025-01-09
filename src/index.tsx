import React from 'react'
import {App} from './app'


import { createRoot } from 'react-dom/client'    //connects react to the webpage with DOM

const root = createRoot(  
    document.getElementById('root')!     // creates a component 
)

root.render(<App />)                    //render the component