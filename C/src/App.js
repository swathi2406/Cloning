import React, { useEffect, createContext } from "react";
import NavBar from "./component/navbar";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Home from "./component/screens/Home";
import Signin from "./component/screens/SignIn";
import Profile from "./component/screens/Profile";
import Signup from "./component/screens/Signup";
import CreatePost from "./component/screens/CreatePost";

const UserContext = createContext();

const Routing = () => {
  const history = useHistory;
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/create">
        <CreatePost />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
