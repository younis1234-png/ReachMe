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
import { reducer, initialState } from "./reducers/userReducer";
import "./App.css";

export const UserContext = createContext();

// to get access to history
const Routing = () => {
  const history = useHistory();

  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      if (!history.location.pathname.startsWith("/reset"))
        history.push("/signin");
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/signin" component={Signin}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/createpost" component={CreatePost}></Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Navbar />
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
