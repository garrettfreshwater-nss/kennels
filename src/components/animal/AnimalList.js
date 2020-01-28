import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import Animal from "./Animal"
import "./Animals.css"

export default (props) => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    return (
        
        <div className="animals">
        <h1>Animals</h1>

        <button onClick={() => props.history.push("/animals/create")}>
                Make an Appointment
            </button>

            {animals.map(animal => {
                const owner = customers.find(c => c.id === animal.customerId)
                const clinic = locations.find(l => l.id === animal.locationId)

                return <Animal key={animal.id}
                            location={clinic}
                            customer={owner}
                            animal={animal} />
            })}
        
        </div>
    )
}