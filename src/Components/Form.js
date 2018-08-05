import React, {Component} from 'react';
import '../App.css';

class Form extends Component{
    render(){
        return(
            <form className="Form" onSubmit={this.props.getWeather}> 
                <input placeholder="City" name="city" type="text"/>
                <input placeholder="Country" name="country" type="text"/> 
                <button className='btn-default'>Get Weather</button>
            </form>
        )
    }
};
export default Form 