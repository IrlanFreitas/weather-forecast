import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})

api.interceptors.request.use(config => {
    config.params = {
        appid: process.env.REACT_APP_API_KEY,
        units: 'metric',
        lang: 'pt_br'
    }
    return config
})

export const weather = async (cityName, setData) => {
    // return api.get(`?q=${cityName}, ${stateCode}, ${countryCode}`)
    return api.get(`?q=${'London'}`)
        .then(res => setData(res.data))
        .catch(error => {
            console.log('Error na api weather: ', error);
        })
}