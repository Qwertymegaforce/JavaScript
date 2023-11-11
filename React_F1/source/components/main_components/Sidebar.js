import React from "react";


export default function Sidebar(props){
    function choseCity(){
        console.log('Working');
    }

    let renderCity = []

    for(let item in props.cities){
        renderCity.push(<li onClick={() => props.toggle(item)}>{props.cities[`${item}`]}</li>)
    }

    return (

        <div className="div--sidebar">
            <ul className="ul--city_list">
                {renderCity}
            </ul>
        </div>
    );
};