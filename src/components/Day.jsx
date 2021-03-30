import React from 'react'
import formatTime, { formatMonthDay } from '../utils/utils'

export default function Day({ day }) {

    return (
        <div key={day?.dt}>
            {formatTime(day?.dt, formatMonthDay)} |
            Temperatura {day?.temp?.day} |
            Clima {day?.weather[0]?.description} |
            Umidade {day?.humidity} %
        </div>
    )
}