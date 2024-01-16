import React, {useState} from react;

const Weather = ()=> {

    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async()=> {
        try{
            const resp = fetch(`${process.env.OPEN_WEATHER_URL}${city}&units=metric&appid=${API_KEY}`
            );
            if(!resp.ok){
                console.log(resp.data);
                setWeatherData(resp.data);
            } else {
                console.error(`Unexpected error: ${data.message}`)
            }
        } catch (error) {
            console.error(error);
        }
    };


}

export default Weather;