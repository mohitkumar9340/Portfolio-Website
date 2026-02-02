import React from "react";
import Particle from "../Particle";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { MdDateRange, MdLocationOn } from "react-icons/md";

const timeline = [
  {
    type: "section",
    label: "Work Experience",
    icon: <FaBriefcase className="text-purple-accent" />,
  },
  {
    side: "left",
    title: "Associate Software Engineer",
    company: "E2E Networks Ltd.",
    location: "New Delhi, India",
    type: "Full-time",
    date: "Jul 2025 - Present",
    bullets: [
      "Improved E2E's managed Continuous Data Protection (CDP) services based on R1Soft Backup Manager, overhauling the legacy codebase, reducing backup failure rates by 80%.",
      "Engineered backup archival and recovery pipelines using MinIO and R1Soft SOAP APIs, enabling custom S3/MinIO storage integrations and configurable retention policies. Implemented fault-tolerant file-level and bare-metal VM restores for 500+ enterprise clients.",
      "Added AES-256 encryption support in CDP backups and resolved delayed status synchronization by using asynchronous Celery pollers and cron-based reconciliation jobs, driving a 30% increase in process reliability.",
      "Worked on Audit Logging and Activity Timeline across services (Compute, VPC, DBaaS, Load Balancers, Kubernetes, Autoscaling), surfacing comprehensive event metadata to show customers a chronological history of all actions performed on their resources.",
      "Refactored the Zabbix monitoring codebase to add Chennai Region support and resolved false alert anomalies caused by stale hosts, resulting in a 40% reduction in manual ops team support tickets.",
      "Launched monthly installment billing feature for postpaid customers with committed plans, allowing flexible payments over upfront costs. Successfully generated estimates and invoices for over 2,000 resources and used by 100+ customers.",
    ],
    tags: [
      "Python",
      "Django",
      "Celery",
      "REST APIs",
      "MySQL",
      "Linux",
      "OpenNebula",
      "MinIO",
    ],
  },
  {
    side: "right",
    title: "Software Engineering Intern",
    company: "E2E Networks Ltd.",
    location: "New Delhi, India",
    type: "Internship",
    date: "Jan 2025 - Jun 2025",
    bullets: [
      "Created an internal Django Admin feature utilizing asynchronous migration scripts to automate transferring of cloud resources between customer accounts, streamlining operations workflows.",
      "Owned the root email change feature, debugging production edge-cases and resolving post-modification resource failures, driving a 90% reduction in Zoho support tickets and improving overall reliability.",
      "Integrated Zoho APIs to deploy a Security Operations Center (SOC) module, automating the detection, ticketing, and mitigation of 50+ malicious VMs per month.",
      "Streamlined IT support operations by engineering Zoho webhooks and Django REST APIs to automate real-time ticket synchronization between Zoho Desk and the customer dashboard.",
    ],
    tags: ["Python", "Django", "REST APIs", "Zoho APIs", "MySQL"],
  },
  {
    type: "section",
    label: "Education",
    icon: <FaGraduationCap className="text-purple-accent" />,
  },
  {
    side: "right",
    title: "B.Tech in Computer Science & Engineering",
    company: "Malaviya National Institute of Technology (NIT Jaipur)",
    location: "Jaipur, India",
    type: "CGPA: 7.75",
    date: "2021 - 2025",
    bullets: [
      "Relevant coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Graph Theory, Software Engineering, Operating Systems, Machine Learning, Web Development.",
    ],
    tags: [],
  },
  {
    side: "left",
    title: "Senior Secondary (12th Grade)",
    company: "Engineer's Point Sr. Sec. School, Kharthal (RBSE)",
    location: "Kharthal, India",
    type: "Science Stream",
    date: "2018 - 2020",
    bullets: [
      "Science stream with Physics, Chemistry, Mathematics and Computer Science. Strong foundation in analytical thinking and problem-solving.",
      "Percentage: 94.40%",
    ],
    tags: [],
  },
  {
    side: "right",
    title: "Secondary School Certificate (10th Grade)",
    company: "Rao Jagmail Sr. Sec. School, Dhelawas (RBSE)",
    location: "Dhelawas, India",
    type: "",
    date: "2017-2018",
    bullets: [
      "Percentage: 92.67%",
    ],
    tags: [],
  },
];

function TimelineCard({ entry, index }) {
  const isLeft = entry.side === "left";

  return (
    <div className="mb-12 flex flex-col md:flex-row md:items-center">
      {/* Card */}
      <div
        className={`w-full md:w-1/2 ${
          isLeft ? "md:order-1 md:pr-10" : "md:order-3 md:pl-10"
        }`}
      >
        <div className="rounded-2xl border border-purple-accent/30 bg-black/20 p-6 shadow-md shadow-purple-accent/10 transition hover:scale-[1.02]">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-white">{entry.title}</h3>
            <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-purple-accent/15 px-3 py-1 text-sm text-purple-accent">
              <MdDateRange />
              {entry.date}
            </span>
          </div>
          <p className="mb-3 text-sm text-gray-300">
            <span className="font-semibold text-purple-accent">
              {entry.company}
            </span>
            {" · "}
            <span className="inline-flex items-center gap-1">
              <MdLocationOn />
              {entry.location}
            </span>
            {entry.type && (
              <>
                {" · "}
                <span>{entry.type}</span>
              </>
            )}
          </p>
          <ul className="mb-4 space-y-2 text-sm leading-relaxed text-gray-200">
            {entry.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-accent" />
                {bullet}
              </li>
            ))}
          </ul>
          {entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-purple-accent/40 px-3 py-1 text-xs text-purple-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dot */}
      <div className="flex justify-center md:order-2 md:w-0">
        <div className="z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-purple-accent bg-dark-bg">
          <div className="h-2 w-2 rounded-full bg-purple-accent" />
        </div>
      </div>

      {/* Spacer */}
      <div
        className={`hidden md:block md:w-1/2 ${
          isLeft ? "md:order-3" : "md:order-1"
        }`}
      />
    </div>
  );
}

function Experience() {
  return (
    <section className="relative px-4 pb-8 pt-28">
      <Particle />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="mb-2 text-center text-4xl font-semibold text-white">
          My <span className="text-purple-accent">Journey</span>
        </h1>
        <p className="mb-12 text-center text-gray-300">
          Here&apos;s a timeline of my professional experience and educational
          background.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-purple-accent/30 md:block" />

          {timeline.map((entry, index) => {
            if (entry.type === "section") {
              return (
                <div
                  key={entry.label}
                  className="relative mb-6 mt-10 flex items-center justify-center gap-3 bg-dark-bg py-2 first:mt-0"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-purple-accent/40 bg-purple-accent/10 px-5 py-2 text-lg font-semibold text-purple-accent">
                    {entry.icon}
                    {entry.label}
                  </span>
                </div>
              );
            }
            return <TimelineCard key={index} entry={entry} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
