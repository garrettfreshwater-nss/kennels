import React from "react"
import "./animal/Animals.css"
import "./Kennel.css"
import "./location/Locations.css"
import "./customer/Customers.css"
import "./employee/Employees.css"
import LocationList from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import EmployeeList from "./employee/EmployeeList";
import { AnimalProvider } from "./animal/AnimalProvider";
import AnimalList from "./animal/AnimalList";
import CustomerList from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";


export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
        </article>


        <h2>Employee</h2>
        <article className="employees">
         <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>
        </article>

        <h2>Location</h2>
        <article className="locations">
         <LocationProvider> {/*invoking the componenet, not html here. */}
            <LocationList />
        </LocationProvider>
        </article>

        <h2>Customers</h2>
        <article className="customers">
         <CustomerProvider>
             <CustomerList />
         </CustomerProvider>
        </article>


        

    </>
)