import React, { Component } from "react";
import { Router, browserHistory, Route } from "react-router";

import "./App.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const HomeLink = props => (
  <div className="App">
    <NavBar title="Home" />
    <Header title="Pagina inicial" />
    <Home />
  </div>
);
const AboutLink = props => (
  <div className="App">
    <NavBar title="Home" />
    <Header title="Sobre" />
    <About />
  </div>
);
const ServicesLink = props => (
  <div className="App">
    <NavBar title="Home" />
    <Header title="Serviços" />
    <Services />
  </div>
);
const ContactLink = props => (
  <div className="App">
    <NavBar title="Home" />
    <Header title="Contato" />
    <Contact />
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={HomeLink} />
          <Route path="/about" component={AboutLink} />
          <Route path="/services" component={ServicesLink} />
          <Route path="/contact" component={ContactLink} />
        </Router>
      </div>
    );
  }
}

export default App;
