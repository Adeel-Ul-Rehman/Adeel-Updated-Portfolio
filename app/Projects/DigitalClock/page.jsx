"use client";
import React from 'react';

export default function DigitalClockProject() {
  return (
    <div className="min-h-screen bg-[#edf2fc] dark:bg-[#121212] flex items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-white dark:bg-[#333333] p-8 rounded-lg shadow-lg">
        <iframe
          src="/Projects/DigitalClock/index.html"
          title="Digital Clock Project"
          className="w-full h-[600px] border-0"
        ></iframe>
      </div>
    </div>
  );
}
