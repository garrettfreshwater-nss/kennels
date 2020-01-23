import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data

    !!Create it, define it, what can other people use?
*/
export const LocationContext = React.createContext() //every provider needs a context created.

/*
 This component establishes what data can be used.
 */
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([]) 
    //locations is the name of the data in our application now.

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => { //listens for state changes. If the state of this componenent changes, the use of
        
        getLocations()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [locations])

    return (
        <LocationContext.Provider value={{  //
            locations, addLocation
        }}>
            {props.children} 
        </LocationContext.Provider>
    )
}