import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './components/pages/home/Home';
import SportList from './components/pages/sport_list/SportList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar />

            <Route exact path='/' component={Home} />
            <Route exact path='/sport_list' component={SportList} />

            <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
