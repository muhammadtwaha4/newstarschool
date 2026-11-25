
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const academicLinks = [
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Our Teachers", path: "/team" },
    { name: "School Activities", path: "/gallery" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#173000] text-white">

      {/* Decorative Top Border */}
      <div className="flex h-2 w-full">
        <div className="w-[40%] bg-[#DAB716]" />
        <div className="w-[25%] bg-[#FF671A]" />
        <div className="w-[15%] bg-[#FA3518]" />
        <div className="flex-1 bg-[#396000]" />
      </div>

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border-[45px] border-white/[0.03]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full border-[40px] border-[#DAB716]/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">

        {/* Top Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/15 pb-10 md:flex-row md:items-center">

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-3xl text-[#DAB716]">✦</span>
              <span className="text-sm font-bold uppercase tracking-[4px] text-[#DAB716]">
                Welcome to
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              NEW STAR <span className="text-[#DAB716]">SCHOOL</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-white/60">
              Inspiring young minds, building bright futures, and creating
              opportunities for every student to shine.
            </p>
          </div>

          <Link
            to="/admissions"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#DAB716] px-7 py-4 font-bold text-[#173000] transition duration-300 hover:bg-[#FF671A] hover:text-white"
          >
            Explore Admissions
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* School Info */}
          <div>
            <h3 className="mb-6 text-lg font-extrabold">
              About Our School
              <span className="mt-2 block h-1 w-12 rounded-full bg-[#DAB716]" />
            </h3>

            <p className="text-sm leading-7 text-white/60">
              New Star School is dedicated to providing quality education
              in a positive and supportive environment where students can
              discover their talents and achieve their dreams.
            </p>

            <div className="mt-6 flex gap-3">
              {["✦", "★", "✧"].map((symbol, index) => (
                <div
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DAB716]/30 bg-white/5 text-lg text-[#DAB716] transition hover:-translate-y-1 hover:bg-[#DAB716] hover:text-[#173000]"
                >
                  {symbol}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-extrabold">
              Quick Links
              <span className="mt-2 block h-1 w-12 rounded-full bg-[#FF671A]" />
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-3 text-sm text-white/60 transition hover:translate-x-1 hover:text-[#DAB716]"
                  >
                    <span className="text-[#FF671A] transition group-hover:text-[#DAB716]">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="mb-6 text-lg font-extrabold">
              Explore More
              <span className="mt-2 block h-1 w-12 rounded-full bg-[#FA3518]" />
            </h3>

            <ul className="space-y-4">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-3 text-sm text-white/60 transition hover:translate-x-1 hover:text-[#DAB716]"
                  >
                    <span className="text-[#FF671A]">✦</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-extrabold">
              Get In Touch
              <span className="mt-2 block h-1 w-12 rounded-full bg-[#DAB716]" />
            </h3>

            <p className="mb-5 text-sm leading-7 text-white/60">
              Have questions about admissions or our school? We would love
              to hear from you.
            </p>

            <Link
              to="/contact"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#DAB716]/50 hover:bg-white/10"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF671A] text-xl">
                ✉
              </div>

              <div>
                <p className="text-xs text-white/50">Have a question?</p>
                <p className="mt-1 text-sm font-bold text-[#DAB716]">
                  Contact Our School →
                </p>
              </div>
            </Link>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/15 pt-7">

          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} New Star School. All Rights Reserved.
            </p>

            <p className="text-xs font-semibold tracking-wide text-white/60">
              MADE FOR <span className="text-[#DAB716]">BRIGHT FUTURES</span>
              <span className="ml-2 text-[#FF671A]">✦</span>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
