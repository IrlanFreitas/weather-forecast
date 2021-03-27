import { useState, useEffect } from 'react'
import FilterCities from '../components/FilterCities';
// import { weather as weatherService } from '../services/api'

export default function Weather() {

    const [weather, setWeather] = useState({})
    // const [cities, setCities] = useState([])

    useEffect(() => {
        // weatherService('San Diego, CA, EUA', setWeather)
    }, [setWeather])

    // useEffect(() => {
    //     citiesService(setCities)
    // }, [setCities])

    console.log(weather)
    // console.log(cities)

    return (
        <FilterCities />
    )
}
