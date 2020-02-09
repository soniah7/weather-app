import React, {Component} from "react";
import './index.scss'

export default class TodayWeather extends Component {
    constructor(props) {
        super(props);
        this.state={
            degree: 'unknown',
            condition: 'unknown',
            humidity: 'unknown',
            windSpeed: 'unknown',
        }
    }

    componentWillMount() {
        // TODO make request using value of location instead of simply setState
        const location = this.props.location;
        this.setState({
            degree: 12,
            condition: 'cloudy',
            humidity: 64,
            windSpeed: 12,
        })
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
