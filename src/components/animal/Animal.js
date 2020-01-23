import React from "react"
import "./Animals.css"

export default ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <h4 className="animal__breed">{animal.breed}</h4>
        {/* <address className="animal__address">{animal.locationId}</address> */}
    </section>
)