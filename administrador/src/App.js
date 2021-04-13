import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import HomeScreen from './Components/Home'
//import ProductsScreen from './Components/Products'
import ProductsScreen from './Screen/ProductsScreen'
import UserScreen from './Screen/UserScreen'
import OrdersScreen from './Screen/OrdersScreen'
import LocationsScreen from './Screen/LocationsScreen'

export default function App() {
  return (
    <Router>
        <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <NavLink to="/">Inicio</NavLink>
            </div>
            <div class="navbar-item">
              <NavLink to="/products">Productos</NavLink>
            </div>
            <div class="navbar-item">
              <NavLink to="/users">Usuario</NavLink>
            </div>
            <div class="navbar-item">
              <NavLink to="/orders">Pedidos</NavLink>
            </div>
            <div class="navbar-item">
              <NavLink to="/locations">Localizacion</NavLink>
            </div>
          </div>
        </div>
        </nav>
        <Switch>
          <Route path="/locations">
            <LocationsScreen />
          </Route>
          <Route path="/orders">
            <OrdersScreen />
          </Route>
          <Route path="/users">
            <UserScreen />
          </Route>
          <Route path="/products">
            <ProductsScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>

    </Router>
  );
}
