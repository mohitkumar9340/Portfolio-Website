import React, { useState } from "react";
import Particle from "../Particle";
import { FiSend, FiMail, FiMapPin, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="relative px-4 pb-8 pt-28">
      <Particle />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="mb-2 text-center text-4xl font-semibold text-white">
          Get In <span className="text-purple-accent">Touch</span>
        </h1>
        <p className="mb-12 text-center text-gray-300">
          Feel free to reach out if you want to collaborate, have any
          questions, want to hire me, get mentorship, or just want to connect!
        </p>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Left: Contact Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-purple-accent/30 bg-black/20 p-6 shadow-md shadow-purple-accent/10"
            >
              <div className="mb-5">
                <label className="mb-1 block text-sm text-gray-300">
                  Name <span className="text-purple-accent">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-purple-accent/30 bg-dark-bg/60 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition focus:border-purple-accent"
                />
              </div>

              <div className="mb-5">
                <label className="mb-1 block text-sm text-gray-300">
                  Email <span className="text-purple-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-purple-accent/30 bg-dark-bg/60 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition focus:border-purple-accent"
                />
              </div>

              <div className="mb-5">
                <label className="mb-1 block text-sm text-gray-300">
                  Subject <span className="text-purple-accent">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-lg border border-purple-accent/30 bg-dark-bg/60 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition focus:border-purple-accent"
                />
              </div>

              <div className="mb-5">
                <label className="mb-1 block text-sm text-gray-300">
                  Message <span className="text-purple-accent">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project, question, or just say hello!"
                  className="w-full resize-none rounded-lg border border-purple-accent/30 bg-dark-bg/60 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition focus:border-purple-accent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-lg bg-purple-accent/80 px-6 py-2.5 font-medium text-white transition hover:bg-purple-accent disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="mt-4 flex items-center gap-2 text-green-400">
                  <FiCheckCircle />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 flex items-center gap-2 text-red-400">
                  <FiAlertCircle />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-6 md:col-span-2">
            <div className="rounded-2xl border border-purple-accent/30 bg-black/20 p-6 shadow-md shadow-purple-accent/10">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Let&apos;s Connect
              </h3>
              <p className="mb-6 text-sm text-gray-300">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a chat about technology.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-accent/20 text-purple-accent">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <a
                      href="mailto:mohitkumarmnitj@gmail.com"
                      className="text-sm text-white transition hover:text-purple-accent"
                    >
                      mohitkumarmnitj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-accent/20 text-purple-accent">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-sm text-white">New Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-white">
                  Follow Me
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/mohitkumar9340"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-purple-accent/30"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohitkumar9340/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-purple-accent/30"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://leetcode.com/u/mohitkumar9340/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-purple-accent/30"
                  >
                    <SiLeetcode />
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/profile/mohitkumar9340?tab=activity"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-purple-accent/30"
                  >
                    <SiGeeksforgeeks />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-purple-accent/30 bg-black/20 p-6 shadow-md shadow-purple-accent/10">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Why Work With Me?
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <FaBriefcase className="mt-0.5 shrink-0 text-purple-accent" />
                  2+ years of experience working with cloud infrastructure &amp; Full stack
                  development
                </li>
                <li className="flex items-start gap-2">
                  <FaGraduationCap className="mt-0.5 shrink-0 text-purple-accent" />
                  NIT Jaipur 2025 CSE Batch graduate with strong technical foundation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
