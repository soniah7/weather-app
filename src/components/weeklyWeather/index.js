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

    async componentDidUpdate(prevProps, prevState) {

    //为什么这里一次数据的更新会触发两个update？一次给state的变化，一次给props的变化？？？？！！！！！
        if (prevProps.location != this.props.location) {
            const location = this.props.location;
            const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast',{params: {q: location.city, appid: '89048c50960e64dc0c0190da242638db'}});
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