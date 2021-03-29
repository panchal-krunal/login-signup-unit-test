import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from "../screens/login"
import Signup from "../screens/signup"
class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </Router>
      </div>
    )
  }
}

export default Routes;