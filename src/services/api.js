import axios from 'axios'
// import city from './public/data/city.json';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org',
    timeout: 20000
})

export const weather = async (latLong, setData) => {

    return api.get('/data/2.5/onecall', {
        params: {
            lat: latLong.lat,
            lon: latLong.lng,
            appid: process.env.REACT_APP_API_KEY_WEATHER,
            exclude: 'minutely,hourly,alerts',
            units: 'metric',
            lang: 'pt_br',
        }
    }).then(res => setData(res.data))
        .catch(error => {
            console.log('Error na api weather: ', error);
        })
}

export const cities = (setData) => {
    return fetch('data.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(async res => setData(await res.json()))
        .catch(error => {
            console.log('Error em consumir os dados de cities: ', error);
        })
}