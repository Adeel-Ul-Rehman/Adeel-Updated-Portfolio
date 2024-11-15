"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Add class to body to mark this as contact page
    document.body.classList.add("contact-page");

    // Check if dark mode is enabled from localStorage or system preference
    const savedDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add("dark");
    }

    // Cleanup the body class when leaving this page
    return () => {
      document.body.classList.remove("contact-page");
      document.body.classList.remove("dark");
    };
  }, []);

  useEffect(() => {
    // Save the dark mode preference in localStorage
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !subject || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setSuccessMessage("");

    const mailtoLink = `mailto:ajadeel229@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;

    setSuccessMessage(
      "Your email client should open now. Please send your message!"
    );
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    setName("");
    setSubject("");
    setMessage("");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Number copied to clipboard!");
    });
  };

  return (
    <>
      <Navbar />
      <h1 className="text-6xl mt-5 text-bold text-center text-[#00308F] dark:text-[#ffffff]">
      𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙈𝙚
  </h1>
      <div className="min-h-screen py-32 -mt-20">
        <div className="relative py-8 flex items-center justify-center">
          <div className="w-full max-w-4xl flex flex-wrap lg:flex-nowrap gap-8">
            {/* Email Form (left side) */}
            <div className="w-full lg:w-1/2 bg-white dark:bg-[#333333] p-8 shadow-md rounded-lg flex flex-col justify-center">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/images/email.png"
                  alt="Contact Email Icon"
                  width={64}
                  height={64}
                  objectFit="contain"
                />
              </div>

              {error && (
                <div className="text-red-500 mb-4 text-center">{error}</div>
              )}
              {successMessage && (
                <div className="text-green-500 mb-4 text-center">
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="text-[#121212] dark:text-[#ffffff] font-medium">
                    𝙉𝙖𝙢𝙚    
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-black p-2 border-b-2 border-black focus:outline-none focus:border-[#00308F] dark:bg-[#444444] dark:text-[#ffffff] dark:border-[#555555]"
                    placeholder="𝘠𝘰𝘶𝘳 𝘕𝘢𝘮𝘦"
                  />
                </div>

                <div className="mb-4">
                  <label className="text-black dark:text-[#ffffff] font-medium">
                  𝙎𝙪𝙗𝙟𝙚𝙘𝙩
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-2 text-black border-b-2 border-black focus:outline-none focus:border-[#00308F] dark:bg-[#444444] dark:text-[#ffffff] dark:border-[#555555]"
                    placeholder="𝘚𝘶𝘣𝘫𝘦𝘤𝘵 𝘰𝘧 𝘺𝘰𝘶𝘳 𝘮𝘦𝘴𝘴𝘢𝘨𝘦"
                  />      
                </div>

                <div className="mb-6">
                  <label className="text-black dark:text-[#ffffff] font-medium">
                  𝙈𝙚𝙨𝙨𝙖𝙜𝙚
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border-2 text-black border-black focus:outline-none focus:border-[#00308F] min-h-[100px] dark:bg-[#444444] dark:text-[#ffffff] dark:border-[#555555]"
                    placeholder="𝘠𝘰𝘶𝘳 𝘮𝘦𝘴𝘴𝘢𝘨𝘦"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#00308F] flex items-center justify-center text-white py-2 px-4 rounded-lg dark:bg-[#00308F] dark:text-white hover:bg-[#002366] text-center"
                >
                  <span>𝘚𝘦𝘯𝘥</span>
                </button>
              </form>
            </div>

            {/* WhatsApp and LinkedIn stacked (right side) */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              {/* WhatsApp Section */}
              <div className="bg-white dark:bg-[#333333] p-6 pt-4 shadow-md rounded-lg flex flex-col justify-center items-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/images/whatsapp.png"
                    alt="Contact WhatsApp Icon"
                    width={64}
                    height={64}
                    objectFit="contain"
                    className="mt-2 mb-4"
                  />
                </div>

                <p className="text-lg text-black dark:text-[#dddddd] text-center mb-4">
                𝘍𝘦𝘦𝘭 𝘧𝘳𝘦𝘦 𝘵𝘰 𝘳𝘦𝘢𝘤𝘩 𝘰𝘶𝘵 𝘵𝘰 𝘮𝘦 𝘥𝘪𝘳𝘦𝘤𝘵𝘭𝘺 𝘷𝘪𝘢 𝘮𝘺 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝘯𝘶𝘮𝘣𝘦𝘳 𝘰𝘯 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱. 
                </p>

                <div className="text-center">
                  <div className="text-[#00308F] dark:text-[#ffffff] font-semibold">
                  𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝙉𝙪𝙢𝙗𝙚𝙧 :{" "}
                    <span className="text-blue-500">+92 309 0005634</span>
                  </div>

                  {/* Buttons stacked vertically in the center */}
                  <div className="flex flex-col items-center mt-4 space-y-2">
                    <button
                      onClick={() => copyToClipboard("+92 309 0005634")}
                      className="bg-[#00308F] text-white py-2 px-4 rounded-lg hover:bg-[#002366]"
                    >
                      𝘊𝘰𝘱𝘺 𝘕𝘶𝘮𝘣𝘦𝘳
                    </button>

                    <a
                      href="https://wa.me/+923090005634"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#00308F] text-white py-2 px-4 rounded-lg hover:bg-[#002366] text-center"
                    >
                      𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘔𝘦
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn Section */}
              <div className="bg-white dark:bg-[#333333] p-6 pt-4 shadow-md rounded-lg flex flex-col justify-center items-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/images/linkedin.png"
                    alt="Contact LinkedIn Icon"
                    width={64}
                    height={64}
                    objectFit="contain"
                    className="mt-2 mb-4"
                  />
                </div>

                <p className="text-lg text-black dark:text-[#dddddd] text-center mb-4">
                𝘊𝘰𝘯𝘯𝘦𝘤𝘵 𝘸𝘪𝘵𝘩 𝘮𝘦 𝘰𝘯 𝘓𝘪𝘯𝘬𝘦𝘥𝘐𝘯
                </p>

                <div className="text-center">
                  <a
                      href="https://www.linkedin.com/in/adeel-ul-rehman-73a088294/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#00308F] text-white py-2 px-4 rounded-lg hover:bg-[#002366] text-center"
                    >
                       𝙑𝙞𝙨𝙞𝙩 𝙈𝙮 𝙇𝙞𝙣𝙠𝙚𝙙𝙄𝙣 𝙋𝙧𝙤𝙛𝙞𝙡𝙚
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
