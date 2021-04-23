import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import {
  Home,
  CreatePost,
  Signin,
  Signup,
  UserProfile,
  Profile,
} from "./pages";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route path="/profile/:userid" component={UserProfile}></Route>
        <Route path="/createpost" component={CreatePost}></Route>
        <Route component={() => 404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
