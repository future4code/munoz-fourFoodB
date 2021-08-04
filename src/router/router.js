import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Signup from "../pages/signup"
import Address from "../pages/address"
import Feed from "../pages/feed"
import Restaurant from "../pages/restaurant"
import Cart from "../pages/cart"

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
        <Route exact path={"/restaurant/:id"}>
          <Restaurant />
        </Route>
        <Route exact path={"/cart"}>
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}