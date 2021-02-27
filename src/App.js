import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      {/* <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} /> */}
      <Footer />
    </Router>
  );
}

export default App;
