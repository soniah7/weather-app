import React, {Component} from "react";
import './index.scss'
import axios from "axios";

export default class TodayWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            degree: '',
            condition: '',
            humidity: '',
            windSpeed: ''
        }
    }

    async componentDidMount() {
        const location = this.props.location;
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather',{params: {id: '2147714', appid: '89048c50960e64dc0c0190da242638db'}});
        const data = {degree: parseFloat((response.data.main.temp-273.15).toFixed(1)),
            condition: response.data.weather[0].main,
            humidity:response.data.main.humidity,
            windSpeed: response.data.wind.speed};
        this.setState(data);
    }

    render() {
        return (
            <div>
                <div className="summary">
                    <div className="summary__temperature">
                        <div>
                            <div className="summary__temperature--data">{this.state.degree}</div>
                            <div className="summary__temperature--unit"></div>
                        </div>
                    </div>
                    <div className="summary__condition">{this.state.condition.toUpperCase()}</div>
                </div>
                <div className="detail">
                    <div className="detail__humidity">
                        <div>HUMIDITY</div>
                        <div>{this.state.humidity}%</div>
                    </div>
                    <div className="detail__wind">
                        <div>WIND</div>
                        <div>{this.state.windSpeed} K/M</div>
                    </div>
                </div>
            </div>
        );
    }
}
