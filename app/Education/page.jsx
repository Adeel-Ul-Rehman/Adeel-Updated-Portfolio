"use client"; // Add this line
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function Education() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll(".education-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-40 bg-primary -mt-20 text-secondary px-10">
        <div className="container w-full max-w-4xl px-4 md:px-8 space-y-12">
          {/* School Section */}
          <section className="education-section flex flex-col md:flex-row items-center">
            <div className="image-container flex flex-wrap justify-center w-full md:w-1/2 gap-2 mb-4 md:mb-0">
              <Image
                src="/images/school 1.png"
                alt="School Image 1"
                width={200}
                height={150}
                className="education-img school-1"
              />
              <Image
                src="/images/school 3.png"
                alt="School Image 2"
                width={200}
                height={150}
                className="education-img"
              />
              <Image
                src="/images/school 4.png"
                alt="School Image 3"
                width={200}
                height={150}
                className="education-img"
              />
            </div>

            <div className="text-container md:w-1/2 p-4">
              <h2 className="text-3xl font-bold  text-primary">𝙎𝙘𝙝𝙤𝙤𝙡</h2>
              <p className="text-lg mt-2">
                𝘛𝘩𝘦 𝘯𝘢𝘮𝘦 𝘰𝘧 𝘮𝘺 𝘴𝘤𝘩𝘰𝘰𝘭 𝘪𝘴 𝘊.𝘋.𝘎. 𝘎𝘰𝘷𝘵. 𝘉𝘰𝘺𝘴 𝘏𝘪𝘨𝘩 𝘚𝘤𝘩𝘰𝘰𝘭 𝘊𝘩𝘰𝘵𝘢
                𝘎𝘰𝘶𝘯. 𝘐𝘵 𝘸𝘢𝘴 𝘦𝘴𝘵𝘢𝘣𝘭𝘪𝘴𝘩𝘦𝘥 𝘪𝘯 1976 𝘢𝘯𝘥 𝘪𝘴 𝘭𝘰𝘤𝘢𝘵𝘦𝘥 𝘪𝘯 𝘓𝘢𝘩𝘰𝘳𝘦 𝘤𝘪𝘵𝘺,
                𝘪𝘯 𝘚𝘩𝘢𝘩𝘥𝘳𝘢𝘩 𝘐𝘴𝘭𝘢𝘮 𝘗𝘶𝘳𝘢. 𝘐 𝘴𝘱𝘦𝘯𝘵 10 𝘺𝘦𝘢𝘳𝘴 𝘰𝘧 𝘮𝘺 𝘭𝘪𝘧𝘦 𝘵𝘩𝘦𝘳𝘦 𝘢𝘯𝘥
                𝘱𝘢𝘴𝘴𝘦𝘥 𝘮𝘺 𝘮𝘢𝘵𝘳𝘪𝘤𝘶𝘭𝘢𝘵𝘪𝘰𝘯 𝘪𝘯 2020.{" "}
              </p>
              <a
                href="https://maps.app.goo.gl/pr35X4NxSFGR2euC8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-accent text-white bg-[#00308F] px-4 py-2 rounded mt-4 hover:bg-blue-700 hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                  𝘎𝘰𝘰𝘨𝘭𝘦 𝘔𝘢𝘱𝘴
                </button>
              </a>
            </div>
          </section>

          {/* College Section */}
          <section className="education-section flex flex-col md:flex-row items-center">
            <div className="image-container flex flex-wrap justify-center w-full md:w-1/2 gap-2 mb-4 md:mb-0">
              <Image
                src="/images/college 1.png"
                alt="College Image 1"
                width={200}
                height={150}
                className="education-img"
              />
              <Image
                src="/images/college 2.png"
                alt="College Image 2"
                width={200}
                height={150}
                className="education-img college-2"
              />
              <Image
                src="/images/college 3.png"
                alt="College Image 3"
                width={200}
                height={150}
                className="education-img"
              />
            </div>
            <div className="text-container md:w-1/2 p-4">
              <h2 className="text-3xl font-bold text-primary">𝘾𝙤𝙡𝙡𝙚𝙜𝙚</h2>
              <p className="text-lg mt-2">
                𝘐 𝘱𝘢𝘴𝘴𝘦𝘥 𝘮𝘺 𝘪𝘯𝘵𝘦𝘳𝘮𝘦𝘥𝘪𝘢𝘵𝘦 𝘦𝘹𝘢𝘮𝘴 𝘪𝘯 2022 𝘧𝘳𝘰𝘮 𝘐𝘴𝘭𝘢𝘮𝘪𝘢 𝘊𝘰𝘭𝘭𝘦𝘨𝘦
                𝘊𝘪𝘷𝘪𝘭 𝘓𝘪𝘯𝘦𝘴 𝘓𝘢𝘩𝘰𝘳𝘦, 𝘸𝘩𝘪𝘤𝘩 𝘪𝘴 𝘰𝘯𝘦 𝘰𝘧 𝘵𝘩𝘦 𝘣𝘪𝘨𝘨𝘦𝘴𝘵 𝘦𝘥𝘶𝘤𝘢𝘵𝘪𝘰𝘯𝘢𝘭
                𝘪𝘯𝘴𝘵𝘪𝘵𝘶𝘵𝘦𝘴 𝘪𝘯 𝘗𝘢𝘬𝘪𝘴𝘵𝘢𝘯. 𝘐 𝘨𝘰𝘵 𝘢𝘥𝘮𝘪𝘴𝘴𝘪𝘰𝘯 𝘪𝘯 2020.{" "}
              </p>
              <a
                href="https://maps.app.goo.gl/hrCMgQ5dBVVoxK2N9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-accent text-white bg-[#00308F] px-4 py-2 rounded mt-4 hover:bg-blue-700 hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                  𝘎𝘰𝘰𝘨𝘭𝘦 𝘔𝘢𝘱𝘴
                </button>
              </a>
            </div>
          </section>

          {/* University Section */}
          <section className="education-section flex flex-col md:flex-row items-center">
            <div className="image-container flex flex-wrap justify-center w-full md:w-1/2 gap-2 mb-4 md:mb-0">
              <Image
                src="/images/uet 2.png"
                alt="uet 2"
                width={200}
                height={150}
                className="education-img"
              />
              <Image
                src="/images/uet 4.png"
                alt="uet 4"
                width={200}
                height={150}
                className="education-img"
              />
              <Image
                src="/images/uet 5.png"
                alt="uet 5"
                width={200}
                height={150}
                className="education-img"
              />
            </div>
            <div className="text-container md:w-1/2 p-4">
              <h2 className="text-3xl font-bold  text-primary">𝙐𝙣𝙞𝙫𝙚𝙧𝙨𝙞𝙩𝙮</h2>
              <p className="text-lg mt-2">
                𝘐𝘯 2023, 𝘐 𝘨𝘰𝘵 𝘢𝘥𝘮𝘪𝘴𝘴𝘪𝘰𝘯 𝘵𝘰 𝘵𝘩𝘦 𝘜𝘯𝘪𝘷𝘦𝘳𝘴𝘪𝘵𝘺 𝘰𝘧 𝘌𝘯𝘨𝘪𝘯𝘦𝘦𝘳𝘪𝘯𝘨 𝘢𝘯𝘥
                𝘛𝘦𝘤𝘩𝘯𝘰𝘭𝘰𝘨𝘺 (𝘜𝘌𝘛) 𝘒𝘚𝘒 (𝘒𝘢𝘭𝘢 𝘚𝘩𝘢𝘩 𝘒𝘢𝘬𝘶) 𝘤𝘢𝘮𝘱𝘶𝘴 𝘢𝘧𝘵𝘦𝘳 𝘴𝘬𝘪𝘱𝘱𝘪𝘯𝘨 𝘰𝘯𝘦
                𝘺𝘦𝘢𝘳 𝘥𝘶𝘦 𝘵𝘰 𝘢𝘯 𝘢𝘤𝘤𝘪𝘥𝘦𝘯𝘵. 𝘐𝘯𝘪𝘵𝘪𝘢𝘭𝘭𝘺, 𝘐 𝘨𝘰𝘵 𝘢𝘥𝘮𝘪𝘴𝘴𝘪𝘰𝘯 𝘪𝘯 𝘊𝘖𝘔𝘚𝘈𝘛
                𝘜𝘯𝘪𝘷𝘦𝘳𝘴𝘪𝘵𝘺 𝘓𝘢𝘩𝘰𝘳𝘦 𝘧𝘰𝘳 𝘴𝘰𝘧𝘵𝘸𝘢𝘳𝘦 𝘦𝘯𝘨𝘪𝘯𝘦𝘦𝘳𝘪𝘯𝘨 𝘪𝘯 𝘑𝘢𝘯𝘶𝘢𝘳𝘺 2023.{" "}
              </p>
              <a
                href="https://maps.app.goo.gl/4iMa5zh4msd3sMRo9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-accent text-white bg-[#00308F] px-4 py-2 rounded mt-4 hover:bg-blue-700 hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
                  𝘎𝘰𝘰𝘨𝘭𝘦 𝘔𝘢𝘱𝘴
                </button>
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
