import React, {Component} from 'react'
import Twitter from "../../components/twitter"
import WeeklyWeather from "../../components/weeklyWeather"
import TodayWeather from "../../components/todayWeather"
import Location from "../../components/location"
import './index.scss'
import Container from "../../hoc/Container";

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            location: {
                city: ''
            }
        }
    }

    getLocation = (location) => {
        this.setState({location:location});
    }

    render() {

        return (
            <Container>
            <div className="card">
                <div className="card__upper">
                    <div className="card__upper--todayWeather">
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
            </Container>
        );
    }
}

