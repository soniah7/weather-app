import React, {Component} from "react"
import axios from "axios"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCloud, faCloudRain, faSnowflake, faSun, faWind, faCloudSun} from "@fortawesome/free-solid-svg-icons"
import './index.scss'

export default class WeeklyWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weeklyData:[]
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
            const location = this.props.location;
            const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast',
                {params: {q: location.city, appid: '89048c50960e64dc0c0190da242638db'}});
            let weekDays=['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
            const weeklyData = response.data.list.filter(
                (element, index)=> {
                if([7, 15, 23, 31, 39].includes(index)) {
                    return true;
                }
                return false;
            }).map((element, index)=>{
                return {day: weekDays[new Date(element.dt_txt).getDay()],
                    degree: parseFloat((element.main.temp-273.15).toFixed(1)),
                    condition: element.weather[0].main}
            });
            this.setState({weeklyData});
        }
    }

    generateWeatherIcon = (condition) => {
        switch (condition) {
            case 'Rain':
                return faCloudRain;
            case 'Clear':
                return faSun;
            case 'Clouds':
                return faCloud;
            case 'Snow':
                return faSnowflake;
            case 'Wind':
                return faWind;
            default:
                return faCloudSun;
        }
    }

    render() {
        return (
            <ul>
                {this.state.weeklyData.map((dailyData) => {
                    return (
                        <li key={dailyData.day}>
                            <div className="weekday">{dailyData.day}</div>
                            <FontAwesomeIcon className="icon" icon={this.generateWeatherIcon(dailyData.condition)}/>
                            <div className="unit">{dailyData.degree} °</div>
                            <div className="condition">{dailyData.condition.toUpperCase()}</div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}