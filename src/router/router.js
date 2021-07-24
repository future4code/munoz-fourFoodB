import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Signup from "../pages/signup"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/signup"}>
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}