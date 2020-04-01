import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sermons from "./Pages/Sermons";
import Houses from "./Pages/Houses";
import Blog from "./Pages/Blog";
import PostDetails from "./components/Blog/PostDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/messages-and-sermons" component={Sermons} />
        <Route path="/house-care-fellowship" component={Houses} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={PostDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
