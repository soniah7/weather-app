import React, {Component} from "react"
import axios from "axios"
import './index.scss'

export default class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Sydney',
            editMode: false,
            inputCity: ''
        }
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.props.getLocation(this.state);
    }

    updateCity = async () => {
        const {inputCity} = this.state;
        //check validity of inputCity, if it exists, copy inputCity to City, else stays the same.
        this.setState({editMode: false, inputCity: ''});
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: inputCity,
                appid: '89048c50960e64dc0c0190da242638db'
            }
        });
        if (response.status === 200) {
            this.setState({city: inputCity}, () => this.props.getLocation(this.state))
        }

        // 这里setState不起作用
        // this.setState({editMode: false, inputCity: ''});
    }

    render() {
        return (
            this.state.editMode
                ?
                <div className="input">
                    <input name="inputCity"
                           placeholder="Search by city name.."
                           onChange={(e) => {
                               this.setState({[e.target.name]: e.target.value})
                           }}
                           value={this.state.inputCity.toUpperCase()}
                           onKeyDown={(event)=> {
                               if (event.key === 'Enter') {
                                   return this.updateCity();
                               }
                           }}
                           onBlur={this.updateCity}
                           ref={this.inputRef}
                           autoComplete="off"
                    />
                </div>
                :
                <div onClick={() => {
                    this.setState({editMode: true},()=>this.inputRef.current.focus())
                }}
                     className="display"
                >{this.state.city.toUpperCase()}</div>
        );
    }
}
