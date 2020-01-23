import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Locations.css"

export default () => {
    // const locations = useLocations() <--same thing as below, but diff.
    const { locations } = useContext(LocationContext)
    // LocationContext provides actual data and application component

    return (
        <div className="locations">
        {
            // locations.map( loc => Location(loc) />) how we use to do it
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
    )
}