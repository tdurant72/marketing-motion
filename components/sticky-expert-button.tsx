"use client";
import React, { useEffect, useState } from "react";
import { PiPhoneFill } from "react-icons/pi";
const StickyExpertButton = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return showSticky ? (
    <button
      className="fixed bottom-4 right-0 z-50 bg-amber-500 text-white h-28 w-16 rounded-2xl shadow-lg text-base font-semibold flex flex-col items-center justify-center hover:bg-amber-600 transition-colors duration-200 md:flex-row md:bottom-8 md:right-8 md:h-auto md:w-auto md:rounded-lg md:text-lg md:px-6 md:py-3"
      onClick={() => window.location.href = 'tel:YOUR_PHONE_NUMBER'}
    >
      Talk to an Expert
      <PiPhoneFill className="inline-block mt-2 md:ml-2 md:mt-0" size={24}  />
    </button>
  ) : null;
};

export default StickyExpertButton;
