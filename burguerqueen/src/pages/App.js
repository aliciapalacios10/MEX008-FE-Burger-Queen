import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import GetIn from '../pages/GetIn';
import Kitchen from '../pages/Kitchen';
import Error from '../pages/Error404';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Login" component={Login}/>
            <Route path="/Get" component={GetIn}/>
            <Route path="/Kitchen" component={Kitchen} />

            <Route path="*" component={Error} />
        </Switch>
      
      </BrowserRouter>

    );
  }
}

export default App;