"use client";

import Bg from "@/components/bg";
import { Be_Vietnam_Pro } from "next/font/google";
import HeroContent from "@/components/hero-content";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export default function Home() {
  const teamMembers = Array(6).fill(0); // Placeholder for 6 team members

  return (
    <>
      <div className="bg-[url('/noise.png')] bg-no-repeat bg-cover fixed w-[100vw] h-[100vh]"></div>

      {/* Hero Section */}
      <div className={`${beVietnamPro.className} h-screen pt-40`}>
        <HeroContent />
      </div>

      {/* About Us Section */}
      <section className="bg-white text-black py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            More information about Solaris as a hackathon and the team.
          </p>

          <div className="mt-16 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            {/* Left Column: Avatars */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-3 gap-6">
                {teamMembers.map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-2 font-semibold text-gray-800">
                      Team Member
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 leading-relaxed">
                Solaris is more than just a hackathon; it's a launchpad for the
                next generation of innovators, thinkers, and builders. Our
                mission is to create an environment where creativity thrives and
                students can push the boundaries of technology to solve
                real-world challenges. We believe in the power of collaboration
                and provide the resources, mentorship, and platform for high
                schoolers to bring their most ambitious ideas to life.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our team is composed of passionate students and industry
                professionals dedicated to fostering a love for technology and
                problem-solving. We work year-round to organize a world-class
                event that is not only challenging but also inclusive and fun.
                From logistics and sponsorships to workshop planning and mentor
                outreach, we are the driving force ensuring every participant
                has an unforgettable and rewarding experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
