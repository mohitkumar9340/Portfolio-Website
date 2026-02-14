import React from "react";
import { GitHubCalendar } from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center pb-3 text-white">
      <h2 className="pb-5 text-center text-4xl font-semibold">
        Days I <strong className="text-purple-accent">Code</strong>
      </h2>
      <div className="max-w-full overflow-x-auto rounded-xl border border-purple-accent/30 bg-black/10 p-4">
        <GitHubCalendar
          username="mohitkumar9340"
          blockSize={14}
          blockMargin={5}
          color="#c084f5"
          fontSize={14}
        />
      </div>
    </div>
  );
}

export default Github;
