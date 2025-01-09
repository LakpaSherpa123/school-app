import React, { useEffect, useState } from 'react'
import {SchoolData} from '../types/school-data'
import { SchoolItem } from './school-item'


const fetchData = async () :Promise <SchoolData[]>=> {
    const response  = await fetch('/data/schools.json')
    const json = await response.json()

    return json
}

export const SchoolList = () => {
    const [schools, setSchools] = useState<SchoolData[]>([])

    useEffect(() => {
        fetchData().then(setSchools)
    }, [])                              // [] empty array - makes it run only 1 time, otherwise will run indefinitely


    return (
        <ol>
               {schools.map(school => (
                <SchoolItem school = {school} />
               ))}
        </ol>
    )

}
