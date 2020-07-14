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
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/explore' component={Explore}></Route>
                <Route path='/setting' component={Setting}></Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App
