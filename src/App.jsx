import React, { useState } from "react";
import Header from "./components/Header/Header";
import Avatar from "../public/Avatar.jpg";

export default function App() {
  const [procategory, setProcategory] = useState("all");

  return (
    <>
      <Header></Header>

      {/* Hero Section */}
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
          <img src={Avatar} alt="profile-image" className="profile-image" />
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-top">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            praesentium sequi obcaecati corporis amet quas ipsum incidunt nemo
            eveniet cumque id numquam tempore reiciendis, quod ullam eaque fugit
            nulla possimus!
          </p>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skill-item-container">
            <div className="skill-item">
              <i class="fa-brands fa-html5"></i>
              <h2>HTML5</h2>
            </div>

            <div className="skill-item">
              <i class="fa-brands fa-css3-alt"></i>
              <h2>CSS3</h2>
            </div>

            <div className="skill-item">
              <i class="fa-brands fa-js"></i>
              <h2>JavaScript</h2>
            </div>

            <div className="skill-item">
              <i class="fa-brands fa-react"></i>
              <h2>ReactJS</h2>
            </div>

            <div className="skill-item">
              <i class="fa-brands fa-bootstrap"></i>
              <h2>Bootstrap 5</h2>
            </div>

            <div className="skill-item">
              <img
                src="https://www.svgrepo.com/show/333609/tailwind-css.svg"
                alt="icon"
              />
              <h2>Tailwindcss</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="project-section">
        <div className="project-top">
          <h2>Projects</h2>
          <div className={`project-category ` + procategory}>
            <div
              onClick={() => {
                setProcategory("all");
              }}
            >
              <p>All</p>
            </div>
            <div
              onClick={() => {
                setProcategory("react");
              }}
            >
              <p>ReactJS</p>
            </div>
            <div
              onClick={() => {
                setProcategory("framer");
              }}
            >
              <p>Framer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
