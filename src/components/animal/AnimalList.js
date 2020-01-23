import React, { useContext } from "react"
import Animal from "./Animal";
import { AnimalContext } from "./AnimalProvider";
import "./Animals.css"

export default () => {
    // const locations = useLocations() <--same thing as below, but diff.
    const { animals } = useContext(AnimalContext)
    // LocationContext provides actual data and application component

    return (
        <div className="animals">
        {
            // Animals.map( loc => Location(loc) />) how we use to do it
            animals.map(ani => <Animal key={ani.id} animal={ani} />)
        }
        </div>
    )
}