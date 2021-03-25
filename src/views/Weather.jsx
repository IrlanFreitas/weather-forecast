import React, { useState, useEffect } from 'react'
import { weather } from '../services/api'

export default function Weather() {

    const [data, setData] = useState({})

    useEffect(() => {
        weather('London', setData)
        
    }, [setData])
    
    console.log(data)

    return (
        <div>
            {data.base}
        </div>
    )
}
