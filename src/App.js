import React, { Component } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
import './App.css';

const API_KEY = '7b823f474cb3edef209281d4fe66987d';

class App extends Component {
  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
    showWeather:false
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if(data.message){
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:'Please enter valid credentials'
      });
    }
    else{  
      if(city && country){
        this.setState({
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description
        });
      }
    
      else{
        this.setState({
          temperature:undefined,
          city:undefined,
          country:undefined,
          humidity:undefined,
          description:undefined,
          error:'Please enter the required credentials'
        });
      }
    }
    this.state.showWeather=true;
  }

  render() {
    return (
      <div className = "App">
        <nav className='navbar-inverse'></nav>
        <div className= "main" >
          <Title />
          <Form getWeather={this.getWeather}/>
         {this.state.showWeather ? <Weather  details={this.state}/> : null} 
        </div>
      </div>
    );
  }
}

export default App;
