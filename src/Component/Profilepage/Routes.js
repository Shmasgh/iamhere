import React, { Component } from 'react'
import { Route } from "react-router-dom"
import User from "./User"
import Admin from "./Admin"

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/user/user" component={User} />
                <Route exact path="/user/admin" component={Admin} />


            </div>
        )
    }
}
