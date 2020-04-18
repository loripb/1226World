import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Roster from './components/Roster'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import './App.css';

export default class App extends Component {

  renderPage = (routerProps) => {
    switch(routerProps.location.pathname) {
      case "/about":
        return <About />
        break;
      case "/roster":
        return <Roster />
        break;
      case "/reviews":
        return <Reviews />
        break;
      case "/contact":
        return <Contact />
        break;
    }
  }

  render(){
    return (
      <div>
        <Switch>
          <Route path="/contact" exact render={ this.renderPage } />
          <Route path="/reviews" exact render={ this.renderPage } />
          <Route path="/roster" exact render={ this.renderPage } />
          <Route path="/about" exact render={ this.renderPage } />
          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}
