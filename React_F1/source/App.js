import React from "react";
import Sidebar from "./components/main_components/Sidebar";
import Main from "./components/main_components/Main";

export default function App(){



    let [searchedCity, setSearchedCity] = React.useState('');


    // Можно добавить запрос к списку городов при желании
    let cites = {
        "My_city" : 'Мой город',
        "New York" : 'Нью-Йорк',
        "London" : 'Лондон',
        "Beijing" : 'Пекин',
        "Moscow" : 'Москва',
    }


    function changeCity(city){
        if (city === "My_city"){
            setSearchedCity(prevCity => '')
        } else {
            setSearchedCity(city)
        }
    }

    return (
        <>
           <Main city={searchedCity}/>
           <Sidebar toggle={changeCity} cities = {cites}/>
        </>
    );
}