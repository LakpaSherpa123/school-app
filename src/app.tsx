import React, {useState} from 'react'

import {SchoolList} from './components/school-list'


export const App =() => {
    // const[counter, setCounter] = useState(0)  //cuonter _ stateValue | setCounter updates counter

    // return <h1 onClick={() => setCounter(counter + 1)}> 
    //             Hello World! Counter : {counter}
    //         </h1>

    return <SchoolList />
} 
