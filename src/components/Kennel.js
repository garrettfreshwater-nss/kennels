import React from "react"
import Animal from "./animal/Animal"
import Customer from "./customer/Customer"
import Employee from "./employee/Employee"
import Location from "./location/Location"
import "./animal/Animals.css"
import "./Kennel.css"
import "./location/Location.css"
import "./customer/Customers.css"
import "./employee/Employees.css"
import LocationList from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";

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
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Emoployees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>

        <h2>Location</h2>
        <article className="locations">
         <LocationProvider> {/*invoking the componenet, not html here. */}
            <LocationList />
        </LocationProvider>
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>

        

    </>
)