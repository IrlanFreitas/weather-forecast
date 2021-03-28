import React, { useState, useContext, useEffect, createContext } from 'react'

export const CityContext = createContext({});

export const CityProvider = ({ children }) => {

    const [city, setCity] = useState({
        address: '',
        lat: null,
        lng: null
    })

    useEffect(() => {

        const cityLocal = localStorage.getItem("city");

        if (cityLocal) {
            setCity(JSON.parse(cityLocal))
        } else {
            setCity({
                address: '',
                lat: null,
                lng: null
            })
        }

    }, [])

    return (
        <CityContext.Provider value={{ city, setCity }} >
            {children}
        </CityContext.Provider>
    )
}

export const useCity = () => useContext(CityContext)