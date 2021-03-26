import axios from 'axios'
// import city from './public/data/city.json';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})

api.interceptors.request.use(config => {
    config.params = {
        appid: process.env.REACT_APP_API_KEY_WEATHER,
        units: 'metric',
        lang: 'pt_br'
    }
    return config
})

export const weather = async (cityName, setData) => {
    // return api.get(`?q=${cityName}, ${stateCode}, ${countryCode}`)
    return api.get(`?q=${cityName}`)
        .then(res => setData(res.data))
        .catch(error => {
            console.log('Error na api weather: ', error);
        })
}

export const cities = (setData) => {
    return fetch('data.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })  
        .then(async res => setData(await res.json()))
        .catch(error => {
            console.log('Error em consumir os dados de cities: ', error);
        })
 }