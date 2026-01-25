import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, isBlog, title, description, ghLink, demoLink }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-purple-accent/30 bg-black/20 p-4 shadow-md shadow-purple-accent/10 transition hover:scale-[1.02] hover:shadow-purple-accent/20">
      <img src={imgPath} alt="card-img" className="h-48 w-full rounded-xl object-cover" />
      <div className="mt-4 flex grow flex-col">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 grow text-justify text-sm text-gray-200">{description}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={ghLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-purple-accent/80 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-accent"
          >
            <BsGithub />
            {isBlog ? "Blog" : "GitHub"}
          </a>
          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-purple-accent/70 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-accent/20"
            >
              <CgWebsite />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
export default ProjectCards;
