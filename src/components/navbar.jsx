import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        FurnitureStore
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/products" className="nav-link">
              Products
            </a>
          </li>
          <li className="nav-item">
            {user.email && (
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            )}
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {!user.email && (
              <a href="/login" className="nav-link">
                Sign In
              </a>
            )}
            {user.email && (
              <a href="/logout" className="nav-link">
                Sign Out
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
