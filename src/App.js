import * as React from "react";
import { Component } from "react";
// import "./App.css";
import Navigation from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import CheckoutPage from "./pages/CheckoutPage";
import Error404 from "./Error404";

import { BrowserRouter, Route } from "react-router-dom";

// import CurrentUserProvider from './contexts/CurrentUser'
// import * as serviceWorker from "./serviceWorker";
// import CreateUser from "./components/CreateUser";

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
          <BrowserRouter>
            <Navigation /> {/* <Switch>  */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route
              exact
              path="/ordercomplete"
              component={OrderConfirmationPage}
            />
            <Route exact path="/checkout" component={CheckoutPage} />
            {/* <Route exact path="/product/:productid" component={ProductDetails}/> */}
            <Route exact path="/profile/:userid" component={ProfilePage} />
            <Route path="/" component={Error404} />
            {/* </Switch> */}
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
