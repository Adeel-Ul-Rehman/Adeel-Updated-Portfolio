// pages/index.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faReplyd,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
    
      <Navbar />
      
      <div className="relative Home flex flex-col-reverse md:flex-row items-center justify-around py-32 md:py-24">
        <div className="content flex flex-col gap-3 text-center md:text-left">
          <h1 className="hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200 text-4xl md:text-6xl">
            𝙄'𝙢<span className="text-[#00308F]"> 𝘼𝙙𝙚𝙚𝙡 </span>𝙐𝙡-𝙍𝙚𝙝𝙢𝙖𝙣
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            𝘛𝘩𝘪𝘴 𝘪𝘴 𝘮𝘺 𝘰𝘧𝘧𝘪𝘤𝘪𝘢𝘭 𝘱𝘰𝘳𝘵𝘧𝘰𝘭𝘪𝘰 𝘸𝘦𝘣𝘴𝘪𝘵𝘦 𝘵𝘰 𝘴𝘩𝘰𝘸𝘤𝘢𝘴𝘦 𝘢𝘭𝘭 𝘮𝘺 𝘸𝘰𝘳𝘬
            𝘳𝘦𝘭𝘢𝘵𝘦𝘥 𝘵𝘰
            <br />
            𝘸𝘦𝘣 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵 𝘢𝘯𝘥 𝘜𝘐 𝘥𝘦𝘴𝘪𝘨𝘯.
          </p>
          <Link
            href="https://drive.google.com/file/d/19lucLDoOt7rKduY9XTa2qxpIqP9EwkoR/view?usp=drive_link"
            target="_blank"
            className="bg-[#00308F] text-white py-2 px-5 w-36 rounded mx-auto md:mx-0 transition-colors duration-200 hover:bg-blue-800 dark:bg-white dark:text-black dark:hover:bg-[#00308F] dark:hover:text-white"
          >
            𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘊𝘝
          </Link>

          {/* Social icons for desktop */}
          <div className="social-link hidden md:flex justify-start space-x-6 mt-4">
            <Link
              href="https://www.linkedin.com/in/adeel-ul-rehman-73a088294/"
              className="text-3xl text-secondary hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              href="https://replit.com/@AdeelAj?tab=repls"
              className="text-3xl text-secondary hover:text-blue-700"
              aria-label="Replit"
            >
              <FontAwesomeIcon icon={faReplyd} />
            </Link>
            <Link
              href="https://github.com/Adeel-Ul-Rehman"
              className="text-3xl text-secondary hover:text-blue-700"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="img group -mt-20 md:mt-0">
          <div className="absolute top-40 md:top-72 right-20 md:right-28 transform -translate-y-1/2 -z-10 md:w-80 md:h-80 w-60 h-60 transition-transform duration-500 ease-out-in group-hover:md:-translate-y-20 mobile:top-[calc(60px-20px)]">
            <Image
              src="/images/blue.png"
              alt="Background"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="relative md:w-96 md:h-96 w-80 h-80 transition-transform duration-500 ease-in-out group-hover:md:translate-x-20 mobile:top-[calc(60px-20px)]">
            <Image
              src="/images/Picsart_24-07-15_03-53-56-369-removebg.png"
              alt="Profile"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Social icons for mobile */}
      <div className="info md:hidden text-center relative -top-32   -mt-0">
        <div className="social-link mt-4 flex justify-center space-x-6 mb-0">
          <Link
            href="https://www.linkedin.com/in/adeel-ul-rehman-73a088294/"
            className="text-3xl text-secondary hover:text-blue-700"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href="https://replit.com/@AdeelAj?tab=repls"
            className="text-3xl text-secondary hover:text-blue-700"
            aria-label="Replit"
          >
            <FontAwesomeIcon icon={faReplyd} />
          </Link>
          <Link
            href="https://github.com/Adeel-Ul-Rehman"
            className="text-3xl text-secondary hover:text-blue-700"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
