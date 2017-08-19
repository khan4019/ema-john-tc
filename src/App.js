import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Shop}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/review" component={OrderReview}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
