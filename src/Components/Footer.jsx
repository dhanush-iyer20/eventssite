/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Website Developed by Dhanush Iyer
            </p>
            <a
              href="https://www.linkedin.com/in/dhanush-iyer-219823248/"
              className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
            >
              LinkedIn ,
            </a>
            <a
              href="https://www.instagram.com/dhanush_iyer/"
              className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
            >
              Instagram
            </a>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right"></p>
      </div>
    </footer>
  );
};

export default Footer;
