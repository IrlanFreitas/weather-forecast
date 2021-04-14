import { useEffect } from 'react'
import FilterCities from '../components/FilterCities';
import { useIndex } from '../providers';
import { Container, Grid, Paper } from '@material-ui/core';

import { weather as weatherService } from '../services/api'
import Day from '../components/Day/Day';

import './style.css'
import GraphWeather from '../components/GraphWeather';


export default function Weather() {

    const { city, weather, setWeather } = useIndex()
    
    // const [weather, setWeather] = useState({})

    useEffect(() => {
        if (city.address !== "" && city.lat !== null && city.lat !== "") {
            weatherService(city, setWeather)
        }
    }, [setWeather, city])

    console.log(weather)
    // console.log(city)

    return (
        <Container fixed>
            <Paper className="container" elevation={3} >
            <Grid container justify="center" >
                <Grid item style={{paddingTop: 20}}>
                    <FilterCities />
                </Grid>
            </Grid>
            <Grid container justify="center" >
                <GraphWeather />
            </Grid>
            <Grid container justify="center" className="day" >
                {weather?.daily?.map(day =>
                    <Day day={day} />
                )}
            </Grid>
            </Paper>
        </Container>
    )
}
