import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="rounded-2xl border border-purple-accent/40 bg-black/15 p-6 text-left shadow-md shadow-purple-accent/10">
      <blockquote className="mb-0">
        <p className="text-justify leading-relaxed">
            Hi everyone! I’m <span className="text-purple-accent">Mohit Kumar</span>{" "}
            from <span className="text-purple-accent">New Delhi, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="text-purple-accent">Associate Software Engineer</span> at{" "}
            <span className="text-purple-accent">E2E Networks Ltd.</span>.
            <br />I hold a B.Tech in{" "}
            <span className="text-purple-accent">Computer Science and Engineering</span> from{" "}
            <span className="text-purple-accent">NIT Jaipur</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
        </p>

        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-2">
              <ImPointRight /> Solving DSA problems (1000+ solved)
          </li>
          <li className="flex items-center gap-2">
              <ImPointRight /> Building scalable backend systems
          </li>
          <li className="flex items-center gap-2">
              <ImPointRight /> Exploring distributed systems and cloud architecture
          </li>
        </ul>

        <p className="mt-6 text-purple-200">"Build reliable systems that make a real impact."</p>
        <footer className="mt-2 text-purple-300/90">Mohit Kumar</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
