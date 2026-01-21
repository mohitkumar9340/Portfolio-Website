import React from "react";
import Django from "../../Assets/TechIcons/Django.svg";
import Flask from "../../Assets/TechIcons/Flask.svg";
import FastAPI from "../../Assets/TechIcons/FastAPI.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import next from "../../Assets/TechIcons/Next.svg";
import html from "../../Assets/TechIcons/HTML5.svg";
import css from "../../Assets/TechIcons/CSS3.svg";
import express from "../../Assets/TechIcons/Express.svg";
import Angular from "../../Assets/TechIcons/Angular.svg";
import RabbitMQ from "../../Assets/TechIcons/RabbitMQ.svg";

const iconCardClass =
  "flex w-1/3 items-center justify-center gap-2 rounded-2xl border border-purple-accent/40 bg-black/20 px-4 py-3 text-white shadow-sm shadow-purple-accent/10 transition hover:-translate-y-1 hover:border-purple-accent md:w-1/6";

function Techstack() {
  const items = [
    { icon: <img src={Python} alt="Python" />, label: "Python" },
    { icon: <img src={Django} alt="Django" />, label: "Django" },
    { icon: <img src={Flask} alt="Flask" />, label: "Flask" },
    { icon: <img src={FastAPI} alt="FastAPI" />, label: "FastAPI" },
    { icon: <img src={html} alt="HTML" />, label: "HTML" },
    { icon: <img src={css} alt="CSS" />, label: "CSS" },
    { icon: <img src={Javascript} alt="javascript" />, label: "Javascript" },
    { icon: <img src={Node} alt="node" />, label: "Node.Js" },
    { icon: <img src={express} alt="express" />, label: "Express.Js" },
    { icon: <img src={ReactIcon} alt="react" />, label: "React.Js" },
    { icon: <img src={next} alt="Next.js" />, label: "Next.js" },
    { icon: <img src={Redux} alt="redux" />, label: "Redux" },
    { icon: <img src={Mongo} alt="mongoDb" />, label: "Mongo DB" },
    { icon: <img src={Typescript} alt="typescript" />, label: "Typescript" },
    { icon: <img src={Angular} alt="angular" />, label: "Angular" },
    { icon: <img src={Tailwind} alt="tailwind" />, label: "Tailwind CSS" },
    { icon: <img src={MUI} alt="mui" />, label: "Material UI" },
    { icon: <img src={C} alt="C++" />, label: "C++" },
    { icon: <img src={Java} alt="Java" />, label: "Java" },
    { icon: <img src={Firebase} alt="firebase" />, label: "Firebase" },
    { icon: <img src={SQL} alt="SQL" />, label: "Postgresql" },
    { icon: <img src={Redis} alt="redis" />, label: "Redis" },
    { icon: <img src={Docker} alt="docker" />, label: "Docker" },
    { icon: <img src={RabbitMQ} alt="RabbitMQ" />, label: "RabbitMQ" },
    { icon: <img src={Kafka} alt="Kafka" />, label: "Kafka"},
    { icon: <img src={Kubernates} alt="kubernetes" />, label: "Kubernetes" },
    { icon: <img src={AWS} alt="AWS" />, label: "AWS" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 pb-12 pt-6">
      {items.map((item) => (
        <div key={item.label} className={iconCardClass}>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center">
            {item.icon}
          </span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
