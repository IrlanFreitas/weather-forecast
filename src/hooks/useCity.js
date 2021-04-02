import { useState, useEffect } from 'react'

export default function useCityHook() {

    const [city, setCity] = useState({
        address: '',
        lat: null,
        lng: null
    })

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

    return {
        city,
        setCity
    }
}
