import React from 'react'
import formatTime, { formatMonthDay } from '../../utils/utils'
import { Paper } from '@material-ui/core';
import './style.css'

export default function Day({ day }) {

    return (
        <Paper elevation={3} className="day" key={day?.dt}>
            <p>{formatTime(day?.dt, formatMonthDay)} </p>
            <p>Temperatura {day?.temp?.day} </p>
            <p>Clima {day?.weather[0]?.description} </p>
            {<img width="100" src={`http://openweathermap.org/img/wn/${day?.weather[0]?.icon}@2x.png`}
                alt="Icone relacionado ao clima" />}
            <p style={{textAlign: 'center'}}>Umidade <br />{day?.humidity}%</p>
        </Paper>
    )
}