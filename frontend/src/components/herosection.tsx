import React from "react";
import LinearGradient from "./magicui/linear-gradient";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <LinearGradient />
      <h1 className="text-6xl py-10 font-bold text-center">Hello</h1>
      <h1 className="text-6xl py-1 font-bold text-center">it's AcTracker</h1>
      <div className="py-6">
        <h1 className="text-center justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6 py-10">
        <Image
          className="w-12 h-12 rounded-full border border-white"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="vini image"
          width={48}
          height={48}
        />
        <Image
          className="w-12 h-12 rounded-full border border-white"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="vini image"
          width={48}
          height={48}
        />
        <Image
          className="w-12 h-12 rounded-full border border-white"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="vini image"
          width={48}
          height={48}
        />
        <Image
          className="w-12 h-12 rounded-full border border-white"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="vini image"
          width={48}
          height={48}
        />
      </div>
      <div className="flex justify-center items-center py-">
        <Link href="/activitypage">
          <button className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg flex items-center">
            <span className="mr-2">Get Started</span>
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
