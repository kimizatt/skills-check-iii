import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Wizard from './components/Wizard'
import Dashboard from './components/Dashboard'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component= {Dashboard} />
                    <Route path='/wizard' component= {Wizard} />
                </Switch>
            </div>
        )
    }
}