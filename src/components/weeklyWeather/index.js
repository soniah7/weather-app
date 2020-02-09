import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faCloudRain, faCloudSun, faSun, faWind} from "@fortawesome/free-solid-svg-icons";
import React, {Component} from "react";
import './index.scss'

export default class WeeklyWeather extends Component {
    componentWillMount() {
        // TODO make request using value of location instead of hardcoded data
        const location = this.props.location;
        const weeklyData = [ //注意这里不是{!!!!!
            {day: 'Monday', degree: 9, condition: 'raining'},
            {day: 'Tuesday', degree: 10, condition: 'sunny'},
            {day: 'Wednesday', degree: 11, condition: 'cloudy'},
            {day: 'Thursday', degree: 12, condition: 'sunny to cloudy'},
            {day: 'Friday', degree: 13, condition: 'windy'}
        ];
        this.setState({weeklyData});
        // this.setState(weeklyData);//不要忘了加大括号！！！
    }

    generateWeatherIcon = (condition) => {
        switch (condition) {
            case 'raining':
                return faCloudRain;
            case 'sunny':
                return faSun;
            case 'cloudy':
                return faCloud;
            case 'sunny to cloudy':
                return faCloudSun;
            case 'windy':
                return faWind;
        }
    }

    render() {
        return (
            <ul>
                {this.state.weeklyData.map((dailyData) => {
                    return (
                        <li>
                            <div className="weekday">{dailyData.day.substr(0, 3).toUpperCase()}</div>
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