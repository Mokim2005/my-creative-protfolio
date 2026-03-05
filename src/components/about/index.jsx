import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        {/* About Text */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Passionate Full Stack Developer
          </h2>

          <p className="font-light text-xs sm:text-sm md:text-base">
            I am a Computer Science student passionate about building modern,
            responsive, and user-friendly web applications using React.js and
            Next.js. I focus on clean UI, authentication systems, role-based
            features, and real-world projects. My goal is to continuously
            improve my skills and grow as a professional developer.
          </p>
        </ItemLayout>

        {/* Projects */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">projects built</sub>
          </p>
        </ItemLayout>

        {/* Learning */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Always <sub className="font-semibold text-base">learning</sub>
          </p>
        </ItemLayout>

        {/* Skills Section */}
        <ItemLayout className="col-span-full !p-0">
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <img
              src="https://skillicons.dev/icons?i=js"
              alt="JavaScript"
              title="JavaScript"
              className="w-20 h-20 hover:scale-110 transition-transform duration-300"
            />

            <img
              src="https://skillicons.dev/icons?i=react"
              alt="React"
              title="React.js"
              className="w-20 h-20 hover:scale-110 transition-transform duration-300"
            />

            <img
              src="https://skillicons.dev/icons?i=nextjs"
              alt="Next.js"
              title="Next.js"
              className="w-20 h-20 hover:scale-110 transition-transform duration-300"
            />

            <img
              src="https://skillicons.dev/icons?i=nodejs"
              alt="Node.js"
              title="Node.js"
              className="w-20 h-20 hover:scale-110 transition-transform duration-300"
            />

            <img
              src="https://skillicons.dev/icons?i=express"
              alt="Express.js"
              title="Express.js"
              className="w-20 h-20 hover:scale-110 transition-transform duration-300"
            />

            <img
              src="https://skillicons.dev/icons?i=mongodb"
              alt="MongoDB"
              title="MongoDB"
              className="w-20 h-20 hover:scale-110 transition-transform duration-300"
            />

            <img
              src="https://skillicons.dev/icons?i=tailwind"
              alt="Tailwind CSS"
              title="Tailwind CSS"
              className="w-20 h-20 hover:scale-110 transition-transform duration-300"
            />

            <img
              src="https://skillicons.dev/icons?i=git"
              alt="Git"
              title="Git"
              className="w-20 h-20 hover:scale-110 transition-transform duration-300"
            />

            <img
              src="https://skillicons.dev/icons?i=firebase"
              alt="Firebase"
              title="Firebase"
              className="w-20 h-20 hover:scale-110 transition-transform duration-300"
            />
          </div>
        </ItemLayout>

        {/* GitHub Streak */}
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Mokim2005&theme=dark&hide_border=true"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>
        {/* Strengths */}
        <ItemLayout className="col-span-full md:col-span-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Strengths</h3>
            <ul className="list-disc list-inside text-sm opacity-80">
              <li>Clean and responsive UI design</li>
              <li>Role-based authentication systems</li>
              <li>Full stack project structure</li>
              <li>Problem solving mindset</li>
            </ul>
          </div>
        </ItemLayout>

        {/* Goal */}
        <ItemLayout className="col-span-full md:col-span-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Current Focus</h3>
            <p className="text-sm opacity-80">
              Improving advanced backend development, building scalable
              projects, and preparing for professional job opportunities.
            </p>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
