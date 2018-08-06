import React from 'react';
import '../App.css';

const Weather = (props) => (
    <div id='weather' className="Weather">
        {props.details.country && props.details.city && <p> {props.details.city} ,{props.details.country}</p>}
        {props.details.temperature && <p>Temperature: {props.details.temperature}</p>}
        {props.details.description && <p>Description: {props.details.description}</p>}              
        {props.details.humidity && <p>Humidity: {props.details.humidity}</p>}    
        {props.details.error && <p> {props.details.error}</p>}        
    </div>
)
export default Weather;

