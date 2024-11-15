"use client"
import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
    const [emailContent, setEmailContent] = useState('');

    const handleSendEmail = () => {
        if (emailContent.trim()) {
            window.location.href = `mailto:ajadeel229@gmail.com?subject=Message from Portfolio&body=${encodeURIComponent(emailContent)}`;
        } else {
            alert('Please write a message before sending.');
        }
    };

    return (
        <footer className="relative bg-primary py-12 text-secondary overflow-visible">
            <div className="container mx-auto flex flex-col md:flex-row justify-between relative z-20 top-10">
                <div className="w-full max-w-lg text-left z-20 bg-none rounded-md -mb-6 md:mb-6 md:ml-0">
                    <h3 className="text-lg mb-2 text-white text-left md:text-center">𝑾𝒓𝒊𝒕𝒆 𝒎𝒆 𝒂𝒏 𝑬𝒎𝒂𝒊𝒍</h3>
                    <textarea
                        placeholder="Type your message here..."
                        value={emailContent}
                        onChange={(e) => setEmailContent(e.target.value)}
                        className="w-full h-16 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 resize-none md:border-2 md:border-black md:focus:ring-blue-300"
                    ></textarea>
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={handleSendEmail}
                            className="px-3 py-1 bg-[#00308F] text-white rounded-md flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 text-sm"
                        >
                        <FontAwesomeIcon icon={faPaperPlane     } />
                        </button>
                    </div>
                </div>

                <p className="flex items-center text-sm md:text-lg font-bold mt-10 md:mt-32 md:ml-30 text-white w-full justify-center md:justify-end">
                    © {new Date().getFullYear()} 𝑨𝒅𝒆𝒆𝒍 𝑼𝒍-𝑹𝒆𝒉𝒎𝒂𝒏. 𝑨𝒍𝒍 𝒓𝒊𝒈𝒉𝒕𝒔 𝒓𝒆𝒔𝒆𝒓𝒗𝒆𝒅.
                </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-visible leading-none z-10">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-96">
                    <path d="M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,69.3C560,85,640,107,720,106.7C800,107,880,85,960,74.7C1040,64,1120,64,1200,69.3L1200,120L0,120Z" fill="#00308F"></path>
                </svg>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-80">
                    <path d="M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,69.3C560,85,640,107,720,106.7C800,107,880,85,960,74.7C1040,64,1120,64,1200,69.3L1200,120L0,120Z" fill="#0050B3"></path>
                </svg>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-62">
                    <path d="M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,69.3C560,85,640,107,720,106.7C800,107,880,85,960,74.7C1040,64,1120,64,1200,69.3L1200,120L0,120Z" fill="#0071E3"></path>
                </svg>
            </div>

            {/* Mobile specific styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    textarea {
                        border: 2px solid black; /* Border for mobile */
                        border-radius: 8px; /* Rounded corners */
                    }
                    .text-lg {
                        font-size: 0.875rem; /* Decreased font size for mobile */
                    }
                    p {
                        text-align: center; /* Center text for mobile */
                        font-size: 0.75rem; /* Smaller copyright text for mobile */
                    }
                }
            `}</style>
        </footer>
    );
}
