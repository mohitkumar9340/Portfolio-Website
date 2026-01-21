import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

function Home() {
  return (
    <section>
      <div className="relative overflow-hidden px-4 pb-8 pt-8 md:pt-12" id="home">
        <Particle />
        <div className="relative z-10 mx-auto mt-24 grid max-w-6xl items-center gap-10 text-left text-white md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
              Hi There!{" "}
              <span className="wave" role="img" aria-label="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="text-4xl font-semibold md:text-5xl">
                I'M
                <strong className="text-purple-accent"> MOHIT KUMAR</strong>
            </h1>
            <div className="mt-8">
              <Type />
            </div>
          </div>
          <div className="md:col-span-5">
            <img src={homeLogo} alt="home pic" className="h-auto max-h-[450px] w-full max-w-full" />
          </div>
        </div>
      </div>
      <Home2 />

      <div className="relative z-20 px-4 pb-20 pt-12">
        <div className="mx-auto max-w-6xl text-center text-white">
          <h2 className="text-3xl font-semibold">Find Me On</h2>
          <p className="mt-2">
            Feel free to <span className="text-purple-accent">connect </span>with me
          </p>
          <ul className="mt-6 flex justify-center gap-4">
            <li>
                <a
                  href="https://github.com/mohitkumar9340"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark-bg transition hover:-translate-y-0.5 hover:text-purple-accent"
                >
                  <AiFillGithub />
                </a>
            </li>
            <li>
                <a
                  href="https://www.linkedin.com/in/mohitkumar9340/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark-bg transition hover:-translate-y-0.5 hover:text-purple-accent"
                >
                  <FaLinkedinIn />
                </a>
            </li>
            <li>
                <a
                  href="https://leetcode.com/u/mohitkumar9340/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark-bg transition hover:-translate-y-0.5 hover:text-purple-accent"
                >
                  <SiLeetcode />
                </a>
            </li>
            <li>
                <a
                  href="https://www.geeksforgeeks.org/profile/mohitkumar9340?tab=activity"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark-bg transition hover:-translate-y-0.5 hover:text-purple-accent"
                >
                  <SiGeeksforgeeks />
                </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
