import React from "react";
import Forecast from "../the_forecast_components/Forecast";


export default function Main(props){

    console.log(props);

    let [forecast, setForecast] = React.useState();

    let date = new Date();
    let clear_forecast = [];




    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, ()=>{}, {
            enableHighAccuracy: true
        })
    
        async function success({coords}){
            const { latitude, longitude } = coords
            const position = [latitude, longitude]
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=24f655ec2df34f52d32a1adb6cc0ea0e&lang=ru&units=metric` + (props.city === ''? `&lat=${position[0]}&lon=${position[1]}` : `&q=${props.city}`))
            const data = await response.json()
            const dayresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=24f655ec2df34f52d32a1adb6cc0ea0e&lang=ru&units=metric` + (props.city === ''? `&lat=${position[0]}&lon=${position[1]}` : `&q=${props.city}`))
            const daydata = await dayresponse.json()
            setForecast(prevForecast => {
                return {
                    today: daydata,
                    future: data
                }
            })
        }

    }, [props.city])

    if(forecast){
        // убираем из запроса сегодняшний день, а из оставшихся дней создаем компонент, куда передаем необходимые параметры
        clear_forecast = forecast.future.list.filter(item => parseInt(item.dt_txt.slice(8,11)) !== date.getDate()).map(item => <Forecast temp = {Math.floor(item.main.temp)} textData = {item.dt_txt} main={item.weather[0].main} description={item.weather[0].description}/>) 
        console.log(clear_forecast);
        console.log(forecast);
    }



    return (
        <div className="div--main">
            <div className="div--bg"></div>

            {forecast && 
            <>
            <div className="div--today">
                <h1 >{forecast.today.name}</h1>
                <div className="div--temperature-today">
                    <img src={`../../images/white/${forecast.today.weather[0].main}.png`}/>
                    <div>
                        <h1 className="h1--temperature">{Math.floor(forecast.today.main.temp) + "°C"}</h1>
                        <h1 className="h1--description">{forecast.today.weather[0].description}</h1>
                    </div>
                </div>
            </div>

            <div className="div--future" style={{gridTemplateColumns: `repeat(${clear_forecast.length}, 200px)`}}>
                {clear_forecast}
            </div>

            </>
            }
        </div>
    )
}