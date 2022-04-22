import React, { Component } from "react";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Products in Shopping Cart</h3>
        {this.props.cart.map((a, i) => (
          <div key={i} className="row bg-light">
            <div className="col-3">
              <img src={a.img} alt="" width="50px" />
            </div>
            <div className="col-6">
              <strong>{a.title}</strong>
            </div>
            <div className="col-3">
              <button className="btn btn-sm btn-danger">-</button>
              <button className="btn btn-sm btn-secondary" disabled={true}>
                -
              </button>
              <button className="btn btn-sm btn-success">+</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
