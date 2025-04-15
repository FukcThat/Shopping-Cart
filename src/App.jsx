import { useState } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  return (
    <>
      <div className="app-container">
        {showToast && (
          <div className="checkout-toast">
            <h3>Sorry, this is not a real shop.</h3>
            <button
              onClick={() => {
                setShowToast(false);
              }}
            >
              ok
            </button>
          </div>
        )}

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
          setCartItems={setCartItems}
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          setShowToast={setShowToast}
        />
      </div>
    </>
  );
}

export default App;
