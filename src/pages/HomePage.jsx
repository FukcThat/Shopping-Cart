import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome to Smart & Simple</h1>
        <p>
          Your curated shop for everyday essentials — from work-ready tech to
          wear-everywhere style.
        </p>
        <Link className="home-to-shop-btn" to="/shop">
          Explore the Collection
        </Link>
        {/* <button
          className="shop-now-btn"
          onClick={() => (window.location.href = "/shop")}
        ></button> */}
      </section>

      <section className="highlights">
        <div className="highlight">
          <h2> Tech That Works</h2>
          <p>
            Reliable tools for your digital life — monitors, SSDs, drives &
            more.
          </p>
        </div>
        <div className="highlight">
          <h2> Wear It Well</h2>
          <p>Clean, simple clothing for everyday comfort.</p>
        </div>
        <div className="highlight">
          <h2> Minimal Sparkle</h2>
          <p>Timeless accessories with subtle flair — just enough shine.</p>
        </div>
      </section>
    </div>
  );
}
