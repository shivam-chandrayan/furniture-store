import React, { Component } from "react";
import data from "./furnitureData.json";
import { Link } from "react-router-dom";

class Products extends Component {
  state = {
    category: "",
    prodCode: "",
    products: [],
    categories: ["Dining", "Drawing", "Bedroom", "Study"],
  };

  componentDidMount() {
    let { category, prodCode } = this.props.match.params;
    let products = data;
    if (category && prodCode)
      products = data.filter((a) => a.category === category);
    this.setState({ category, prodCode, products });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      let { category, prodCode } = this.props.match.params;
      let products = data;
      if (category && prodCode)
        products = data.filter((a) => a.category === category);
      this.setState({ category, prodCode, products });
    }
  }

  onChange = (e) => {
    let url = "/products/" + e.currentTarget.id;
    console.log(url);
    this.props.history.push({ pathname: url });
  };

  render() {
    const { category, prodCode, products } = this.state;
    let selectedProd = products.find(
      (a) => a.category === category && a.prodCode === prodCode
    );
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <ul className="list-group">
              <li className="list-group-item bg-light">
                <strong>Options</strong>
              </li>
              {this.state.categories.map((a, i) => (
                <li className="list-group-item" key={i}>
                  <input
                    type="radio"
                    className="mr-2"
                    id={a}
                    key={i}
                    onChange={this.handleChange}
                    checked={a === category}
                  />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      {products.map((a, i) => (
                        <div className="col-6" key={i}>
                          <Link
                            to={"/products/" + a.category + "/" + a.prodCode}
                          >
                            <img src={a.img} className="m-3 w-100" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                {selectedProd && (
                  <div style={{ margin: "20px 0 0 50px" }}>
                    <img
                      src={selectedProd.img}
                      alt=""
                      style={{ width: "70%" }}
                    />
                    <h5>{selectedProd.title}</h5>
                    {selectedProd.desc.map((a, i) => (
                      <p key={i} className="m-0 p-0">
                        {a}
                      </p>
                    ))}
                    <h5>Items In Product</h5>
                    {selectedProd.ingredients.map((a, i) => (
                      <p className="m-0 p-0" key={i}>
                        {"- " + a.ingName + ":" + a.qty}
                      </p>
                    ))}
                    {localStorage.getItem("email") && (
                      <button
                        className="btn btn-success btn-sm my-2"
                        onClick={() => this.props.onAddToCart(selectedProd)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
