import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import loadable from '@loadable/component'

const Home = loadable(() => import("../view/home"))
const Swiper = loadable(() => import("../view/Swiper"))
export default class RouteConfig extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/home" render={() => <Home />}></Route>
                    <Route path="/Swiper" render={() => <Home />}></Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}