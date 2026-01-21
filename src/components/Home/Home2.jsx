import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <div className="px-4 py-16" id="about">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-12">
        <div className="text-center text-white md:col-span-8 md:text-left">
          <h1 className="text-4xl font-semibold md:text-5xl">
            LET ME <span className="text-purple-accent"> INTRODUCE </span> MYSELF
          </h1>
          <p className="mt-8 text-lg leading-relaxed">
              Backend Software Engineer with 1.5 years of experience building
              scalable, distributed cloud systems.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="text-purple-accent">
                  {" "}
                  Python, Django, Django Rest Framework, FastAPI, React, Angular, Typescript and SQL{" "}
                </b>
              </i>
              — with hands-on experience in asynchronous workflows and
              microservices architecture.
              <br />
              <br />
              My core strengths include
              <i>
                <b className="text-purple-accent">
                  {" "}
                  Data Structures & Algorithms, Object-Oriented Programming,
                  System Design,{" "}
                </b>
              </i>
              and building reliable backend platforms.
              <br />
              <br />
              I currently work as an{" "}
              <b className="text-purple-accent">Associate Software Engineer </b>
              at E2E Networks in New Delhi.
              <br />
              <br />
              I enjoy building with
              <i>
                <b className="text-purple-accent">Django, Celery, MySQL,</b> and{" "}
                <b className="text-purple-accent">cloud-native tools.</b>
              </i>
          </p>
        </div>
        <div className="mx-auto max-w-xs md:col-span-4 md:max-w-sm">
          <Tilt>
            <img src={myImg} className="h-auto w-full max-w-full" alt="avatar" />
          </Tilt>
        </div>
      </div>
    </div>
  );
}
export default Home2;
