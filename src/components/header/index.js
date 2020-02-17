import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {Link, BrowserRouter as Router} from 'react-router-dom'
import './index.scss'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sticky: false,
            verticalMenuWidth: "",
            currentPage: ""
        }
    }

    componentDidMount() {
        // window.onscroll = () => {
        //     // if (window.pageYOffset > sticky) {
        //     if (window.pageYOffset > 0) {
        //         this.setState({sticky: true})
        //         // this.classList.add("sticky");
        //     }
        // }//这个方法并没有addeventlisener，所以不行？？？
        window.addEventListener('scroll', () => {
                if (window.pageYOffset > 0) {
                    this.setState({sticky: true})
                } else {
                    this.setState({sticky: false}) //这里一定要有，不能省略！！！
                }
            }
        );//这样怎么removeEventListener？？？？？



        //自动hover的效果
        this.setState({currentPage:window.location.href.split('/').pop()})
        console.log(window.location.href.split('/').pop())

        // render方法里用onclick事件实现以下效果的代码是否过于重复？？？？？？？
        // 但好像设定了currentpage以后，不用先移除所有的stay-hover效果再加上currentpage效果，直接用三元操作符进行一个简单的判断即可？？？？
        // let currentPage = window.location.href.split('/').pop()
        // document.querySelectorAll(".head__menu--horizontal li span, .head__menu--vertical li span").forEach(
        //     //一开始打开页面的时候保证当前页面hover
        //     (element) => {
        //         if (element.innerHTML.toUpperCase() == currentPage.toUpperCase() || (currentPage == "" && element.innerHTML == 'Home')) {
        //             element.classList.add("stay-hover");
        //         }
        //         element.addEventListener('click', function (event) {
        //             document.querySelectorAll(".head__menu--horizontal span, .head__menu--vertical span").forEach(
        //                 (element) => {
        //                     element.classList.remove("stay-hover");
        //                 }
        //             );
        //             event.target.classList.add("stay-hover");
        //         });
        //     }
        // );

    }

    componentDidUnMount() {
        // window.removeEventListener('scroll', () => {
        //
        //     }
        // })
        // //necessary????

    }

    openVerticalMenu = () => {
        if (this.state.verticalMenuWidth == "" ||
            this.state.verticalMenuWidth  == "0%") {
            this.setState({verticalMenuWidth: "100%"})
        } else {
            this.setState({verticalMenuWidth: "0%"})
        }
    }

    render() {
        // 这里的代码有待优化？？？？
        return (
            // <Router> 如果这里加了router，而不是在home里面加，会有很大的问题！！！！！
            // 切换成explore/setting了以后要手动刷新才能让页面显示explore/setting的内容而不是home的内容！！！！？？？？？？？？？？
            // <header className={this.state.sticky ? "sticky " : "" + "head"}> //注意这里跟在三元操作符后面的加号是跟在""后面的而不是前面的整体！！！！！！！
            <header className={this.state.sticky ? "sticky head" : "head"}>
                <div className="head__content">
                    <div className="head__logo">Weather <span className="head__logo--blue">App</span></div>
                    <ul className="head__menu--horizontal" >
                        <li><Link to='/'>
                            <span className={this.state.currentPage == "" ? "stay-hover" : ""}
                                  onClick={()=>  this.setState({currentPage: ''})}>Home</span>
                        </Link>
                        </li>
                        <li><Link to='/explore'>
                            <span className={this.state.currentPage == "explore" ? "stay-hover" : ""}
                                  onClick={()=>  this.setState({currentPage: 'explore'})}>Explore</span>
                        </Link>
                        </li>
                        <li><Link to='/setting'>
                            <span className={this.state.currentPage == "setting" ? "stay-hover" : ""}
                                  onClick={()=>  this.setState({currentPage: 'setting'})}>Setting</span>
                        </Link>
                        </li>
                    </ul>
                    <div className="head__menu-icon" onClick={this.openVerticalMenu}><FontAwesomeIcon icon={faBars}/></div>
                </div>
                <div className="head__menu--vertical" id="head__menu--vertical" style={{width: this.state.verticalMenuWidth}} >
                    <ul>
                        <li><Link to='/'>
                            <span className={this.state.currentPage == "" ? "stay-hover" : ""}
                                  onClick={()=>  this.setState({verticalMenuWidth: "0%"})}
                                  onClick={()=>  this.setState({currentPage: ''})}>Home</span>
                        </Link>
                        </li>
                        <li><Link to='/explore'>
                            <span className={this.state.currentPage == "explore" ? "stay-hover" : ""}
                                onClick={()=>  this.setState({verticalMenuWidth: "0%", currentPage: 'explore'})}>Explore</span>
                        </Link>
                        </li>
                        <li><Link to='/setting'>
                            <span className={this.state.currentPage == "setting" ? "stay-hover" : ""}
                                onClick={()=>  this.setState({verticalMenuWidth: "0%", currentPage: 'setting'})}>Setting</span>
                        </Link>
                        </li>
                    </ul>
                </div>
            </header>
            // </Router>
        )
    }
}

export default Header