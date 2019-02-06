import React, { Component } from 'react'
import { Route } from "react-router-dom"
import List from "./List"
export default class Routes extends Component {
    render() {
        return (
            <div>

                <Route exact path="/list" component={List} />

            </div>
        )
    }
}
