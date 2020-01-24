import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider";
import CustomerList from "./customer/CustomerList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import EmployeeList from "./employee/EmployeeList";

export default (props) => {
    return (
        <>
        
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider> {/*!AnimalList component can access data from all three data providers in order to access the name property on both the customer and the location. */}
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the customers list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                {/* Render the employees list when http://localhost:3000/employees */}
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>  
        </>
    )
}