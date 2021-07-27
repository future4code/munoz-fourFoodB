import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Signup from "../pages/signup"
import Address from "../pages/address"
import Feed from "../pages/feed"

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
        <Route exact path={"/address"}>
          <Address />
        </Route>
        <Route exact path={"/feed"}>
          <Feed />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}