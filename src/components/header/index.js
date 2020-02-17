import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'
import './index.scss'


export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sticky: false,
            verticalMenuWidth: "",
            currentPage: ""
        }
    }

    componentDidMount() {
           window.addEventListener('scroll', () => {
                if (window.pageYOffset > 0) {
                    this.setState({sticky: true})
                } else {
                    this.setState({sticky: false})
                }
            }
        );

        this.setState({currentPage:window.location.href.replace('#','').split('/').pop()})
    }



    openVerticalMenu = () => {
        if (this.state.verticalMenuWidth === "" ||
            this.state.verticalMenuWidth  === "0%") {
            this.setState({verticalMenuWidth: "100%"})
        } else {
            this.setState({verticalMenuWidth: "0%"})
        }
    }

    render() {
        return (
            <header className={this.state.sticky ? "sticky head" : "head"}>
                <div className="head__content">
                    <div className="head__logo">Weather <span className="head__logo--blue">App</span></div>
                    <ul className="head__menu--horizontal" >
                        <li><Link to='/'>
                            <span className={this.state.currentPage === "" ? "stay-hover" : ""}
                                  onClick={()=>  this.setState({currentPage: ''})}>Home</span>
                        </Link>
                        </li>
                        <li><Link to='/explore'>
                            <span className={this.state.currentPage === "explore" ? "stay-hover" : ""}
                                  onClick={()=>  this.setState({currentPage: 'explore'})}>Explore</span>
                        </Link>
                        </li>
                        <li><Link to='/setting'>
                            <span className={this.state.currentPage === "setting" ? "stay-hover" : ""}
                                  onClick={()=>  this.setState({currentPage: 'setting'})}>Setting</span>
                        </Link>
                        </li>
                    </ul>
                    <div className="head__menu-icon" onClick={this.openVerticalMenu}><FontAwesomeIcon icon={faBars}/></div>
                </div>
                <div className="head__menu--vertical" id="head__menu--vertical" style={{width: this.state.verticalMenuWidth}} >
                    <ul>
                        <li><Link to='/'>
                            <span className={this.state.currentPage === "" ? "stay-hover" : ""}
                                  onClick={()=>  this.setState({verticalMenuWidth: "0%", currentPage: ''})}>Home</span>
                        </Link>
                        </li>
                        <li><Link to='/explore'>
                            <span className={this.state.currentPage === "explore" ? "stay-hover" : ""}
                                onClick={()=>  this.setState({verticalMenuWidth: "0%", currentPage: 'explore'})}>Explore</span>
                        </Link>
                        </li>
                        <li><Link to='/setting'>
                            <span className={this.state.currentPage === "setting" ? "stay-hover" : ""}
                                onClick={()=>  this.setState({verticalMenuWidth: "0%", currentPage: 'setting'})}>Setting</span>
                        </Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

