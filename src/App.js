import React from 'react'
import './App.scss'
import Header from './components/header'
import Home from './pages/home'
import Setting from './pages/setting'
import Explore from './pages/explore'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/explore' component={Explore}></Route>
                    <Route path='/setting' component={Setting}></Route>
            </Switch>
            <div className="footer">© 2020 All rights reserved. Made by&nbsp;
                <a href="https://github.com/soniah7">Meiyazi ♥</a> in 2020 Feb.
            </div>
        </Router>
    );
}

export default App
