import React, {Component} from 'react';
import '../App.css';

class Title extends Component{
    render(){
        return(
            <div className="Title">
               <b><h1>Weather Finder</h1></b>
                <p>Temperature, Conditions and more...</p>
            </div>
        );
    }
};
export default Title;

