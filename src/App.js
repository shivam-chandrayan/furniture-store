import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  withRouter,
} from "react-router-dom";

//components
import Navbar from "./components/navbar";
import Products from "./components/products";
import Login from "./components/login";
import Logout from "./components/logout";
import Cart from "./components/cart";

class App extends Component {
  state = {
    cart: [],
  };
  handleAddToCart = (item) => {
    let { cart } = this.state;
    cart.push(item);
    this.setState({ cart });
  };

  render() {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let user = { email: email, password: password };
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar user={user} />
        </BrowserRouter>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/products/:category/:prodCode"
              render={withRouter((props) => (
                <Products {...props} onAddToCart={this.handleAddToCart} />
              ))}
            />
            <Route
              exact
              path="/products"
              render={(props) => (
                <Products {...props} onAddToCart={this.handleAddToCart} />
              )}
            />
            <Route
              path="/cart"
              render={(props) => <Cart {...props} cart={this.state.cart} />}
            />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
