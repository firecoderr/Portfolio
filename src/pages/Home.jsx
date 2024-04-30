import React from "react";
import { useState } from "react";
import Avatar from "/Avatar.jpg";

export default function Home() {
  const [procategory, setProcategory] = useState("All");

  const [skills, setSkills] = useState({ frontend: true, nocode: false });

  const projects = [
    {
      img: "movie-mix.jpg",
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
      img: "streamline.jpg",
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
      img: "allshop.jpg",
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
      img: "mulih.jpg",
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
      img: "nature-skin.jpg",
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
          <a
            href="https://www.instagram.com/ulugbekk.a/"
            target="_blank"
            rel="noopener noreferrer"
            className="media-links"
          >
            <p>Instagram</p>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://github.com/firecoderr"
            target="_blank"
            rel="noopener noreferrer"
            className="media-links"
          >
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
      <section className="about-section" id="about">
        <div className="about-top">
          <h2>About</h2>
          <div>
            <img
              width={280}
              src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7464456-6109659.png?f=webp"
              alt="profile-image"
            />
            <div>
              <h2>"Passionate Developer"</h2>
              <p>
                My name is Ulugbek, and I'm a proficient frontend developer
                dedicated to crafting user-friendly digital experiences. With a
                keen eye for design and a passion for coding, I specialize in
                creating elegant and intuitive websites and applications. My
                commitment to excellence ensures that I deliver high-quality
                results that meet my clients' needs effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div class="skill-section">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzydXo9YYB2dFu_6O_b8SsY4u2ZTVOiG9OwT798zyGxQ&s" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" />
          <img src="https://w7.pngwing.com/pngs/887/757/png-transparent-framer-logos-brands-icon-thumbnail.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Tilda_Logo.png" />
        </div>
      </section>

      {/* Project Section */}
      <section className="project-section" id="projects">
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
