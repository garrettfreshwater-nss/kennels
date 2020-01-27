import React, { useContext } from "react"
import Customer from "./Customer";
import { CustomerContext } from "./CustomerProvider";
import "./Customers.css"

export default () => {
    // const locations = useLocations() <--same thing as below, but diff.
    const { customers } = useContext(CustomerContext)
    // LocationContext provides actual data and application component

    return (
        <div className="customers">
        <h1>Customers</h1>
        {
            // customers.map( loc => Location(loc) />) how we use to do it
            customers.map(cust => <Customer key={cust.id} customer={cust} />)
        }
        </div>
    )
}