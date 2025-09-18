"use client";

import Bg from "@/components/bg";
import { Be_Vietnam_Pro } from "next/font/google";
import HeroContent from "@/components/hero-content";
import ScrollIndicator from "@/components/ScrollIndicator";
import Image from "next/image";
import { Instagram, Github, Layers } from "lucide-react";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

// FAQ Data - UPDATED
const faqsLeft = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where students come together to turn their ideas into reality through coding, designing, and building projects. Think of it as an invention marathon where you can learn new skills, meet amazing people, and create something awesome!",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all! Hackathons are perfect for beginners. We'll have workshops, mentors, and resources to help you learn. Many participants come with zero coding experience and leave having built their first project.",
  },
  {
    question: "Who can participate?", // REPLACED "What should I bring?"
    answer:
      "Solaris is open to all high school students from around the world. Whether you're a seasoned coder or a complete beginner, we welcome you to join us!",
  },
  {
    question: "Where will the hackathon be held?",
    answer:
      "The hackathon will be held entirely online! All activities, workshops, and project submissions will be managed through Devpost, allowing you to participate from the comfort of your own home.",
  },
];

const faqsRight = [
  {
    question: "What can I build?",
    answer:
      "Anything! Websites, apps, games, hardware projects - the sky's the limit. We'll have themed prize tracks and sponsors who can help guide your project, but you're free to build whatever interests you most.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Nothing! The event is completely free for all participants, thanks to our generous sponsors. You'll get access to all workshops, mentorship, and competitions at no cost.",
  },
  {
    question: "Do I need a team?",
    answer:
      "Nope! You can come solo and find a team at the event, or work alone if you prefer. We'll have team formation activities at the start to help you find people with complementary skills and interests.",
  },
  {
    question: "When is the hackathon?",
    answer:
      "Solaris will take place from October 10th to October 11th, 2025. Mark your calendars for an unforgettable weekend of innovation and fun!",
  },
];

const timelineData = [
  { isDateHeader: true, date: "Friday, October 10, 2025" },
  {
    time: "5:00PM EDT",
    title: "Opening Ceremony & Keynote",
    description:
      "We will introduce the hackathon theme, and we will have a keynote speaker.",
  },
  { time: "6:00PM EDT", title: "Hacking Begins!", description: "" },
  {
    time: "10:00PM EDT",
    title: "Late Night Gaming Session",
    description:
      "Hop on with the organizers and fellow participants to play some games.",
  },
  { isDateHeader: true, date: "Saturday, October 11, 2025" },
  {
    time: "12:00PM EDT",
    title: "Lunch Break (on your own time) & Mid-Hack Check-in",
    description:
      "Eat food and we will check in with how your project is going and provide assistance.",
  },
  {
    time: "5:00PM EDT",
    title: "Hacking ends & Submissions due",
    description: "",
  },
  {
    time: "5:30PM EDT",
    title: "Project Demos and Judging Period",
    description:
      "You will join breakout rooms with the judges and show 5 minute live demos and they will judge your project.",
  },
  {
    time: "7:30PM EDT",
    title: "Closing Ceremony & Prize Announcements",
    description: "",
  },
];

const teamData = [
  {
    name: "Mohit Srinivasan",
    role: "Lead Organizer",
    image: "/team/Mohit Srinivasan.png",
  },
  {
    name: "Malav Patel",
    role: "Co-Lead Organizer",
    image: "/team/Malav Patel.png",
  },
  {
    name: "Alexander Masin",
    role: "Vice President",
    image: "/team/Alexander Masin.jpg",
  },
  {
    name: "Ayushmaan Mukherjee",
    role: "Outreach & Finance Lead", // Updated role
    image: "/team/Ayushmaan Mukherjee.jpg",
  },
  {
    name: "Abdullah Kamran",
    role: "Operations Lead",
    image: "/team/Abdullah Kamran.jpg",
  },
  {
    name: "Arjun Agarwala",
    role: "Outreach Member", // Updated role
    image: "/team/Arjun Agarwala.png",
  },
];

