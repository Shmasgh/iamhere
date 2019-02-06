import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Home/Navbar'
import Signup from './Component/Home/Routes/Signup'
import { BrowserRouter, Route } from 'react-router-dom'
import Dashbords from "./Component/Profilepage/Routes"
import List from './Component/Ads/List';



class App extends Component {
  render() {
    return (
      <div className="home app">


        <BrowserRouter>
          <div className="header">
            {/* <Navbar /> */}
            <Route exact path="/" component={Navbar} />
            <Route path="/user" component={Dashbords} />
            <Route path="/Signup" component={Signup} />
            <Route exact path="/List" component={List} />


          </div>

        </BrowserRouter>



      </div>
    );
  }
}

export default App;
