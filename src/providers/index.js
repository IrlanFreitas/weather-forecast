import React, { useState, useContext, createContext } from 'react'
// import { weather as weatherService } from '../services/api'

export const IndexContext = createContext({});

export const IndexProvider = ({ children }) => {

    const [city, setCity] = useState({
        address: '',
        lat: null,
        lng: null
    })

    const [weather, setWeather] = useState({})

    // useEffect(() => {

    //     const cityLocal = localStorage.getItem("city");

    //     if (cityLocal) {
    //         setCity(JSON.parse(cityLocal))
    //     } else {
    //         setCity({
    //             address: '',
    //             lat: null,
    //             lng: null
    //         })
    //     }

    // }, [])

    // const { city, setCity } = useCityHook()

    return (
        <IndexContext.Provider value={{
            city, setCity,
            weather, setWeather
        }} >
            { children}
        </IndexContext.Provider >
    )
}

export const useIndex = () => useContext(IndexContext)
