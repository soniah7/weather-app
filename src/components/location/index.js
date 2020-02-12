import React, {Component} from "react";
import './index.scss'
import axios from "axios";

export default class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            city: '',
            editMode: false,
            inputCity: ''
        }
        this.changeCity = this.changeCity.bind(this)
    }

    componentWillMount() {
        this.setState({
            country: 'Australia',
            city: 'Sydney'
        }, () => this.props.getLocation(this.state));
    }

    async changeCity(event) {
        if (event.key === 'Enter') {//确保一定要enter才执行以下代码
            this.setState({editMode: false});
            //look up inputCity, if exists, substitue city to inputCity. else, clear inputCity
                const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: this.state.inputCity,
                        appid: '89048c50960e64dc0c0190da242638db'
                    }
                });
                if (response.status == 200) {
                    this.setState({city: this.state.inputCity}, () => this.props.getLocation(this.state))
                }
             else this.setState({inputCity: ''}, () => this.props.getLocation(this.state));
        }
    }


    render() {
        {/*如果外面没有加一个div，下面一行就不能加大括号！！！！不然就没有唯一的标签了！！！*/
        }
        {/*如果下面是editMode:false，那么会不断的setState，一定会有maximum update报错?????? => 不是这个原因！maximum update报错是因为onclick
        接受的不是函数而是直接this.setState！！！！*/
        }
        return (
            this.state.editMode
                ?
                <div className="input">
                    <input onKeyDown={this.changeCity}
                           onChange={(e) => {
                               this.setState({[e.target.name]: e.target.value})
                           }}
                           autocomplete="off"
                           placeholder="Search by city name"
                           name="inputCity"
                           value={this.state.inputCity.toUpperCase()}>

                    </input>
                </div>
                :
                <div onClick={() => {
                    this.setState({editMode: true})
                }}
                     className="display"
                >{this.state.city.toUpperCase()}</div>
        );
    }
}
