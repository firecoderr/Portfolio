import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  // const [scroll, setScroll] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolled ? "scroll" : ""}>
        <div className="header-container">
          <a href="\" className="header-logo">
            Ulugbek
          </a>

          <nav className={toggle ? "open" : ""}>
            <ul>
              <li onClick={() => setToggle(false)}>
                <a href="#" className="nav-link">
                  home
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a href="#about" className="nav-link">
                  about
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a href="#projects" className="nav-link">
                  projects
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a href="#" className="nav-link">
                  contacts
                </a>
              </li>
            </ul>
          </nav>

          <i
            className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
      </header>
    </>
  );
}
