import { useState, useEffect } from 'react'
import FilterCities from '../components/FilterCities';
import { useCity } from '../providers/city';

import { weather as weatherService } from '../services/api'

export default function Weather() {

    const [weather, setWeather] = useState({})
    
    const { city } = useCity()

    useEffect(() => {
        if (city.address !== "" && city.lat !== null && city.lat !== "") {
            weatherService(city, setWeather)
        }
    }, [setWeather, city])

    console.log(weather)
    // console.log(city)

    return (
        <FilterCities />
    )
}
