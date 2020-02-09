import React, {Component} from "react";
import './index.scss'
export default class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: 'unknown',
            city: 'unknown'
        }
    }

    componentWillMount() {
        this.setState({
            country: 'France',
            city: 'Paris'
        }, () => this.props.getLocation(this.state)); // c.
        // 注意这里不能是this.props.getLocation(this.state)，一定要用()=>{}包起来！！？？??？

        // a.
        // this.props.getLocation(this.state); //为什么放这里最后twitter的hashtag显示就是UNKNOWN???
    }

    // 即便不用a，也可以不用到下面b的代码，但一定要用c。
    // since setState works in an asynchronous way. 详见：https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback
    // b.
    // componentDidMount() {
    //     this.props.getLocation(this.state)
    // }

    render() {
        // this.props.getLocation(this.state) //===== 为什么放在这里会有maximum update的问题？？？这里更新的不是父类元素的state吗？？？？？？？？？
        return (
            <div>{this.state.city.toUpperCase()}</div>
        );
    }
}
