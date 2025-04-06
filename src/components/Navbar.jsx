import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import "../styles/Navbar.css";

export default function Navbar({
  cartItems,
  searchTerm,
  setSearchTerm,
  onCartClick,
}) {
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </div>

      {isShopPage && (
        <div className="search-container">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>
      )}

      <ShoppingCart itemCount={cartItems.length} onCartClick={onCartClick} />
    </nav>
  );
}
