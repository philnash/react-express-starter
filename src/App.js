import React, { Component } from "react";
import "./App.css";
import { Navbar } from "react-bootstrap";
import NavBar from "./components/Navbar";
import { Router, Routes, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import React, { Component } from 'react';
import logo from '../src/flame.png';
// import './App.css';

// I NEED TO IMPORT PUBLIC/CSS/main.css HERE since SASS is updating that right now, App.css is not auto-updating at this time. 



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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          
          
        
         
        </header>
      </div>
    );
  }
}

export default App;