// A simple, reusable accordion item component
const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <details className="group border-b border-black/10 py-4">
    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
      <span className="text-black group-hover:text-black/70 transition-colors">
        {question}
      </span>
      <span className="shrink-0 transition-transform duration-300 group-open:-rotate-45">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </span>
    </summary>
    <p className="mt-4 text-black/80">{answer}</p>
  </details>
);

const Footer = () => (
  <footer className="bg-black text-white py-12">
    <div className="container mx-auto px-6 md:px-8 flex flex-col items-center gap-6">
      <p className="text-sm text-gray-400">
        Built and designed by Mohit Srinivasan
      </p>
      <div className="flex items-center gap-6">
        <a
          href="https://instagram.com/hacksolaris"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://github.com/hacksolaris"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://solaris.devpost.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Devpost"
        >
          <Layers size={24} />
        </a>
      </div>
      <div className="text-center text-xs text-gray-500 mt-4">
        <p>
          Solaris is a 501(c)(3) nonprofit organization fiscally sponsored by
          The Hack Foundation.
        </p>
        <p>EIN: 81-2908499</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  const teamMembers = Array(6).fill(0); // Placeholder for 6 team members

  return (
    <>
      <div className="bg-[url('/noise.png')] bg-no-repeat bg-cover fixed w-[100vw] h-[100vh] z-[-1]"></div>

      {/* Hero Section */}
      <div className="relative h-screen pt-40">
        <div className="relative w-[90vw] md:w-[85vw] ml-[5vw] md:ml-[7.5vw] h-full">
          <HeroContent />
          <ScrollIndicator />
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-white text-black py-[7rem] md:py-32">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
                {teamData.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Wrapper div defines the circular shape */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`Photo of ${member.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 font-bold text-gray-900">
                      {member.name}
                    </p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 leading-relaxed">
                Welcome to Solaris, the premier online hackathon for high
                schoolers on October 10-11, 2025. For 24 hours, the brightest
                minds will unite from the comfort of their homes to build
                incredible software and hardware projects. Solaris is more than
                just a competition; it's a launchpad for the next generation of
                innovators, designed to help you bring your most ambitious ideas
                to life.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                At Solaris, we believe financial barriers should never limit
                innovation. That's why we built Launchpad, our custom platform
                providing every hacker with over <strong>$20,000</strong> in
                Google Cloud resources. Spin up servers, deploy databases, and
                integrate cutting-edge AI APIs without paying a single dime.
                Bring your most ambitious ideas, and we'll give you the power to
                launch them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white text-black py-[7rem] md:pb-32">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Common questions about hackathons and what to expect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-12 w-full max-w-5xl mx-auto">
            {/* Left Column */}
            <div>
              {faqsLeft.map((faq, i) => (
                <AccordionItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            {/* Right Column */}
            <div>
              {faqsRight.map((faq, i) => (
                <AccordionItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black pb-[7rem] pt-[6rem] md:pb-32">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Timeline
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            This schedule is subject to change closer to the hackathon as we
            confirm more guest speakers.
          </p>

          <div className="mt-12 border-t border-gray-200 max-w-4xl mx-auto">
            {timelineData.map((item, index) =>
              item.isDateHeader ? (
                <div
                  key={index}
                  className="py-4 px-4 bg-gray-50 border-b border-gray-200"
                >
                  <h3 className="font-bold text-lg text-gray-800">
                    {item.date}
                  </h3>
                </div>
              ) : (
                <div
                  key={index}
                  className="flex flex-col md:grid md:grid-cols-6 gap-4 md:gap-8 items-start py-6 px-4 border-b border-gray-200"
                >
                  <div className="md:col-span-1 text-gray-600 font-medium">
                    {item.time}
                  </div>
                  <div className="md:col-span-2 font-semibold text-black">
                    {item.title}
                  </div>
                  <div className="md:col-span-3 text-gray-700">
                    {item.description}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
