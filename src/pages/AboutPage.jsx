import React from "react";
import "../styles/AboutPage.css"; // Make sure to create this!

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h3 className="about-title">I'm glad you're here!</h3>

        <p className="about-text">
          But please don't try to buy anything. This page only exists for
          learning purposes and none of the items displayed on this site are for
          sale here, because I don't own them.
        </p>

        <p className="about-text">
          Since you bothered to check this out, here's the cat tax for taking
          your time:
        </p>

        <div className="cat-tax">
          {/* Put Gitty here */}
          <img
            src="https://placekitten.com/400/300"
            alt="Cat tax! You earned this."
            className="cat-image"
          />
        </div>
      </div>
    </div>
  );
}
