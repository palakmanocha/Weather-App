import React from 'react';
import '../App.css';

const Form = (props) => (
    <form className="Form" onSubmit={props.getWeather}> 
        <input placeholder="City" name="city" type="text"/>
        <input placeholder="Country" name="country" type="text"/> 
        <button className='btn-default'>Get Weather</button>
    </form>
)
 
export default Form 