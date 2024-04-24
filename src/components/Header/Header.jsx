import React from "react";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", (event) => {
    console.log(event.target);
  });

  return (
    <>
      <header>
        <div className="header-container">
          <a href="#" className="header-logo">
            Ulugbek
          </a>

          <nav className={toggle ? "open" : ""}>
            <ul>
              <li>
                <a href="#" className="nav-link">
                  home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  about
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  projects
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  skills
                </a>
              </li>
              <li>
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
