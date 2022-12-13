import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import { Router, Routes, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      greeting: "",
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
      .then((response) => response.json())
      .then((state) => this.setState(state));
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar />
        </div>
        <div>
          {" "}
          <Router>
            <Routes></Routes>
          </Router>
        </div>
      </header>
    </div>
  );
}
}

export default App;