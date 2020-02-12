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
                {/*<div className="container">*/}
                    {/*Warning: React does not recognize the `computedMatch` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `computedmatch` instead. If you accidentally passed it from a parent component, remove it from the DOM element.*/}
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/explore' component={Explore}></Route>
                    <Route path='/setting' component={Setting}></Route>
                {/*</div>*/}
            </Switch>
            <div className="footer">© 2020 All rights reserved. Made by&nbsp;
                <a href="https://github.com/soniah7">Meiyazi ♥</a> in 2020 Feb.
            </div>
        </Router>
    );
}

export default App
