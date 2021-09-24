/* import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c3dcd0e14d9fdfb1ff42e996f4f1efa1";

export const fetchWeather = async (query) => {
    const {response} = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_KEY,

        }
    });

    return response;
} */