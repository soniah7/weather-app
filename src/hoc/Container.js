import React, {Component} from "react";
import Header from "../components/header";

export default class Container extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                {this.props.children}
                </div>
                <div className="footer">© 2020 All rights reserved. Made by&nbsp;
                    <a href="https://github.com/soniah7">美雅子 ♥</a> in 2020 Feb.
                </div>
            </div>
        );
    }
}
