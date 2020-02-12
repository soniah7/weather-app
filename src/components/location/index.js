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

    // componentWillMount() {
    //     this.setState({
    //         country: '',
    //         city: 'Sydney'
    //     }, () => this.props.getLocation(this.state));
    // }
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

        // this.setState({inputCity: ''}); //问老师==为什么这里setState就没用，一定要在if block里面一开始就set好？？？？？

        // this.setState({inputCity: ''}, () => {
        //     this.props.getLocation(this.state)
        //     console.log(this.state)
        // });

    }

    /*下面的render函数：如果外面没有加一个div，下面一行就不能加大括号！！！！不然就没有唯一的标签了！！！
        如果下面是editMode:false，那么会不断的setState，一定会有maximum update报错?????? => 不是这个原因！maximum update报错是因为onclick
            接受的不是函数而是直接this.setState！！！！*/
    render() {

        return (
            this.state.editMode
                ?
                <div className="input">
                    {/*<div className="input-underline">*/}
                    <input onKeyDown={(event)=> {
                        if (event.key === 'Enter') {//确保一定要enter才执行以下代码
                            // this.changeCity()
                            return this.changeCity();
                            // 问老师 ==为什么这里不return this.changeCity???
                        } else {
                            // document.querySelector(".input:after").style.width = `${this.state.inputCity.length * 35}px`; //dom操作不能选中伪元素after吗？？？？
                            // document.querySelector(".input").style.width = `${this.state.inputCity.length * 35}px`;
                        }
                    }}
                           onBlur={this.changeCity}//？？？？？？？
                           onChange={(e) => {
                               this.setState({[e.target.name]: e.target.value})
                           }}
                           autoComplete="off"
                           placeholder="Search by city name.."
                           name="inputCity"
                           value={this.state.inputCity.toUpperCase()}
                           ref={this.inputRef}>
                    </input>
                    {/*</div>*/}

                </div>
                :
                <div onClick={() => {
                    // setTimeout(()=> {this.inputRef.current.focus()})
                    this.setState({editMode: true},()=>this.inputRef.current.focus())
                    //为什么没有setTimeOut/不把它放在setstate的callback里面的话ref就不起作用？？
                    //见：https://stackoverflow.com/questions/35522220/react-ref-with-focus-doesnt-work-without-settimeout-my-example

                }}
                     className="display"
                >{this.state.city.toUpperCase()}</div>
        );
    }
}
