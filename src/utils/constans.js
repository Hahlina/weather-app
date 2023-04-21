
export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
export const BASE_CITY = "Kyiv"
export const APP_LANGUAGE = "lang=ua"
export const  START_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${BASE_CITY}&units=metric&${APP_LANGUAGE}&appid=${API_KEY}`
export const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=`