import react from 'react';

const api = process.env.REACT_APP_API_KEY;
const baseurl = "https://api.openweathermap.org/data/2.5/";
const iconurl = "http://openweathermap.org/img/wn/"

class Weather extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: {
                temp: {
                    current: '',
                    feels: ''
                },
                desc: '',
                icon: '',
                location: {
                    city: '',
                    country: ''
                }
            },
            query: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // fetch weather data from api here
        fetch(`${baseurl}weather?q=mississauga&units=metric&appid=${api}`)
            .then(res => res.json())
            .then(data => this.setState({
                weather: {
                    temp: {
                        current: data.main.temp,
                        feels: data.main.feels_like
                    },
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    location: {
                        city: data.name,
                        country: data.sys.country
                    }
                }
            }))
            .catch((err) => {
                console.log(err);
            });
    }

    handleChange(e) {
        if( e.key === "Enter"){
            let query = e.target.value; 
            fetch(`${baseurl}weather?q=${query}&units=metric&appid=${api}`)
            .then(res => res.json())
            .then(data => this.setState({
                weather: {
                    temp: {
                        current: data.main.temp,
                        feels: data.main.feels_like
                    },
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    location: {
                        city: data.name,
                        country: data.sys.country
                    }
                }
            }))
            .catch((err) => {
                console.log(err);
            });
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className="weather-container">

                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search for a city..."
                      onKeyPress={this.handleChange} value={this.handleChange.value} />
                </div>

                <div className="location-box">
                    <div className="location"> {this.state.weather.location.city}, {this.state.weather.location.country}</div>
                </div>

                <div className="weather-box">
                    <div className="temp">{Math.round(this.state.weather.temp.current)} °C</div>
                    <div className="icon"><img id="wicon" src={iconurl + this.state.weather.icon + "@2x.png"} alt="Weather icon" /></div>
                    <div className="weather">{this.state.weather.desc}</div>
                    <div className="feels"> Feels like: {Math.round(this.state.weather.temp.feels)} °C</div>
                </div>

                
            </div>
        )
    }
}

export default Weather;