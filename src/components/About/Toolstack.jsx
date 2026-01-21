import React from "react";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import git from "../../Assets/TechIcons/Git.svg";
import postman from "../../Assets/TechIcons/Postman.svg";
import linux from "../../Assets/TechIcons/Linux.svg";
import swagger from "../../Assets/TechIcons/Swagger.svg";

function Toolstack() {
  const tools = [
    {icon: linux, label: "Linux", alt: "linux"},
    { icon: git, label: "Git", alt: "git" },
    { icon: chrome, label: "Google Chrome", alt: "Chrome" },
    { icon: vsCode, label: "Vs Code", alt: "vsCode" },
    { icon: postman, label: "Postman", alt: "postman" },
    { icon: linux, label: "Linux", alt: "linux" },
    { icon: swagger, label: "Swagger", alt: "swagger" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 pb-12 pt-6">
      {tools.map((tool) => (
        <div
          key={tool.label}
          className="flex w-1/3 items-center justify-center gap-2 rounded-2xl border border-purple-accent/40 bg-black/20 px-4 py-3 text-white shadow-sm shadow-purple-accent/10 transition hover:-translate-y-1 hover:border-purple-accent md:w-1/6"
        >
          <img src={tool.icon} alt={tool.alt} className="h-6" />
          <span>{tool.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
