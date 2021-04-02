import React, { useState, useContext, useEffect, createContext } from 'react'
import { weather as weatherService } from '../services/api'

export default function useWeather() {

    const [weather, setWeather] = useState({})

    // useEffect(() => {
    //     if (city.address !== "" && city.lat !== null && city.lat !== "") {
    //         weatherService(city, setWeather)
    //     }
    // }, [setWeather, city])


    return (
        <div>

        </div>
    )
}
