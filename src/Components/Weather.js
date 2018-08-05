import React, {Component} from 'react';
import '../App.css';

class Weather extends Component{
    render(){
        // var rainyDay = new RainyDay(options);
        return(
            <div id='weather' className="Weather">
               {this.props.details.country && this.props.details.city && <p> {this.props.details.city} ,{this.props.details.country}</p>}
               {this.props.details.temperature && <p>Temperature: {this.props.details.temperature}</p>}
               {this.props.details.description && <p>Description: {this.props.details.description}</p>}              
               {this.props.details.humidity && <p>Humidity: {this.props.details.humidity}</p>}    
               {this.props.details.error && <p> {this.props.details.error}</p>}        
            </div>
        );
    }
};
export default Weather;

