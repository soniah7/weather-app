import React, {Component} from 'react';
import './index.scss'
import Twitter from "../../components/twitter";
import WeeklyWeather from "../../components/weeklyWeather";
import TodayWeather from "../../components/todayWeather";
import Location from "../../components/location";

class Home extends Component {

    constructor() {
        super();
        this.state = {
            location: {
                country: 'unknown',
                city: 'unknown'
            }
        }
    }

    getLocation = (location) => {
        this.setState({location});
        // return location; //这样不行！！！！传递的是函数而不是call它？？？？？！！！！！！！
    }

    render() {
        return (
            <div className="content">
                <div className="card__upper">
                    <div className="card__upper--weather">
                        <TodayWeather location={this.state.location}/>
                    </div>
                    <div className="card__upper--location">
                        <Location getLocation={this.getLocation}/>
                    </div>
                </div>
                <div className="card__lower">
                    <div className="card__lower--twitter">
                        <Twitter location={this.state.location}/>
                    </div>
                    <div className="card__lower--weeklyWeather">
                        <WeeklyWeather location={this.state.location}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;