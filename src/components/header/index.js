import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

class Header extends Component {
    render() {
        return (
            <header className="head">

                <div className="head__content">
                    <div className="head__logo">Weather <span className="head__logo--blue">App</span></div>
                    <ul className="head__menu--horizontal">
                        <li><Link to='/'>
                            <a>Home</a>
                        </Link>
                        </li>
                        <li><Link to='/explore'>
                            <a>Explore</a>
                        </Link>
                        </li>
                        <li><Link to='/setting'>
                            <a>Setting</a>
                        </Link>
                        </li>
                    </ul>
                    <div className="head__menu-icon"><i className="fa fa-bars"></i></div>
                </div>
                <div className="head__menu--vertical" id="head__menu--vertical">
                    <ul>
                        <li><Link to='/'>
                            <a>Home</a>
                        </Link>
                        </li>
                        <li><Link to='/explore'>
                            <a>Explore</a>
                        </Link>
                        </li>
                        <li><Link to='/setting'>
                            <a>Setting</a>
                        </Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;