// pages/index.jsx
"use client"
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
      <div className="relative Home flex flex-col-reverse md:flex-row items-center justify-around py-24 md:py-36">
        <div className="content flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-4xl font-bold ml-10 mr-10 md:text-left text-center hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
          𝙂𝙚𝙩 𝙏𝙤 𝙆𝙣𝙤𝙬 <span className="text-[#00308F]">𝘼𝙙𝙚𝙚𝙡</span> 𝙐𝙡-𝙍𝙚𝙝𝙢𝙖𝙣
          </h1>  

          {/* About section */}
          <p className="text-base ml-10 mr-10 md:items-center max-w-[60ch] md:text-lg leading-relaxed md:text-left text-center">
          𝘏𝘪! 𝘐'𝘮 𝘈𝘥𝘦𝘦𝘭 𝘜𝘭 𝘙𝘦𝘩𝘮𝘢𝘯 𝘧𝘳𝘰𝘮 𝘓𝘢𝘩𝘰𝘳𝘦, 𝘢 𝘊𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘚𝘤𝘪𝘦𝘯𝘤𝘦 𝘴𝘵𝘶𝘥𝘦𝘯𝘵 𝘢𝘵 𝘜𝘌𝘛 𝘓𝘢𝘩𝘰𝘳𝘦. 𝘐 𝘸𝘢𝘴 𝘣𝘰𝘳𝘯 𝘰𝘯 𝘍𝘦𝘣𝘳𝘶𝘢𝘳𝘺 23, 2003. 𝘐'𝘮 𝘱𝘢𝘴𝘴𝘪𝘰𝘯𝘢𝘵𝘦 𝘢𝘣𝘰𝘶𝘵 𝘧𝘳𝘰𝘯𝘵𝘦𝘯𝘥 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵 𝘢𝘯𝘥 𝘩𝘢𝘷𝘦 𝘦𝘹𝘱𝘦𝘳𝘵𝘪𝘴𝘦 𝘪𝘯 𝘙𝘦𝘢𝘤𝘵, 𝘑𝘢𝘷𝘢𝘚𝘤𝘳𝘪𝘱𝘵, 𝘕𝘦𝘹𝘵.𝘫𝘴, 𝘛𝘢𝘪𝘭𝘸𝘪𝘯𝘥 𝘊𝘚𝘚, 𝘏𝘛𝘔𝘓, 𝘊𝘚𝘚, 𝘗𝘺𝘵𝘩𝘰𝘯, 𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦𝘴, 𝘢𝘯𝘥 𝘊++. 𝘐 𝘭𝘰𝘷𝘦 𝘦𝘹𝘱𝘭𝘰𝘳𝘪𝘯𝘨 𝘯𝘦𝘸 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵 𝘵𝘳𝘦𝘯𝘥𝘴, 𝘦𝘴𝘱𝘦𝘤𝘪𝘢𝘭𝘭𝘺 𝘪𝘯 𝘎𝘦𝘯𝘦𝘳𝘢𝘵𝘪𝘷𝘦 𝘈𝘐 𝘢𝘯𝘥 𝘔𝘢𝘤𝘩𝘪𝘯𝘦 𝘓𝘦𝘢𝘳𝘯𝘪𝘯𝘨. 𝘔𝘺 𝘢𝘪𝘮 𝘪𝘴 𝘵𝘰 𝘤𝘳𝘦𝘢𝘵𝘦 𝘪𝘯𝘯𝘰𝘷𝘢𝘵𝘪𝘰𝘯𝘴 𝘵𝘩𝘢𝘵 𝘭𝘦𝘢𝘷𝘦 𝘢 𝘭𝘢𝘴𝘵𝘪𝘯𝘨 𝘪𝘮𝘱𝘢𝘤𝘵 𝘪𝘯 𝘮𝘺 𝘧𝘪𝘦𝘭𝘥. 𝘐'𝘷𝘦 𝘢𝘭𝘴𝘰 𝘸𝘰𝘳𝘬𝘦𝘥 𝘪𝘯 𝘷𝘢𝘳𝘪𝘰𝘶𝘴 𝘧𝘪𝘦𝘭𝘥𝘴, 𝘪𝘯𝘤𝘭𝘶𝘥𝘪𝘯𝘨 𝘥𝘢𝘵𝘢 𝘦𝘯𝘵𝘳𝘺 𝘢𝘵 𝘢𝘯 𝘦𝘭𝘦𝘤𝘵𝘳𝘰𝘯𝘪𝘤𝘴 𝘴𝘩𝘰𝘱, 𝘤𝘢𝘭𝘭 𝘤𝘦𝘯𝘵𝘦𝘳 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦, 𝘧𝘳𝘰𝘯𝘵𝘦𝘯𝘥 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵, 𝘢𝘯𝘥 𝘢𝘴 𝘢 𝘱𝘳𝘰𝘱𝘦𝘳𝘵𝘺 𝘤𝘰𝘯𝘴𝘶𝘭𝘵𝘢𝘯𝘵. 𝘐'𝘮 𝘱𝘭𝘢𝘯𝘯𝘪𝘯𝘨 𝘵𝘰 𝘱𝘶𝘳𝘴𝘶𝘦 𝘮𝘺 𝘧𝘶𝘳𝘵𝘩𝘦𝘳 𝘴𝘵𝘶𝘥𝘪𝘦𝘴 𝘪𝘯 𝘢 𝘌𝘶𝘳𝘰𝘱𝘦𝘢𝘯 𝘤𝘰𝘶𝘯𝘵𝘳𝘺.
          </p>

          {/* Social icons for mobile */}
          <div className="social-link ml-0 md:ml-10 md:flex justify-center relative -top-5 md:top-0 md:justify-start space-x-6 mt-4">
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
        <div className="img group">
          <div className="absolute top-40 md:top-72 right-20 md:right-30 transform -translate-y-1/2 -z-10 md:w-80 md:h-80 w-60 h-60 transition-transform duration-500 ease-out-in group-hover:md:-translate-y-20">
            <Image
              src="/images/blue.png"
              alt="Background"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="relative md:w-96 md:h-96 w-80 h-80 transition-transform duration-500 ease-in-out group-hover:md:translate-x-20">
            <Image
              src="/images/Picsart_24-07-15_03-53-56-369-removebg.png"
              alt="Profile"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
