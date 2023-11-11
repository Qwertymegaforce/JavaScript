import React from "react";


export default function Forecast(props){
    const months = {
        '1' : 'ЯНВ',
        '2' : 'ФЕВ',
        '3' : 'МАР',
        '4' : 'АПР',
        '5' : 'МАЙ',
        '6' : 'ИЮН',
        '7' : 'ИЮЛ',
        '8' : 'АВГ',
        '9' : 'СЕН',
        '10' : 'ОКТ',
        '11' : 'НОЯ',
        '12' : 'ДЕК',
    }
    return (
        <div className="div--future-day-forecast">
            <div className="div--short--desc">
                <h1>{props.temp + '°C'}</h1>
                <h6>{props.description}</h6>
            </div>

            <img src={`../../images/gray/${props.main}.png`}/>
            
            <h3 className="h3--time">{props.textData.slice(11,16)}</h3>

            <div className="div--date-future">
                <h1>{props.textData.slice(8, 11)}</h1>
                <h2>{months[props.textData.slice(5,7)]}</h2>
            </div>

        </div>
    );
}