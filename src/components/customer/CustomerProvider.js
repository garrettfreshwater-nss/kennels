import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data

    !!Create it, define it, what can other people use?
*/
export const CustomerContext = React.createContext() //every provider needs a context created.

/*
 This component establishes what data can be used.
 */
export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([]) 
    //Customer is the name of the data in our application now.

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomers)
    }

    const addCustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }

    /*
        Load all Customers when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => { //listens for state changes. If the state of this componenent changes, the use of
        getCustomers()
    }, [])

    useEffect(() => {
        console.log("****  Customer APPLICATION STATE CHANGED  ****")
        console.log(customers)
    }, [customers])

    return (
        <CustomerContext.Provider value={{  //
            customers, addCustomer
        }}>
            {props.children} 
        </CustomerContext.Provider>
    )
}