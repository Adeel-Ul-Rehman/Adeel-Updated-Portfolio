"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faReplyd,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link"; // Add this import for Link component

const skills = [
  { name: "𝙅𝙖𝙫𝙖𝙎𝙘𝙧𝙞𝙥𝙩", percent: 70 },
  { name: "𝘾++", percent: 80 },
  {name:"𝘾#", percent : 70}, 
  { name: "𝙋𝙮𝙩𝙝𝙤𝙣", percent: 70 },
  { name: "𝙍𝙚𝙖𝙘𝙩", percent: 70 },
  { name: "𝙉𝙀𝙓𝙏.𝙟𝙨", percent: 75 },
  { name: "𝘽𝙤𝙤𝙩𝙨𝙩𝙧𝙖𝙥", percent: 75 },
  { name: "𝙏𝙖𝙞𝙡𝙬𝙞𝙣𝙙", percent: 80 },
  { name: "𝙃𝙏𝙈𝙇", percent: 85 },
  { name: "𝘾𝙎𝙎", percent: 80 },
  { name: "𝙈𝙎 𝙊𝙛𝙛𝙞𝙘𝙚", percent: 85 },
  { name: "𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚", percent: 60 },
  { name: "𝙀𝙙𝙞𝙩𝙞𝙣𝙜", percent: 75 },
  { name: "𝙋𝙧𝙤𝙢𝙥𝙩 𝘼𝙄", percent: 75 },
  { name: "𝙋𝙧𝙤𝙗𝙡𝙚𝙢 𝙎𝙤𝙡𝙫𝙞𝙣𝙜", percent: 90 },
  { name: "𝙏𝙚𝙖𝙢 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩", percent: 75 },
  { name: "𝙋𝙧𝙤𝙛𝙞𝙘𝙞𝙚𝙣𝙩 𝘾𝙤𝙢𝙢𝙪𝙣𝙞𝙘𝙖𝙩𝙤𝙧", percent: 75 },
];

const CircleProgress = ({ percent }) => {
  const circleRef = useRef(null);
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const radius = circleRef.current.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (circumference * percent) / 100;

    // Set the stroke-dasharray and initial offset
    circleRef.current.style.strokeDasharray = circumference;
    circleRef.current.style.strokeDashoffset = circumference;

    // Animate to the final offset
    setTimeout(() => {
      circleRef.current.style.transition = "stroke-dashoffset 2s linear";
      circleRef.current.style.strokeDashoffset = offset;
    }, 100);

    // Animate the number from 0 to the desired percentage
    let count = 0;
    const interval = setInterval(() => {
      if (count === percent) {
        clearInterval(interval);
      } else {
        count += 1;
        setCurrentPercent(count);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [percent]);

  return (
    <div className="skill-container flex justify-center items-center flex-col">
      <div className="relative flex justify-center items-center">
        <svg
          className="progress-circle"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <circle
            ref={circleRef}
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
            stroke="#00308F" // Custom blue color
            strokeWidth="12" // Increased stroke width
            fill="none"
          />
        </svg>
        <div className="absolute font-semibold text-xl">{currentPercent}%</div>
      </div>
    </div>
  );
};

function Page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-32 -mt-40">
        {/* Hero Section */}
        <div className="hero p-8 text-center">
          <h2 className="text-6xl font-semibold mt-5 text-[#00308F]">𝙈𝙮 𝙎𝙠𝙞𝙡𝙡𝙨</h2>
        </div>

        {/* Skills Container */}
        <div className="skills-container p-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div className="skill rounded-lg" key={skill.name}>
              <CircleProgress percent={skill.percent} />
              <h3 className="mt-4 text-center text-xl font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="social-link flex justify-center items-center space-x-6 mt-10 relative -top-40">
        <Link
          href="https://www.linkedin.com/in/adeel-ul-rehman-73a088294/"
          className="text-3xl text-secondary hover:text-blue-700 cursor-pointer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          href="https://replit.com/@AdeelAj?tab=repls"
          className="text-3xl text-secondary hover:text-blue-700 cursor-pointer"
          aria-label="Replit"
        >
          <FontAwesomeIcon icon={faReplyd} />
        </Link>
        <Link
          href="https://github.com/Adeel-Ul-Rehman"
          className="text-3xl text-secondary hover:text-blue-700 cursor-pointer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Page;
