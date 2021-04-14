import React from 'react'
import { Line } from '@reactchartjs/react-chart.js';
import { extractTemperature } from '../utils/utils'

const data = {
    // labels: ['1', '2', '3', '4', '5', '6'],
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: false,
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            backgroundColor: 'rgb(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132)',
        },
    ],
}

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
    responsive: true,
    title: {
        display: true,
        text: "Temperatura"
    }
}

export default function GraphWeather() {

    return (
        <Line style={{width: '80%'}} data={data} options={options} />
    )
}