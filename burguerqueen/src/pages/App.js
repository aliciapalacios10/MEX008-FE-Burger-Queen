import React, { Component } from 'react';
import  Main from './Main';

<<<<<<< HEAD
// import Home from './Home';
// import Menu from './Menu';
// import Login from './Login';
// import GetIn from './GetIn';
// import Kitchen from './Kitchen';
// import Error from './Error404';
=======
import Home from './Home';
import Menu from './Menu';
import GetIn from './GetIn';
import Kitchen from './Kitchen';
import Error from './Error404';
>>>>>>> b40d5e1818e5f6267b92abbcb5be2391ee8fea73
import './App.css';
import GetIn from './GetIn';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Main>
        <GetIn />
      </Main>
=======
      <Router basename={window.location.pathname || ''} >
      <Switch>
      <Route exact path="/" render={props => < GetIn />}></Route>
      <Route exact path="/Home" render={props => < Home />}></Route>
      <Route exact path="/Menu" render={props => < Menu />}></Route>
      <Route exact path="/Kitchen" render={props => < Kitchen />}></Route>
      <Route exact path="/Error" render={props => < Error />}></Route>
      </Switch>
      </Router>
>>>>>>> b40d5e1818e5f6267b92abbcb5be2391ee8fea73
    );
  }
}

export default App;
