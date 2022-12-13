<<<<<<< Updated upstream
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

=======
import * as React from "react";
import { Component } from "react";
import "./App.css";
// import { Navbar } from "react-bootstrap";
import Navigation from "./components/Navbar";
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ProfilePage from "./pages/ProfilePage"
import OrderConfirmationPage from "./pages/OrderConfirmationPage"

import { BrowserRouter, Route, Routes, Router, Switch } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";
>>>>>>> Stashed changes


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

<<<<<<< Updated upstream
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
=======
render() {
  return (
    <div className="App">
      <header className="App-header">
    <BrowserRouter>
      <Navigation />
          {" "}
      <Switch> 
      <Route exact path="/" component={Home} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/ordercomplete" component={OrderConfirmationPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/product/:productid" component={ProductDetails} />

          <Route exact path="/profile/:userid" component={EditPlaceForm} />
          <Route path="/" component={Error404} />
      </Switch>
        </div>
      </header>
    </div>
  );
}
>>>>>>> Stashed changes
}

export default App;
