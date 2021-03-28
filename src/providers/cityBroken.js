// import React, { useState, useEffect } from 'react'

// export const CityContext = createContext({});

// export const CityProvider = (props) => {

//     const [city, setCity] = useState({
//         address: '',
//         lat: null,
//         lng: null
//     })

//     useEffect(() => {

//         const cityLocal = localStorage.getItem("city");

//         if (cityLocal) {
//             setCity(JSON.parse(cityLocal))
//         } else {
//             setCity({
//                 address: '',
//                 lat: null,
//                 lng: null
//             })
//         }

//     }, [])

//     return <> </>
// }

// export const useCity = () => useContext(CityContext)