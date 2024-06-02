"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="bg-black w-screen overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="flex flex-col space-y-4 items-start">
            <a href="https://jadehospitainment.com">
              <img
                src="https://jadehospitainment.com/wp-content/uploads/2023/03/image-4.png"
                width="72"
                height="65"
                alt=""
                className="rounded-lg"
              />
            </a>
            <p className="text-sm text-[#889C9C] tracking-wide text-left px-10">
              Welcome to Jade Retreats, a bunch of hidden gems located at the
              most upbeat locations around Bangalore and Goa. As soon as you
              arrive, you&apos;ll be surrounded by lush greenery and breathtaking
              views that will transport you to a peaceful state of mind.
            </p>
            <a href="http://jadehospitainment.com/book-now/" className="mt-4">
              <i className="fas fa-calendar-alt"></i>
            </a>
          </div>

          {/* Empty Column for spacing */}
          <div className="sm:col-span-1"></div>

          {/* Second Column */}
          <div className="flex flex-col space-y-4 justify-start items-start md:items-start">
            <h2 className="text-xl text-white font-semibold">Know More</h2>
            <ul className="text-[#889C9C] text-sm space-y-2">
              <li>Brochure</li>
              <li>Blog</li>
              <li>People&apos;s Experiences</li>
              <li>Get In Touch</li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="flex flex-col space-y-4 justify-start items-start">
            <h2 className="text-xl text-white font-semibold">
              Important Links
            </h2>
            <ul className="text-[#889C9C] text-sm space-y-2 text-left">
              <li>Privacy</li>
              <li>Terms &amp; Conditions</li>
              <li>Refund Policy</li>
              <li>Resources</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
