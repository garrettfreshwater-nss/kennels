import React, { useState, useEffect } from "react"

/*
    *The context is imported and used by individual components
    *that need data
    !!Create it, define it, what can other people use?
*/
export const AnimalContext = React.createContext() //every provider needs a context created.

/*
 This component establishes what data can be used.
 */
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([]) 
    //Animal is the name of the data in our application now.

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimal = animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => { //listens for state changes. If the state of this componenent changes, the use of
        getAnimals()
    }, [])

    useEffect(() => {
        console.log("****  Animal APPLICATION STATE CHANGED  ****")
        console.log(animals)
    }, [animals])

    return (
        <AnimalContext.Provider value={{  //
            animals, addAnimal
        }}>
            {props.children} 
        </AnimalContext.Provider>
    )
}