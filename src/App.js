import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="danger">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default App;
