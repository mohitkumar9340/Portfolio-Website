import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import CodingProfiles from "./CodingProfiles";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <section className="px-4 pb-8 pt-32 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <h1 className="mb-6 text-4xl font-semibold">
                Know Who <strong className="text-purple-accent">I'M</strong>
              </h1>
              <Aboutcard />
            </div>
            <div className="mx-auto w-full max-w-md pt-2 md:col-span-5 md:pt-16">
              <img src={laptopImg} alt="about" className="h-auto w-full max-w-full" />
            </div>
          </div>

          <h2 className="mt-8 text-center text-4xl font-semibold">
            Professional <strong className="text-purple-accent">Skillset </strong>
          </h2>
          <Techstack />

          <h2 className="mt-8 text-center text-4xl font-semibold">
            <strong className="text-purple-accent">Tools</strong> I use
          </h2>
          <Toolstack />

          <div className="mt-8">
            <CodingProfiles />
          </div>
          <div className="mt-8">
            <Github />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
