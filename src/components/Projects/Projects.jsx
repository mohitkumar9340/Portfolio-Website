import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import compiler from "../../Assets/Projects/compiler.png";
import communityhero from "../../Assets/Projects/communityhero.png";

function Projects() {
  const projects = [
    {
      imgPath: communityhero,
      isBlog: false,
      title: "CommunityHero - Hyperlocal Community Platform",
      description:
        "CommunityHero is an AI-powered, gamified civic engagement platform designed to bridge the gap between citizens and municipal authorities. It streamlines the reporting, tracking, and resolution of civic issues (like potholes, broken streetlights, or waste management) using artificial intelligence and community-driven verification.",
      ghLink: "https://github.com/mohitkumar9340/Community-Hero",
      demoLink: "https://community-hero-h7l0.onrender.com",
    },
    {
      imgPath: compiler,
      isBlog: false,
      title: "Online Code Compiler & Judge",
      description:
        "An online judge platform hosting coding problems and challenges. Users can solve DSA and coding problems with real-time code evaluation. Built with Angular and Django, this platform supports multiple programming languages and provides immediate feedback on submissions.",
      ghLink: "https://github.com/mohitkumar9340/CodeRecipe",
      demoLink: "https://drive.google.com/file/d/1eNV_IPuIff3TIKxxpE5fcs7Ut4a5tFKw/view?usp=sharing",
    }
  ]
  return (
    <section className="relative px-4 pb-8 pt-32">
      <Particle />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-semibold text-white">
          My Recent <strong className="text-purple-accent">Works </strong>
        </h1>
        <p className="mt-2 text-center text-white">
          Here are some key projects and backend engineering highlights.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 pb-3 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
