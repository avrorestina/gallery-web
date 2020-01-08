import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Navbar from "./NavBar.js";
import Home from "./Home.js";
import About from "./About.js";
import Gallery from "./Gallery.js";
import Footer from "./Footer.js";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route component={NoMatchPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const NoMatchPage = () => {
  return <h3 className="homeTitle">404 - Not found</h3>;
};

ReactDOM.render(<App />, document.getElementById("root"));
