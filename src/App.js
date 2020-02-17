import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Explore from './pages/explore'
import Setting from './pages/setting'

import './App.scss'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/explore' component={Explore}></Route>
                <Route path='/setting' component={Setting}></Route>
            </Switch>
            <div className="footer">© 2020 All rights reserved. Made by&nbsp;
                <a href="https://github.com/soniah7">美雅子 ♥</a> in 2020 Feb.
            </div>
        </BrowserRouter>
    );
}

export default App
