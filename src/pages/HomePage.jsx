import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  const [categories, setCategories] = useState({
    tech: [],
    fashion: [],
    jewelry: [],
  });

  const [hoverImages, setHoverImages] = useState({
    tech: null,
    fashion: null,
    jewelry: null,
  });

  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const tech = data.filter((item) =>
          item.category.includes("electronics")
        );
        const fashion = data.filter((item) =>
          item.category.includes("clothing")
        );
        const jewelry = data.filter((item) => item.category.includes("jewel"));
        setCategories({ tech, fashion, jewelry });

        [...tech, ...fashion, ...jewelry].forEach((item) => {
          const img = new Image();
          img.src = item.image;
        });
      });
  }, []);

  const handleHover = (key) => {
    if (hovered === key) return;
    setHovered(key);

    const imgOptions = categories[key];
    if (imgOptions && imgOptions.length > 0) {
      const random = imgOptions[Math.floor(Math.random() * imgOptions.length)];
      setHoverImages((prev) => ({ ...prev, [key]: random.image }));
    }
  };

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
      </section>

      <section className="highlights">
        <div
          className={`highlight ${hovered === "tech" ? "hovered" : ""}`}
          onMouseEnter={() => handleHover("tech")}
          onMouseLeave={() => setHovered(null)}
        >
          <h2> Tech That Works</h2>
          <p>
            Reliable tools for your digital life — monitors, SSDs, drives &
            more.
          </p>
          <div
            className={`highlight-image-wrapper ${
              hovered === "tech" ? "visible" : ""
            }`}
          >
            {hovered === "tech" && hoverImages.tech && (
              <img
                src={hoverImages.tech}
                alt="tech preview"
                className="highlight-image"
              />
            )}
          </div>
        </div>

        <div
          className={`highlight ${hovered === "fashion" ? "hovered" : ""}`}
          onMouseEnter={() => handleHover("fashion")}
          onMouseLeave={() => setHovered(null)}
        >
          <h2> Wear It Well</h2>
          <p>Clean, simple clothing for everyday comfort.</p>

          <div
            className={`highlight-image-wrapper ${
              hovered === "fashion" ? "visible" : ""
            }`}
          >
            {hovered === "fashion" && hoverImages.fashion && (
              <img
                src={hoverImages.fashion}
                alt="fashion preview"
                className="highlight-image"
              />
            )}
          </div>
        </div>

        <div
          className={`highlight ${hovered === "jewelry" ? "hovered" : ""}`}
          onMouseEnter={() => handleHover("jewelry")}
          onMouseLeave={() => setHovered(null)}
        >
          <h2> Minimal Sparkle</h2>
          <p>Timeless accessories with subtle flair — just enough shine.</p>

          <div
            className={`highlight-image-wrapper ${
              hovered === "jewelry" ? "visible" : ""
            }`}
          >
            {hovered === "jewelry" && hoverImages.jewelry && (
              <img
                src={hoverImages.jewelry}
                alt="jewelry preview"
                className="highlight-image"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
