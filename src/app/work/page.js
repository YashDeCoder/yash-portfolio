import React from "react";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      {/* Sidebar - Mobile: Top section, Desktop: Left sidebar */}
      <aside className="md:w-64 lg:w-72 p-8 flex flex-col items-center md:items-start md:fixed md:h-screen">
        <div className="mb-6 relative">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-2  mb-6">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={20}
            height={20}
          />
          <span>Amsterdam, NL</span>
        </div>

        <div className="flex gap-2 mb-8">
          <button className="px-4 py-1 bg-black text-white rounded-full border border-gray-700">
            English
          </button>
          <button className="px-4 py-1 bg-black text-white rounded-full border border-gray-700">
            Dutch
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 md:ml-72 lg:ml-80 p-8">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            Yash Israni
          </h1>
          <h2 className="text-2xl text-gray-400 mb-6">Software Engineer</h2>

          <div className="flex gap-4 mb-8">
            <a
              className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/yash-israni/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/icons8-linkedin-50.png"
                alt="LinkedIn icon"
                width={16}
                height={16}
              />
              LinkedIn
            </a>
          </div>

          <p className="text-gray-200 max-w-2xl leading-relaxed font-mono">
            I am an Amsterdam-based software engineer with a passion for
            transforming complex challenges into simple, elegant solutions. My
            experience spans making dashboards, building design systems, and ...
          </p>
        </div>
        {/* Work Experience section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Work Experience
          </h2>

          {/* Current*/}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white">Labs Intern</h3>
                <p className="text-gray-400">Schuberg Philis</p>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0">2025 - Present</div>
            </div>

            <ul className="space-y-6 mt-6">
              <li className="flex gap-3">
                <div className="text-gray-400 mt-1.5">•</div>
                <p className="text-gray-200">
                  Currently working on a project to benchmark the performance of
                  a RAG (Retrieval-Augmented Generation) model, focusing on
                  optimizing its efficiency and accuracy.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="text-gray-400 mt-1.5">•</div>
                <p className="text-gray-200">
                  For this project, I am utilizing a combination of
                  <strong> Python, MongoDB and Multi-threading </strong>
                  to handle large datasets and improve processing.
                </p>
              </li>
            </ul>
          </div>

          {/* Second job */}
          <div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Front-End Developer
                </h3>
                <p className="text-gray-400">Alltrons B.V.</p>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0">2022-2024</div>
            </div>

            <ul className="space-y-6 mt-6">
              <li className="flex gap-3">
                <div className="text-gray-400 mt-1.5">•</div>
                <p className="text-gray-200">
                  Created dashboards and data visualizations for internal teams,
                  enabling data-driven decision-making and improving operational
                  efficiency.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="text-gray-400 mt-1.5">•</div>
                <p className="text-gray-200">
                  Made dashboards for clients, enhancing their ability to
                  understand and utilize their data effectively.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* Studies section preview */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Studies</h2>
          {/* Current */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  MSc in Computer Science
                </h3>
                <p className="text-gray-400">
                  University of Amsterdam & Vrije Universiteit Amsterdam
                </p>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0">2023 - Present</div>
            </div>

            <ul className="space-y-6 mt-6">
              <li className="flex gap-3">
                <div className="text-gray-400 mt-1.5">•</div>
                <p className="text-gray-200">
                  My favorite subjects include{" "}
                  <strong>AI (Web Data Processing Systems)</strong>,{" "}
                  <strong>Advanced Algorrithms</strong>, and{" "}
                  <strong>
                    Dynamic Programming and Reinforcement Learning
                  </strong>
                  .
                </p>
              </li>
            </ul>
          </div>
          {/* Bachelor */}
          <div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  BSc Computer Science & Engineering
                </h3>
                <p className="text-gray-400">
                  Technical University of Eindhoven
                </p>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0">2019-2023</div>
            </div>

            <ul className="space-y-6 mt-6">
              <li className="flex gap-3">
                <div className="text-gray-400 mt-1.5">•</div>
                <p className="text-gray-200">
                  My favorite subjects include <strong>Data Structures</strong>,{" "}
                  <strong>Algorrithms</strong>, and{" "}
                  <strong>
                    Programming Methods (Design Patterns and Principles)
                  </strong>
                  .
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
