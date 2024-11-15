"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProjectPage() {
  const projects = [
    {
      name: "𝙒𝙚𝙖𝙩𝙝𝙚𝙧 𝘼𝙋𝙄",
      description:
        "𝘈 𝘸𝘦𝘢𝘵𝘩𝘦𝘳 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘵𝘩𝘢𝘵 𝘧𝘦𝘵𝘤𝘩𝘦𝘴 𝘤𝘶𝘳𝘳𝘦𝘯𝘵 𝘸𝘦𝘢𝘵𝘩𝘦𝘳 𝘥𝘢𝘵𝘢 𝘧𝘰𝘳 𝘢 𝘨𝘪𝘷𝘦𝘯 𝘤𝘪𝘵𝘺.",
      path: "/Projects/WeatherAPI", // Main path for Weather API project
    },
    {
      name: "𝘿𝙚𝙖𝙙𝙥𝙤𝙤𝙡 𝙎𝙩𝙤𝙥𝙬𝙖𝙩𝙘𝙝 ",
      description:
        "𝘈 𝘴𝘵𝘰𝘱𝘸𝘢𝘵𝘤𝘩 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘪𝘯𝘴𝘱𝘪𝘳𝘦𝘥 𝘣𝘺 𝘋𝘦𝘢𝘥𝘱𝘰𝘰𝘭 𝘸𝘪𝘵𝘩 𝘴𝘵𝘢𝘳𝘵, 𝘴𝘵𝘰𝘱, 𝘢𝘯𝘥 𝘳𝘦𝘴𝘦𝘵 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯𝘢𝘭𝘪𝘵𝘪𝘦𝘴.",
      path: "/Projects/StopWatch/index.html", // Main path for Stopwatch project
    },
    {
      name: "𝙎𝙞𝙢𝙥𝙡𝙚 𝘾𝙖𝙡𝙘𝙪𝙡𝙖𝙩𝙤𝙧",
      description: "𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘤𝘢𝘭𝘤𝘶𝘭𝘢𝘵𝘰𝘳 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯.",
      path: "/Projects/Calculator/index.html", // Main path for Calculator project
    },
    {
      name: "𝘼𝙜𝙚 𝘾𝙖𝙡𝙘𝙪𝙡𝙖𝙩𝙤𝙧",
      description:
        "𝘈𝘯 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘵𝘩𝘢𝘵 𝘤𝘢𝘭𝘤𝘶𝘭𝘢𝘵𝘦𝘴 𝘢𝘨𝘦 𝘣𝘢𝘴𝘦𝘥 𝘰𝘯 𝘪𝘯𝘱𝘶𝘵 𝘣𝘪𝘳𝘵𝘩 𝘥𝘢𝘵𝘦.",
      path: "/Projects/AgeCalculator/index.html",
    },
    {
      name: "𝘿𝙞𝙜𝙞𝙩𝙖𝙡 𝘾𝙡𝙤𝙘𝙠",
      description: "𝘈 𝘳𝘦𝘢𝘭-𝘵𝘪𝘮𝘦 𝘥𝘪𝘨𝘪𝘵𝘢𝘭 𝘤𝘭𝘰𝘤𝘬 𝘥𝘪𝘴𝘱𝘭𝘢𝘺𝘪𝘯𝘨 𝘵𝘩𝘦 𝘤𝘶𝘳𝘳𝘦𝘯𝘵 𝘵𝘪𝘮𝘦.",
      path: "/Projects/DigitalClock/index.html",
    },
    {
      name: "𝙈𝙪𝙨𝙞𝙘 𝙋𝙡𝙖𝙮𝙚𝙧",
      description:
        "𝘈 𝘮𝘶𝘴𝘪𝘤 𝘱𝘭𝘢𝘺𝘦𝘳 𝘧𝘦𝘢𝘵𝘶𝘳𝘪𝘯𝘨 𝘰𝘯𝘦 𝘴𝘰𝘯𝘨, '𝘛𝘢𝘶𝘣𝘢 𝘛𝘢𝘶𝘣𝘢,' 𝘸𝘪𝘵𝘩 𝘱𝘭𝘢𝘺, 𝘴𝘵𝘰𝘱, 𝘢𝘯𝘥 𝘴𝘦𝘦𝘬 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯𝘢𝘭𝘪𝘵𝘪𝘦𝘴.",
      path: "/Projects/MusicPlayer/index.html",
    },
    {           
      name: "𝙎𝙥𝙚𝙚𝙘𝙝𝙚𝙧",
      description:
        "𝘈 𝘵𝘦𝘹𝘵-𝘵𝘰-𝘴𝘱𝘦𝘦𝘤𝘩 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘵𝘩𝘢𝘵 𝘤𝘰𝘯𝘷𝘦𝘳𝘵𝘴 𝘪𝘯𝘱𝘶𝘵 𝘵𝘦𝘹𝘵 𝘪𝘯𝘵𝘰 𝘴𝘱𝘦𝘦𝘤𝘩 𝘶𝘴𝘪𝘯𝘨 𝘥𝘪𝘧𝘧𝘦𝘳𝘦𝘯𝘵 𝘷𝘰𝘪𝘤𝘦𝘴.",
      path: "/Projects/Speecher/index.html",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="dark:bg-[#121212] min-h-screen py-16 px-10">
        <h1 className="text-5xl font-bold text-center text-[#00308F] dark:text-white mb-12">
        𝙈𝙮 𝙋𝙧𝙤𝙟𝙚𝙘𝙩𝙨
        </h1>
        <h1 className="text-1.5xl md:text-3xl font-bold text-start text-[#00308F] dark:text-white mb-12">
        𝙁𝙧𝙤𝙣𝙩𝙚𝙣𝙙: 𝙐𝙨𝙞𝙣𝙜 𝙅𝙨, 𝙃𝙏𝙈𝙇 & 𝘾𝙎𝙎
        </h1>

        <p className="flex flex-wrap -mt-10 justify-start gap-4 max-w-[90ch] mb-12">
        𝘛𝘩𝘦𝘴𝘦 𝘢𝘳𝘦 𝘴𝘰𝘮𝘦 𝘰𝘧 𝘮𝘺 𝘷𝘦𝘳𝘺 𝘧𝘪𝘳𝘴𝘵 𝘱𝘳𝘰𝘫𝘦𝘤𝘵𝘴, 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘥𝘶𝘳𝘪𝘯𝘨 𝘵𝘩𝘦 𝘦𝘢𝘳𝘭𝘺 𝘥𝘢𝘺𝘴 𝘰𝘧 𝘮𝘺 𝘤𝘰𝘥𝘪𝘯𝘨 𝘫𝘰𝘶𝘳𝘯𝘦𝘺. 𝘈𝘵 𝘵𝘩𝘦 𝘵𝘪𝘮𝘦, 𝘐 𝘸𝘢𝘴 𝘫𝘶𝘴𝘵 𝘣𝘦𝘨𝘪𝘯𝘯𝘪𝘯𝘨 𝘵𝘰 𝘭𝘦𝘢𝘳𝘯 𝘑𝘢𝘷𝘢𝘚𝘤𝘳𝘪𝘱𝘵, 𝘏𝘛𝘔𝘓, 𝘢𝘯𝘥 𝘊𝘚𝘚. 𝘐 𝘥𝘪𝘥𝘯'𝘵 𝘺𝘦𝘵 𝘬𝘯𝘰𝘸 𝘧𝘳𝘢𝘮𝘦𝘸𝘰𝘳𝘬𝘴 𝘭𝘪𝘬𝘦 𝘙𝘦𝘢𝘤𝘵, 𝘕𝘌𝘟𝘛.𝘫𝘴, 𝘰𝘳 𝘛𝘢𝘪𝘭𝘸𝘪𝘯𝘥, 𝘴𝘰 𝘵𝘩𝘦𝘴𝘦 𝘱𝘳𝘰𝘫𝘦𝘤𝘵𝘴 𝘸𝘦𝘳𝘦 𝘣𝘶𝘪𝘭𝘵 𝘶𝘴𝘪𝘯𝘨 𝘵𝘩𝘦 𝘣𝘢𝘴𝘪𝘤𝘴 𝘰𝘧 𝘸𝘦𝘣 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵. 𝘛𝘩𝘦𝘺 𝘳𝘦𝘧𝘭𝘦𝘤𝘵 𝘵𝘩𝘦 𝘧𝘰𝘶𝘯𝘥𝘢𝘵𝘪𝘰𝘯 𝘰𝘧 𝘮𝘺 𝘭𝘦𝘢𝘳𝘯𝘪𝘯𝘨, 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘴𝘵𝘢𝘳𝘵 𝘰𝘧 𝘮𝘺 𝘱𝘢𝘴𝘴𝘪𝘰𝘯 𝘧𝘰𝘳 𝘤𝘰𝘥𝘪𝘯𝘨. 𝘠𝘰𝘶 𝘤𝘢𝘯 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘵𝘩𝘦𝘮 𝘣𝘺 𝘤𝘭𝘪𝘤𝘬𝘪𝘯𝘨 𝘰𝘯 𝘛𝘳𝘺 𝘪𝘵 𝘣𝘶𝘵𝘵𝘰𝘯.
        </p>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Added mb-20 for space below */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-6 bg-white dark:bg-[#333333] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00308F] dark:hover:shadow-[#00308F] cursor-pointer"
            >
              <h2 className="text-2xl font-semibold text-[#00308F] dark:text-white mb-4">
                {project.name}
              </h2>
              <p className="text-black dark:text-[#dddddd] mb-4">
                {project.description}
              </p>

              {/* Button to Go to Project Page */}
              <a
                href={project.path}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
              >
                𝘛𝘳𝘺 𝘐𝘵
              </a>
            </div>
          ))}
        </div>

        {/* E-commerce section */}
        <h1 className="text-1.5xl md:text-3xl font-bold text-start text-[#00308F] dark:text-white mb-12">
        𝙀-𝙘𝙤𝙢𝙢𝙚𝙧𝙘𝙚: 𝙐𝙨𝙞𝙣𝙜 𝙍𝙚𝙖𝙘𝙩, 𝙉𝙀𝙓𝙏.𝙟𝙨 &amp; 𝙏𝙖𝙞𝙡𝙬𝙞𝙣𝙙
        </h1>
        <p className="flex flex-wrap -mt-10 justify-start gap-4 max-w-[90ch] mb-12">
        𝘛𝘩𝘦𝘴𝘦 𝘢𝘳𝘦 𝘴𝘢𝘮𝘱𝘭𝘦 𝘷𝘪𝘥𝘦𝘰𝘴 𝘰𝘧 𝘮𝘺 𝘌-𝘤𝘰𝘮𝘮𝘦𝘳𝘤𝘦 𝘱𝘳𝘰𝘫𝘦𝘤𝘵𝘴, 𝘸𝘩𝘪𝘤𝘩 𝘐 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘥 
        𝘶𝘴𝘪𝘯𝘨 𝘙𝘦𝘢𝘤𝘵, 𝘕𝘌𝘟𝘛.𝘫𝘴, 𝘢𝘯𝘥 𝘛𝘢𝘪𝘭𝘸𝘪𝘯𝘥. 𝘚𝘪𝘯𝘤𝘦 𝘐 𝘩𝘢𝘷𝘦𝘯'𝘵 𝘥𝘦𝘱𝘭𝘰𝘺𝘦𝘥 𝘵𝘩𝘦𝘮           
        𝘢𝘯𝘺𝘸𝘩𝘦𝘳𝘦 𝘺𝘦𝘵, 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘷𝘪𝘦𝘸 𝘵𝘩𝘦 𝘴𝘢𝘮𝘱𝘭𝘦 𝘷𝘪𝘥𝘦𝘰𝘴 𝘣𝘺 𝘤𝘭𝘪𝘤𝘬𝘪𝘯𝘨 𝘵𝘩𝘦           
        𝘳𝘦𝘴𝘱𝘦𝘤𝘵𝘪𝘷𝘦 𝘣𝘶𝘵𝘵𝘰𝘯𝘴 𝘣𝘦𝘭𝘰𝘸. 𝘊𝘭𝘪𝘤𝘬 𝘰𝘯 𝘵𝘩𝘦 "𝘔𝘰𝘣𝘪𝘭𝘦" 𝘣𝘶𝘵𝘵𝘰𝘯 𝘵𝘰 𝘴𝘦𝘦 𝘵𝘩𝘦           
        𝘴𝘢𝘮𝘱𝘭𝘦 𝘷𝘪𝘥𝘦𝘰 𝘧𝘰𝘳 𝘮𝘰𝘣𝘪𝘭𝘦 𝘴𝘤𝘳𝘦𝘦𝘯𝘴, 𝘢𝘯𝘥 𝘤𝘭𝘪𝘤𝘬 "𝘋𝘦𝘴𝘬𝘵𝘰𝘱" 𝘵𝘰 𝘷𝘪𝘦𝘸 𝘵𝘩𝘦           
        𝘴𝘢𝘮𝘱𝘭𝘦 𝘷𝘪𝘥𝘦𝘰 𝘧𝘰𝘳 𝘥𝘦𝘴𝘬𝘵𝘰𝘱 𝘴𝘤𝘳𝘦𝘦𝘯𝘴.
        </p>

        {/* E-commerce Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Mobile E-commerce Project */}
          <div className="relative p-6 bg-white dark:bg-[#333333] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00308F] dark:hover:shadow-[#00308F] cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#00308F] dark:text-white mb-4">
            𝙈𝙤𝙗𝙞𝙡𝙚 𝙀-𝙘𝙤𝙢𝙢𝙚𝙧𝙘𝙚
            </h2>
            <p className="text-black dark:text-[#dddddd] mb-4">
            𝘈 𝘮𝘰𝘣𝘪𝘭𝘦-𝘧𝘪𝘳𝘴𝘵 𝘌-𝘤𝘰𝘮𝘮𝘦𝘳𝘤𝘦 𝘸𝘦𝘣𝘴𝘪𝘵𝘦 𝘴𝘩𝘰𝘸𝘤𝘢𝘴𝘪𝘯𝘨 𝘱𝘳𝘰𝘥𝘶𝘤𝘵𝘴 𝘢𝘯𝘥 𝘢𝘭𝘭𝘰𝘸𝘪𝘯𝘨               
            𝘶𝘴𝘦𝘳𝘴 𝘵𝘰 𝘴𝘩𝘰𝘱 𝘴𝘦𝘢𝘮𝘭𝘦𝘴𝘴𝘭𝘺.
            </p>

            <div className="flex space-x-4">
              {/* Mobile Video Button */}
              <a
                href="/videos/MobileMobile.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
              >
                𝘔𝘰𝘣𝘪𝘭𝘦
              </a>
              {/* Desktop Video Button */}
              <a
                href="/videos/MobileDesktop.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
              >
                 𝘋𝘦𝘴𝘬𝘵𝘰𝘱
              </a>
            </div>
          </div>

          {/* Restaurant E-commerce Project */}
          <div className="relative p-6 bg-white dark:bg-[#333333] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00308F] dark:hover:shadow-[#00308F] cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#00308F] dark:text-white mb-4">
            𝙍𝙚𝙨𝙩𝙖𝙪𝙧𝙖𝙣𝙩 𝙀-𝙘𝙤𝙢𝙢𝙚𝙧𝙘𝙚
            </h2>
            <p className="text-black dark:text-[#dddddd] mb-4">
            𝘈 𝘙𝘦𝘴𝘵𝘢𝘶𝘳𝘢𝘯𝘵 𝘌-𝘤𝘰𝘮𝘮𝘦𝘳𝘤𝘦 𝘸𝘦𝘣𝘴𝘪𝘵𝘦 𝘸𝘩𝘦𝘳𝘦 𝘶𝘴𝘦𝘳𝘴 𝘤𝘢𝘯 𝘣𝘳𝘰𝘸𝘴𝘦 𝘮𝘦𝘯𝘶𝘴 𝘢𝘯𝘥 𝘰𝘳𝘥𝘦𝘳 𝘧𝘰𝘰𝘥 𝘰𝘯𝘭𝘪𝘯𝘦.
            </p>

            <div className="flex space-x-4">
              {/* Mobile Video Button */}
              <a
                href="/videos/RestaurantMobile.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
              >
                𝘔𝘰𝘣𝘪𝘭𝘦 
              </a>
              {/* Desktop Video Button */}
              <a
                href="/videos/RestaurantDesktop.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
              >
                 𝘋𝘦𝘴𝘬𝘵𝘰𝘱
              </a>
            </div>
          </div>

          {/* Clothing E-commerce Project */}
          <div className="relative p-6 bg-white dark:bg-[#333333] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00308F] dark:hover:shadow-[#00308F] cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#00308F] dark:text-white mb-4">
            𝘾𝙡𝙤𝙩𝙝𝙞𝙣𝙜 𝙀-𝙘𝙤𝙢𝙢𝙚𝙧𝙘𝙚
            </h2>
            <p className="text-black dark:text-[#dddddd] mb-4">
            𝘈 𝘊𝘭𝘰𝘵𝘩𝘪𝘯𝘨 𝘌-𝘤𝘰𝘮𝘮𝘦𝘳𝘤𝘦 𝘸𝘦𝘣𝘴𝘪𝘵𝘦 𝘴𝘩𝘰𝘸𝘤𝘢𝘴𝘪𝘯𝘨 𝘧𝘢𝘴𝘩𝘪𝘰𝘯 𝘱𝘳𝘰𝘥𝘶𝘤𝘵𝘴 𝘧𝘰𝘳 𝘴𝘢𝘭𝘦.
            </p>

            <div className="flex space-x-4">
              {/* Mobile Video Button */}
              <a
                href="/videos/ClothesMobile.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
              >
                𝘔𝘰𝘣𝘪𝘭𝘦 
              </a>
              {/* Desktop Video Button */}
              <a
                href="/videos/ClothesDesktop.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
              >
                 𝘋𝘦𝘴𝘬𝘵𝘰𝘱
              </a>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <h1 className="text-1.5xl md:text-3xl font-bold text-start text-[#00308F] dark:text-white mb-12">
        𝘽𝙖𝙘𝙠𝙚𝙣𝙙: 𝙐𝙨𝙞𝙣𝙜 𝘾++
        </h1>
        <p className="flex flex-wrap -mt-10 justify-start gap-4 max-w-[90ch] mb-12">
        𝘉𝘺 𝘤𝘭𝘪𝘤𝘬𝘪𝘯𝘨 𝘵𝘩𝘦 𝘣𝘶𝘵𝘵𝘰𝘯 𝘣𝘦𝘭𝘰𝘸, 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘢𝘤𝘤𝘦𝘴𝘴 𝘵𝘩𝘦 𝘤𝘰𝘥𝘦 𝘧𝘰𝘳 𝘮𝘺 𝘉𝘢𝘤𝘬𝘦𝘯𝘥           
        𝘔𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵 𝘚𝘺𝘴𝘵𝘦𝘮, 𝘸𝘩𝘪𝘤𝘩 𝘐 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘥 𝘶𝘴𝘪𝘯𝘨 𝘊++. 𝘗𝘭𝘦𝘢𝘴𝘦 𝘯𝘰𝘵𝘦 𝘵𝘩𝘢𝘵 𝘵𝘩𝘪𝘴          
        𝘪𝘴 𝘢 𝘤𝘰𝘯𝘴𝘰𝘭𝘦-𝘣𝘢𝘴𝘦𝘥 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯. 𝘞𝘩𝘦𝘯 𝘺𝘰𝘶 𝘤𝘭𝘪𝘤𝘬 𝘵𝘩𝘦 𝘣𝘶𝘵𝘵𝘰𝘯, 𝘺𝘰𝘶 𝘸𝘪𝘭𝘭 𝘣𝘦           
        𝘳𝘦𝘥𝘪𝘳𝘦𝘤𝘵𝘦𝘥 𝘵𝘰 𝘙𝘦𝘱𝘭𝘪𝘵, 𝘢𝘯 𝘰𝘯𝘭𝘪𝘯𝘦 𝘤𝘰𝘮𝘱𝘪𝘭𝘦𝘳. 𝘛𝘰 𝘳𝘶𝘯 𝘵𝘩𝘪𝘴 𝘤𝘰𝘥𝘦 𝘰𝘯 𝘙𝘦𝘱𝘭𝘪𝘵,           
        𝘺𝘰𝘶 𝘸𝘪𝘭𝘭 𝘯𝘦𝘦𝘥 𝘵𝘰 𝘴𝘦𝘵 𝘪𝘵 𝘶𝘱 𝘧𝘪𝘳𝘴𝘵; 𝘰𝘵𝘩𝘦𝘳𝘸𝘪𝘴𝘦, 𝘪𝘵 𝘮𝘢𝘺 𝘳𝘦𝘴𝘶𝘭𝘵 𝘪𝘯 𝘦𝘳𝘳𝘰𝘳𝘴.           
        𝘐 𝘳𝘦𝘤𝘰𝘮𝘮𝘦𝘯𝘥 𝘤𝘰𝘱𝘺𝘪𝘯𝘨 𝘵𝘩𝘦 𝘤𝘰𝘥𝘦 𝘧𝘳𝘰𝘮 𝘙𝘦𝘱𝘭𝘪𝘵 𝘢𝘯𝘥 𝘳𝘶𝘯𝘯𝘪𝘯𝘨 𝘪𝘵 𝘰𝘯 𝘺𝘰𝘶𝘳 𝘰𝘸𝘯           
        𝘴𝘺𝘴𝘵𝘦𝘮 𝘶𝘴𝘪𝘯𝘨 𝘢 𝘭𝘰𝘤𝘢𝘭 𝘤𝘰𝘮𝘱𝘪𝘭𝘦𝘳 𝘭𝘪𝘬𝘦 𝘝𝘪𝘴𝘶𝘢𝘭 𝘚𝘵𝘶𝘥𝘪𝘰 𝘰𝘳 𝘝𝘚 𝘊𝘰𝘥𝘦 𝘧𝘰𝘳 𝘵𝘩𝘦           
        𝘣𝘦𝘴𝘵 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦.
        </p>

        {/* Backend Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 -mt-10 lg:grid-cols-2 gap-8 mb-20">
          {/* Car Rental Management System */}
          <div className="relative p-6 bg-white dark:bg-[#333333] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00308F] dark:hover:shadow-[#00308F] cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#00308F] dark:text-white mb-4">
            𝘾𝙖𝙧 𝙍𝙚𝙣𝙩𝙖𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩 𝙎𝙮𝙨𝙩𝙚𝙢
            </h2>
            <p className="text-black dark:text-[#dddddd] mb-4">
            𝘈 𝘤𝘰𝘯𝘴𝘰𝘭𝘦-𝘣𝘢𝘴𝘦𝘥 𝘤𝘢𝘳 𝘳𝘦𝘯𝘵𝘢𝘭 𝘮𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵 𝘴𝘺𝘴𝘵𝘦𝘮 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘥 𝘶𝘴𝘪𝘯𝘨 𝘊++.
            </p>
            {/* Button to Go to Replit */}
            <a
              href="https://replit.com/@AdeelAj/Car-Rental-Management-System#main.cpp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
            >
              𝘎𝘰 𝘵𝘰 𝘙𝘦𝘱𝘭𝘪𝘵
            </a>
          </div>

          {/* Tour Management System */}
          <div className="relative p-6 bg-white dark:bg-[#333333] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00308F] dark:hover:shadow-[#00308F] cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#00308F] dark:text-white mb-4">
            𝙏𝙤𝙪𝙧 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩 𝙎𝙮𝙨𝙩𝙚𝙢
            </h2>
            <p className="text-black dark:text-[#dddddd] mb-4">
            𝘈 𝘤𝘰𝘯𝘴𝘰𝘭𝘦-𝘣𝘢𝘴𝘦𝘥 𝘵𝘰𝘶𝘳 𝘮𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵 𝘴𝘺𝘴𝘵𝘦𝘮 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘥 𝘶𝘴𝘪𝘯𝘨 𝘊++.
            </p>
            {/* Button to Go to Replit */}
            <a
              href="https://replit.com/@AdeelAj/Tour-Management-System#main.cpp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
            >
              𝘎𝘰 𝘵𝘰 𝘙𝘦𝘱𝘭𝘪𝘵
            </a>
          </div>
        </div>
        {/* Backend Section */}
        <h1 className="text-1.5xl md:text-3xl font-bold text-start text-[#00308F] dark:text-white mb-12">
        𝙊𝙩𝙝𝙚𝙧 𝙋𝙧𝙤𝙟𝙚𝙘𝙩𝙨
        </h1>
        <p className="flex flex-wrap -mt-10 justify-start gap-4 max-w-[90ch] mb-12">
        𝘉𝘺 𝘤𝘭𝘪𝘤𝘬𝘪𝘯𝘨 𝘵𝘩𝘦 𝘣𝘶𝘵𝘵𝘰𝘯 𝘣𝘦𝘭𝘰𝘸, 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘦𝘹𝘱𝘭𝘰𝘳𝘦 𝘵𝘸𝘰 𝘰𝘧 𝘮𝘺 𝘱𝘳𝘰𝘫𝘦𝘤𝘵𝘴:
          <br></br>
          1.𝘚𝘩𝘰𝘰𝘵𝘪𝘯𝘨 𝘎𝘢𝘮𝘦: 𝘛𝘩𝘪𝘴 𝘪𝘴 𝘢 𝘨𝘢𝘮𝘦 𝘐 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘥 𝘸𝘪𝘵𝘩 𝘢 𝘧𝘳𝘪𝘦𝘯𝘥 𝘯𝘢𝘮𝘦 𝘚𝘺𝘦𝘥           
          𝘚𝘩𝘢𝘺𝘢𝘯 𝘶𝘴𝘪𝘯𝘨 𝘚𝘤𝘳𝘢𝘵𝘤𝘩 𝘴𝘰𝘧𝘵𝘸𝘢𝘳𝘦. 𝘛𝘰 𝘦𝘯𝘫𝘰𝘺 𝘵𝘩𝘦 𝘨𝘢𝘮𝘦, 𝘺𝘰𝘶'𝘭𝘭 𝘯𝘦𝘦𝘥 𝘵𝘰 𝘧𝘪𝘳𝘴𝘵           
          𝘥𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘪𝘵 𝘢𝘯𝘥 𝘦𝘯𝘴𝘶𝘳𝘦 𝘵𝘩𝘢𝘵 𝘚𝘤𝘳𝘢𝘵𝘤𝘩 𝘪𝘴 𝘪𝘯𝘴𝘵𝘢𝘭𝘭𝘦𝘥 𝘰𝘯 𝘺𝘰𝘶𝘳 𝘗𝘊. 𝘖𝘯𝘤𝘦 𝘴𝘦𝘵           
          𝘶𝘱, 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘵𝘩𝘦 𝘨𝘢𝘮𝘦 𝘢𝘯𝘥 𝘪𝘮𝘮𝘦𝘳𝘴𝘦 𝘺𝘰𝘶𝘳𝘴𝘦𝘭𝘧 𝘪𝘯 𝘵𝘩𝘦 𝘧𝘶𝘯 𝘸𝘦’𝘷𝘦           
          𝘤𝘳𝘦𝘢𝘵𝘦𝘥.
          <br></br>
          2.𝘏𝘰𝘴𝘱𝘪𝘵𝘢𝘭 𝘔𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵 𝘚𝘺𝘴𝘵𝘦𝘮: 𝘛𝘩𝘪𝘴 𝘱𝘳𝘰𝘫𝘦𝘤𝘵 𝘪𝘯𝘷𝘰𝘭𝘷𝘦𝘴 𝘣𝘰𝘵𝘩 𝘧𝘳𝘰𝘯𝘵𝘦𝘯𝘥 𝘢𝘯𝘥           
          𝘣𝘢𝘤𝘬𝘦𝘯𝘥 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵, 𝘱𝘳𝘰𝘷𝘪𝘥𝘪𝘯𝘨 𝘢 𝘤𝘰𝘮𝘱𝘳𝘦𝘩𝘦𝘯𝘴𝘪𝘷𝘦 𝘴𝘰𝘭𝘶𝘵𝘪𝘰𝘯 𝘵𝘰 𝘮𝘢𝘯𝘢𝘨𝘦 𝘵𝘩𝘦           
          𝘷𝘢𝘳𝘪𝘰𝘶𝘴 𝘢𝘧𝘧𝘢𝘪𝘳𝘴 𝘰𝘧 𝘢 𝘩𝘰𝘴𝘱𝘪𝘵𝘢𝘭. 𝘛𝘩𝘦 𝘴𝘺𝘴𝘵𝘦𝘮 𝘢𝘭𝘭𝘰𝘸𝘴 𝘶𝘴𝘦𝘳𝘴 𝘵𝘰 𝘰𝘳𝘨𝘢𝘯𝘪𝘻𝘦 𝘢𝘯𝘥           
          𝘮𝘢𝘪𝘯𝘵𝘢𝘪𝘯 𝘦𝘴𝘴𝘦𝘯𝘵𝘪𝘢𝘭 𝘩𝘰𝘴𝘱𝘪𝘵𝘢𝘭 𝘥𝘢𝘵𝘢, 𝘴𝘶𝘤𝘩 𝘢𝘴 𝘱𝘢𝘵𝘪𝘦𝘯𝘵 𝘳𝘦𝘤𝘰𝘳𝘥𝘴, 𝘥𝘰𝘤𝘵𝘰𝘳           
          𝘥𝘦𝘵𝘢𝘪𝘭𝘴, 𝘳𝘰𝘰𝘮 𝘢𝘴𝘴𝘪𝘨𝘯𝘮𝘦𝘯𝘵𝘴, 𝘢𝘯𝘥 𝘮𝘰𝘳𝘦. 𝘛𝘰 𝘧𝘶𝘭𝘭𝘺 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘵𝘩𝘪𝘴 𝘱𝘳𝘰𝘫𝘦𝘤𝘵,           
          𝘺𝘰𝘶'𝘭𝘭 𝘯𝘦𝘦𝘥 𝘵𝘰 𝘴𝘦𝘵 𝘶𝘱 𝘵𝘩𝘦 𝘯𝘦𝘤𝘦𝘴𝘴𝘢𝘳𝘺 𝘦𝘯𝘷𝘪𝘳𝘰𝘯𝘮𝘦𝘯𝘵 𝘰𝘯 𝘺𝘰𝘶𝘳 𝘗𝘊. 𝘛𝘩𝘦 𝘴𝘺𝘴𝘵𝘦𝘮           
          𝘪𝘴 𝘥𝘦𝘴𝘪𝘨𝘯𝘦𝘥 𝘵𝘰 𝘴𝘵𝘳𝘦𝘢𝘮𝘭𝘪𝘯𝘦 𝘩𝘰𝘴𝘱𝘪𝘵𝘢𝘭 𝘰𝘱𝘦𝘳𝘢𝘵𝘪𝘰𝘯𝘴, 𝘦𝘯𝘴𝘶𝘳𝘪𝘯𝘨 𝘴𝘮𝘰𝘰𝘵𝘩           
          𝘮𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵 𝘢𝘯𝘥 𝘦𝘢𝘴𝘺 𝘢𝘤𝘤𝘦𝘴𝘴 𝘵𝘰 𝘤𝘳𝘪𝘵𝘪𝘤𝘢𝘭 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘵𝘪𝘰𝘯.
        </p>
        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 -mt-10 lg:grid-cols-2 gap-8 mb-20">
          {/* Car Rental Management System */}
          <div className="relative p-6 bg-white dark:bg-[#333333] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00308F] dark:hover:shadow-[#00308F] cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#00308F] dark:text-white mb-4">
            𝙎𝙘𝙧𝙖𝙘𝙝 𝙎𝙝𝙤𝙤𝙩𝙞𝙣𝙜 𝙂𝙖𝙢𝙚
            </h2>
            <p className="text-black dark:text-[#dddddd] mb-4">
            𝘈 𝘴𝘩𝘰𝘰𝘵𝘪𝘯𝘨 𝘦𝘯𝘦𝘮𝘪𝘦𝘴 𝘨𝘢𝘮𝘦 𝘸𝘩𝘪𝘤𝘩 𝘩𝘢𝘷𝘦 3 𝘴𝘵𝘢𝘨𝘦𝘴, 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘥 𝘰𝘯 𝘚𝘤𝘳𝘢𝘤𝘩.
            </p>
            {/* Button to Go to Replit */}
            <a
              href="https://drive.google.com/file/d/1DRc89WsMj_wvbWljegnRV3qW_CG9X13Q/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
            >
              𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥
            </a>
          </div>

          {/* Tour Management System */}
          <div className="relative p-6 bg-white dark:bg-[#333333] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00308F] dark:hover:shadow-[#00308F] cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#00308F] dark:text-white mb-4">
            𝙃𝙤𝙨𝙥𝙞𝙩𝙖𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩 𝙎𝙮𝙨𝙩𝙚𝙢
            </h2>
            <p className="text-black dark:text-[#dddddd] mb-4">
            𝘈 𝘏𝘰𝘴𝘱𝘪𝘵𝘢𝘭 𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘮𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵 𝘴𝘺𝘴𝘵𝘦𝘮 𝘸𝘩𝘪𝘤𝘩 𝘵𝘳𝘢𝘤𝘬 𝘳𝘦𝘤𝘰𝘳𝘥𝘴 𝘰𝘧               
            𝘏𝘰𝘴𝘱𝘪𝘵𝘢𝘭.
            </p>
            {/* Button to Go to Replit */}
            <a
              href="https://drive.google.com/file/d/1WPPAKDQQlBoyfFzwMs8Pyqj_mAIj_4aS/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00308F] text-white py-2 px-4 rounded hover:bg-[#002d8f] dark:hover:bg-[#002d8f]"
            >
              𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
