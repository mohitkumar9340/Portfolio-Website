import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="min-h-12 text-left">
      <Typewriter
        options={{
          strings: [
            "Backend Software Engineer",
            "Django Developer",
            "Cloud Systems Engineer",
            "Problem Solver",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
