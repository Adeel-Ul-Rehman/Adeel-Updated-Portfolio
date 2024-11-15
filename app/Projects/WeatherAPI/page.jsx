// app/Projects/WeatherAPI/page.jsx
"use client";
import React from 'react';

export default function WeatherAPIProject() {
  return (
    <div className="min-h-screen bg-[#edf2fc] dark:bg-[#121212] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full h-full max-w-4xl bg-white dark:bg-[#333333] p-4 sm:p-8 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="/Projects/WeatherAPI/index.html"
          title="Weather API Project"
          className="w-full h-screen sm:h-[80vh] border-0"
        ></iframe>
      </div>
    </div>
  );
}
