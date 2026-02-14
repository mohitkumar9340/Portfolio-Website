import React, { useState, useEffect } from "react";

const barColors = {
  School: "bg-blue-400",
  Basic: "bg-teal-400",
  Easy: "bg-green-500",
  Medium: "bg-yellow-500",
  Hard: "bg-red-500",
};

const textColors = {
  School: "text-blue-400",
  Basic: "text-teal-400",
  Easy: "text-green-400",
  Medium: "text-yellow-400",
  Hard: "text-red-400",
};

function StatCard({ title, accent, data, items }) {
  return (
    <div className="flex-1 rounded-xl border border-purple-accent/30 bg-black/10 p-5">
      <h3 className={`mb-4 text-xl font-bold ${accent}`}>{title}</h3>
      {data ? (
        <>
          <p className="mb-3 text-2xl font-bold">
            {data.totalSolved ?? data.totalProblemsSolved}
            {data.totalQuestions && (
              <span className="ml-1 text-sm font-normal text-gray-400">
                / {data.totalQuestions}
              </span>
            )}
          </p>
          {items.map(({ label, key }) => (
            <div key={label} className="mb-2">
              <div className="mb-1 flex justify-between text-sm">
                <span className={textColors[label]}>{label}</span>
                <span>{data[key]}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full transition-all ${barColors[label]}`}
                  style={{
                    width: `${((data[key] ?? 0) / (data.totalSolved ?? data.totalProblemsSolved)) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
          {data.ranking && (
            <p className="mt-4 text-sm text-gray-400">
              Ranking: <span className="text-white">{data.ranking.toLocaleString()}</span>
            </p>
          )}
          {data.acceptanceRate && (
            <p className="text-sm text-gray-400">
              Acceptance: <span className="text-white">{data.acceptanceRate}%</span>
            </p>
          )}
        </>
      ) : (
        <p className="text-gray-400">Failed to load stats</p>
      )}
    </div>
  );
}

function CodingProfiles() {
  const [leetCode, setLeetCode] = useState(null);
  const [gfg, setGfg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [lcRes, gfgRes] = await Promise.all([
          fetch("https://leetcode-stats.tashif.codes/mohitkumar9340"),
          fetch("https://gfg-stats.tashif.codes/mohitkumar9340"),
        ]);
        if (lcRes.ok) {
          const d = await lcRes.json();
          d.totalSolved = d.totalSolved || 0;
          d.totalQuestions = d.totalQuestions || 1;
          setLeetCode(d);
        }
        if (gfgRes.ok) {
          const d = await gfgRes.json();
          d.totalProblemsSolved = d.totalProblemsSolved || 0;
          setGfg(d);
        }
      } catch (err) {
        console.error("Failed to fetch coding stats", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center pb-3 text-white">
        <h2 className="pb-5 text-center text-4xl font-semibold">
          Coding <strong className="text-purple-accent">Profiles</strong>
        </h2>
        <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 animate-pulse rounded-xl border border-purple-accent/30 bg-black/10 p-5">
              <div className="mb-4 h-6 w-24 rounded bg-white/10" />
              <div className="mb-3 h-8 w-20 rounded bg-white/10" />
              {[1, 2, 3].map((j) => (
                <div key={j} className="mb-3">
                  <div className="mb-1 h-3 w-full rounded bg-white/10" />
                  <div className="h-2 w-full rounded bg-white/10" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pb-3 text-white">
      <h2 className="pb-5 text-center text-4xl font-semibold">
        Coding <strong className="text-purple-accent">Profiles</strong>
      </h2>
      <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row">
        <StatCard
          title="LeetCode"
          accent="text-orange-400"
          data={leetCode}
          items={[
            { label: "Easy", key: "easySolved" },
            { label: "Medium", key: "mediumSolved" },
            { label: "Hard", key: "hardSolved" },
          ]}
        />
        <StatCard
          title="GeeksforGeeks"
          accent="text-green-400"
          data={gfg}
          items={[
            { label: "School", key: "School" },
            { label: "Basic", key: "Basic" },
            { label: "Easy", key: "Easy" },
            { label: "Medium", key: "Medium" },
            { label: "Hard", key: "Hard" },
          ]}
        />
      </div>
    </div>
  );
}

export default CodingProfiles;
