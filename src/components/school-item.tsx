import React from "react";
import { SchoolData } from "../types/school-data";
import './school-item.css'

type SchoolItemProps = {
    school : SchoolData
    selectSchool: (school: SchoolData | null ) => void
}

export const SchoolItem = ({school, selectSchool} : SchoolItemProps) => {

   return (
    <tr>
        <td>{school.name}</td>
        <td>{school.average_student_gpa}</td>
        <td><button onClick ={
            () => {
                selectSchool(school)
            }
        }>Details</button></td>
    </tr>

   )
}

//    <li className='school-item'> {school.name} </li>