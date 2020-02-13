import React, {Component} from "react"
import './index.scss'
import axios from "axios"

export default class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            city: 'Sydney',
            editMode: false,
            inputCity: ''
        }
        this.changeCity = this.changeCity.bind(this)
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.props.getLocation(this.state);
    }

    async changeCity() {
        const {inputCity} = this.state;
        this.setState({editMode: false, inputCity: ''});
        //look up inputCity, if exists, substitue city to inputCity. else, clear inputCity
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: inputCity,
                appid: '89048c50960e64dc0c0190da242638db'
            }
        });
        if (response.status === 200) {
            this.setState({city: inputCity}, () => this.props.getLocation(this.state))
        }
        // 这里setState没用，一定要一开始就set好
        // this.setState({inputCity: ''});

    }

    render() {
        return (
            this.state.editMode
                ?
                <div className="input">
                    <input onKeyDown={(event)=> {
                        if (event.key === 'Enter') {
                            return this.changeCity();
                        } else {
                            // document.querySelector(".input").style.width = `${this.state.inputCity.length * 35}px`;
                        }
                    }}
                           onBlur={this.changeCity}
                           onChange={(e) => {
                               this.setState({[e.target.name]: e.target.value})
                           }}
                           autoComplete="off"
                           placeholder="Search by city name.."
                           name="inputCity"
                           value={this.state.inputCity.toUpperCase()}
                           ref={this.inputRef}>
                    </input>

                </div>
                :
                <div onClick={() => {
                    //没有setTimeOut/不把它放在setstate的callback里面的话ref就不起作用
                    // setTimeout(()=> {this.inputRef.current.focus()})
                    this.setState({editMode: true},()=>this.inputRef.current.focus())
                }}
                     className="display"
                >{this.state.city.toUpperCase()}</div>
        );
    }
}
