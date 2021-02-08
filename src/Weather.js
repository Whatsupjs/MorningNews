import react from 'react';

class Weather extends react.Component {

    constructor(props){
        super(props);
        this.state= {
            location: {
                city: '',
                country: ''
            },
            weather: {
                temp: {
                    current: '',
                    min: '',
                    max: '',
                },
                weather: ''
            }
        } 
    }

    componentDidMount() {
        
        console.log("weather is mounted");
    }

    render() {
        return (
            <div className="weather-container">

                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search for a city..." />
                </div>

                <div className="location-box">
                    <div className="location"> Mississauga, Canada</div>
                </div>

                <div className="weather-box">
                    <div className="temp">14 °C</div>
                    <div className="weather">cloudy</div>
                    <div className="temp-minmax"> 15/16 °C</div>
                </div>
            </div>
        );
    }
}

export default Weather;