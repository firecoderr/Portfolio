import React from "react";
import { useState } from "react";
import Avatar from "/public/Avatar.jpg";

export default function Home() {
  const [procategory, setProcategory] = useState("All");

  const [skills, setSkills] = useState({ frontend: true, nocode: false });

  const projects = [
    {
      img: "./public/movie-mix.jpg",
      title: "MovieMix",
      category: "ReactJS",
      filter: "All ReactJS",
      demoLink: "https://firecoderr.github.io/movie-app/",
      details: {
        description: "MovieMix - movie watching room with newest movies",
        pages: ["Home", "Movie Details", "Sign Up & Sign In", "Favourite List"],
        techs: ["ViteJS", "React JS", "CSS3"],
      },
    },

    {
      img: "./public/streamline.jpg",
      title: "Streamline",
      filter: "All Framer",
      category: "Framer",
      demoLink: "https://streamline-blog.framer.website/",
      details: {
        description: "",
        pages: ["Home", "Details page", "Cart list", "Sign Up & Sign In"],
        techs: ["Framer", "Figma"],
      },
    },

    {
      img: "./public/allshop.jpg",
      title: "AllShop",
      filter: "All ReactJS",
      category: "ReactJS",
      demoLink: "https://firecoderr.github.io/AllShop/",
      details: {
        description:
          "AllShop - Ecommerce website where you can buy products, such as televisins, phones, clothes, jewelry, etc.",
        pages: ["Home", "Movie Details", "Cart list", "Sign Up & Sign In"],
        techs: ["ViteJS", "React JS", "BootStrap5", "AnimateCSS"],
      },
    },

    {
      img: "./public/mulih.jpg",
      title: "Mulih",
      filter: "All Framer",
      category: "Framer",
      demoLink: "https://mulih.framer.website/",
      details: {
        description: "",
        pages: ["Home", "Details page", "Cart list", "Sign Up & Sign In"],
        techs: ["Framer", "Figma"],
      },
    },

    {
      img: "./public/nature-skin.jpg",
      title: "NatureSkin",
      filter: "All Framer",
      category: "Framer",
      demoLink: "https://natureskin.framer.website/",
      details: {
        description: "",
        pages: ["Home", "Details page", "Cart list", "Sign Up & Sign In"],
        techs: ["Framer", "Figma"],
      },
    },
  ];

  const filteredProject = projects.filter((item) => {
    if (procategory === "All") {
      return item.filter.includes("");
    } else {
      return item.filter.includes(procategory);
    }
  });

  console.log(filteredProject);
  return (
    <>
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

        {/* Front-End Sklills */}
        <div
          className={
            skills.frontend ? "skills frontend open" : "skills frontend"
          }
        >
          <div
            onClick={() => {
              setSkills({ ...skills, frontend: !skills.frontend });
            }}
            className="toggle-skills"
          >
            <h3>Skills</h3>

            <i class="fa-solid fa-plus"></i>
          </div>

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

        {/* No Code Skills */}
        <div className={skills.nocode ? "skills nocode open" : "skills nocode"}>
          <div
            onClick={() => {
              setSkills({ ...skills, nocode: !skills.nocode });
            }}
            className="toggle-skills"
          >
            <h3>No Code Skills</h3>

            <i class="fa-solid fa-plus"></i>
          </div>

          <div className="skill-item-container">
            <a href="https://www.framer.com" className="skill-item">
              {/* <i class="fa-brands fa-html5"></i> */}
              <img
                src="https://www.svgrepo.com/show/364527/framer-logo-fill.svg"
                alt="framer"
              />
              <h2>
                Framer
                <i class="fa-solid fa-arrow-right"></i>
              </h2>
            </a>

            <a href="https://www.figma.com/de" className="skill-item">
              {/* <i class="fa-brands fa-css3-alt"></i> */}
              <img
                src="https://static-00.iconduck.com/assets.00/figma-icon-1024x1024-mvfh9xsk.png"
                alt="tilda"
              />
              <h2>
                Figma
                <i class="fa-solid fa-arrow-right"></i>
              </h2>
            </a>

            <a href="https://tilda.cc/de" className="skill-item">
              {/* <i class="fa-brands fa-css3-alt"></i> */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Tilda_Logo.png"
                alt="tilda"
              />
              <h2>
                Tilda
                <i class="fa-solid fa-arrow-right"></i>
              </h2>
            </a>
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
                setProcategory("All");
              }}
            >
              <p>All</p>
            </div>
            <div
              onClick={() => {
                setProcategory("ReactJS");
              }}
            >
              <p>ReactJS</p>
            </div>
            <div
              onClick={() => {
                setProcategory("Framer");
              }}
            >
              <p>Framer</p>
            </div>
          </div>
        </div>

        {/* WORKING HERE MOMENTAN */}
        <div className="project-container">
          {filteredProject.map((item) => (
            <a
              href={item.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item"
              key={`project-item-${crypto.randomUUID()}`}
            >
              <img src={item.img} alt="project-image" />
              <div className="top-text">
                <h3>{item.title}</h3>
                <div className="project-category">
                  <p>{item.category}</p>
                </div>
              </div>
              {/* <a href={item.demoLink}>
                <button>
                  <p>view demo</p>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </a> */}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
