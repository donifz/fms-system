import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import LoginContainer from "./components/login/loginContainer";

import Main from "./components/main";

function App(props) {
  

  return (
    <>
      <Switch>
        <Route  path="/login" render={() => <LoginContainer />} />
        <Route  path="/" render={() => <Main />} />
      </Switch>
     
    </>
  );
}

export default App;
