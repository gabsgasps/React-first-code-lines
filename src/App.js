import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Users from "./pages/users/Users";


function App() {
  return (
    <Router>
      <div className="Header">
        <h1>Hello World</h1>
      </div>
    </Router>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;
