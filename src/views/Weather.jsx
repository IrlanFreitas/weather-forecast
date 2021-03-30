import { useState, useEffect } from 'react'
import FilterCities from '../components/FilterCities';
import { useCity } from '../providers/city';
import { Container, Grid } from '@material-ui/core';

import { weather as weatherService } from '../services/api'
import Day from '../components/Day';

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
        <Container fixed>
            <Grid container justify="center" >
                <Grid item >
                    <FilterCities />
                </Grid>
            </Grid>
            <Grid container justify="center" >

            </Grid>
            <Grid container justify="center" style={{display: 'grid'}} >
                {/* {weather?.daily?.pop()} */}
                {weather?.daily?.map(day =>
                    <Day day={day} />
                )}
            </Grid>
        </Container>
    )
}
