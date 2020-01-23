import React, { useContext } from "react"
import Employee from "./Employee";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employees.css"

export default () => {
    // const locations = useLocations() <--same thing as below, but diff.
    const { employees } = useContext(EmployeeContext)
    // LocationContext provides actual data and application component

    return (
        <div className="employees">
        {
            // employees.map( loc => Location(loc) />) how we use to do it
            employees.map(emp => <Employee key={emp.id} employee={emp} />)
        }
        </div>
    )
}