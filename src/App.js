import * as React from "react";
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/css/scss/main.css";
import "../src/css/scss/main.css.map";

import Navigation from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutUsPage from "./pages/AboutUsPage";
import Error404 from "./Error404";
import Login from "./components/Login";
import CreateUserForm from "./components/CreateUserForm";

// import bodyParser from "body-parser";

// import CurrentUserProvider from './contexts/CurrentUser'
// import * as serviceWorker from "./serviceWorker";

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
        <Navigation />
        {/* <header className="App-header"></header> */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/products" element={<ProductsPage />} />
            <Route exact path="/aboutus" element={<AboutUsPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route
              exact
              path="/ordercomplete"
              element={<OrderConfirmationPage />}
            />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<CreateUserForm />} />
            {/* <Route exact path="/product/:productid" element={<ProductDetails />}/> */}
            <Route exact path="/profile/:userid" element={<ProfilePage />} />
            <Route path="/" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
