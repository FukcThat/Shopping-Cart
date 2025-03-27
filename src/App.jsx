import { useEffect, useState } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);
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
        />

        <main className="main-content--container">
          <Outlet context={{ searchTerm, cartItems, setCartItems }} />
        </main>
      </div>
    </>
  );
}

export default App;
