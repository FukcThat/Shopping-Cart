import { useEffect, useState } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  return (
    <>
      <div className="app-container">
        <Navbar
          showSearch={isShopPage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          cartItems={cartItems}
          onCartClick={() => setCartOpen(!cartOpen)}
        />

        <main className="main-content--container">
          <Outlet context={{ searchTerm, cartItems, setCartItems }} />
        </main>
        <CartSidebar
          cartItems={cartItems}
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
