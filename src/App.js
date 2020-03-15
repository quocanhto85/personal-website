import React from "react";
import { Header } from "./components/Layouts/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/views/About";
import Info from "./components/views/Info";
import Profile from "./components/views/Profile";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Header />
        <Route path="/about" component={About} />
        <Route path="/info" component={Info} />
        <Route path="/profile" component={Profile} />
      </Router>
    </div>
  );
}

export default App;
