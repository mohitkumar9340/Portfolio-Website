import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => updateNavbar(window.scrollY >= 20);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        navColour
          ? "bg-slate-950/70 shadow-lg backdrop-blur-md"
          : "bg-dark-bg/30"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center" onClick={() => updateExpanded(false)}>
          <img src={logo} className="h-6 w-10 object-contain" alt="brand" />
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-purple-accent/40 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={expand}
          onClick={() => {
            updateExpanded((state) => !state);
          }}
        >
          <span className={`h-0.5 w-6 bg-purple-accent transition ${expand ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-purple-accent transition ${expand ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-purple-accent transition ${expand ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
        <div
          className={`absolute left-0 top-full w-full bg-slate-950/95 px-4 pb-4 md:static md:w-auto md:bg-transparent md:p-0 ${
            expand ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-1">
            <li>
              <Link to="/" onClick={() => updateExpanded(false)} className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-white transition hover:text-purple-accent">
                <AiOutlineHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => updateExpanded(false)} className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-white transition hover:text-purple-accent">
                <AiOutlineUser /> About
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={() => updateExpanded(false)} className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-white transition hover:text-purple-accent">
                <FaBriefcase /> Experience
              </Link>
            </li>
            <li>
              <Link to="/project" onClick={() => updateExpanded(false)} className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-white transition hover:text-purple-accent">
                <AiOutlineFundProjectionScreen /> Projects
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={() => updateExpanded(false)} className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-white transition hover:text-purple-accent">
                <CgFileDocument /> Resume
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => updateExpanded(false)} className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-white transition hover:text-purple-accent">
                <FiMail /> Contact
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/mohitkumar9340/Portfolio-Website"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-purple-accent/60 bg-purple-accent/20 px-3 py-2 text-white transition hover:-translate-y-0.5 hover:bg-purple-accent/30"
              >
                <CgGitFork className="text-lg" />
                <AiFillStar className="text-base" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
