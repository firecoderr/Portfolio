import React from "react";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <Header></Header>

      <div className="hero-section">
        {/* Social Medias */}
        <div className="social-medias">
          <a href="#" className="media-links">
            <p>Instagram</p>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="media-links">
            <p>Github</p>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="hero-text">
          <h1>Ulugbek Akhmedov</h1>
          <div className="frontend-text">
            <div className="line"></div>
            <p>Front-End</p>
          </div>
          <p>I'm a creative Designer and I'm very passionate to my work...</p>
          <button className="hero-button">
            Say Hello <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>

        <div className="hero-image-cover">
          <img
            src="./src/assets/avatar.JPG"
            alt="profile-image"
            className="profile-image"
          />
        </div>
      </div>
    </>
  );
}
