import React, {Component} from 'react';
import axios from 'axios'

class WeatherToronto extends Component {

    //Define state default values
    state = {
        forecast: []
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=6508c02ccc05f225734d2568a4c6dadd')
            .then(res => {
                console.log(res.data);
                const forecast = res.data;
                this.setState({forecast});
            })
    }

    render() {
        return (
            <table style={{backgroundColor: "grey", width:"100%"}}>
                <h1 style={{backgroundColor: "pink", borderStyle:"solid", textAlign: "center"}}>Weather</h1>
                <ul style={{backgroundColor: "lightblue", borderStyle:"solid", width:"96,5%"}} >
                    <tr><th style={{borderStyle:"dashed"}}>Hi</th></tr>

                    <td style={{textAlign: "right"}}><b>
                        <tr>City: </tr>
                        <tr>Country: </tr>
                        <tr>Wind speed: </tr>
                        <tr>Temperature: </tr>
                        <tr>Feels like: </tr>
                        <tr>Weather: </tr>
                        <tr>Description: </tr>
                    </b></td>
                    <td><tr>{this.state.forecast.name}</tr>
                        <tr>{this.state.forecast.base}</tr>
                        <tr>{this.state.forecast.base}</tr>
                        <tr>{this.state.forecast.id}</tr>

                    </td>
                </ul>)
            </table>

        );
    }
}

export default WeatherToronto;