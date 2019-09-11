import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './components/pages/home/Home.component.jsx';
import Discovery from './components/pages/discovery/Discovery.component.jsx';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {

    }
  }

  render() {
    return (

      <div className="App">
        <Router>
        <div>       
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/discovery' component={Discovery} />
          </Switch>
        </div>
      </Router>
      </div>
    );   
  }

}

export default App;
