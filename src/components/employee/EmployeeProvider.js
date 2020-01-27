import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data

    !!Create it, define it, what can other people use?
*/

export const EmployeeContext = React.createContext() //every provider needs a context created.

/*
 This component establishes what data can be used.
 */
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])
    //employee is the name of the data in our application now.

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(setEmployees)
    }

    const addEmployee = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */

    useEffect(() => { //listens for state changes. If the state of this componenent changes, the use of
        getEmployees()
    }, [])

    useEffect(() => {
        console.log("****  EMPLOYEE APPLICATION STATE CHANGED  ****")
        console.log(employees)
    }, [employees])

    return (
        <EmployeeContext.Provider value={{
            employees, addEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}