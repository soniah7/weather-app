import React, {Component} from "react";
import './index.scss'

export default class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            city: ''
        }
    }

    componentWillMount() {
        this.setState({
            country: 'Australia',
            city: 'Sydney'
        }, () => this.props.getLocation(this.state));
    }

    render() {
        return (
            <div>{this.state.city.toUpperCase()}</div>
        );
    }
}
