import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faCloudRain, faSnowflake, faSun, faWind} from "@fortawesome/free-solid-svg-icons";
import React, {Component} from "react";
import './index.scss'
import axios from "axios";

export default class WeeklyWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weeklyData:[]
        }
    }
    // componentWillMount() {
    //     this.setState({weeklyData: [{day: 'Monday', degree: 9, condition: 'raining'},
    //             {day: 'Tuesday', degree: 10, condition: 'sunny'},
    //             {day: 'Wednesday', degree: 11, condition: 'cloudy'},
    //             {day: 'Thursday', degree: 12, condition: 'sunny to cloudy'},
    //             {day: 'Friday', degree: 13, condition: 'windy'}]})
    // }
    async componentDidMount() {
        const location = this.props.location;
        const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast',{params: {id: '2147714', appid: '89048c50960e64dc0c0190da242638db'}});
        let weekDays=['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

        const weeklyData = response.data.list.filter((element, index)=> {
            if([0, 8, 16, 24, 32].includes(index)) {
                return true;
            }
        }).map((element, index)=>{
            return {day: weekDays[new Date(element.dt_txt).getDay()-1],//一定要-1
                degree: parseFloat((element.main.temp-273.15).toFixed(1)),
                condition: element.weather[0].main}
        });
        this.setState({weeklyData});//注意和todayWeather/index里面的componentDidMount对比！！！
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
            case 'Wind'://?
                return faWind;
        }
    }

    render() {
        return (
            <ul>
                {this.state.weeklyData.map((dailyData) => {
                    return (
                        <li>
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