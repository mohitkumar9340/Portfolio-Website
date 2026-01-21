import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 py-3">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 text-center text-sm text-white md:grid-cols-3 md:items-center">
        <p>Designed and Developed by Mohit Kumar</p>
        <p>Copyright © {year} MK</p>
        <ul className="flex items-center justify-center gap-5 text-xl">
          <li>
            <a href="https://github.com/mohitkumar9340" target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-accent">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohitkumar9340/" target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-accent">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/mohitkumar9340/" target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-accent">
              <SiLeetcode />
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/profile/mohitkumar9340?tab=activity" target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-accent">
              <SiGeeksforgeeks />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
