import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Home from './Containers/Home';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Projects from './Components/Pages/Projects/Projects';
import Clients from './Components/Pages/Clients/Clients';


class App extends Component {
  render() {
    return (
    <Router>
	      <div className="App"> 
	        <Route path="/" exact component={Home}/>
	        <Switch>
                <Route path="/about"  component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/clients" component={Clients}/>
            </Switch>
	      </div>
    </Router>
    );
  }
}

export default App;
