
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Academics", path: "/academics" },
    { name: "Our Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `relative py-2 text-sm font-semibold tracking-wide transition-all duration-300
    ${
      isActive
        ? "text-[#DAB716]"
        : "text-white hover:text-[#DAB716]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">

      {/* Main Navbar */}
      <nav className="relative overflow-hidden bg-[#396000]">

        {/* Background Decorative Shapes */}
        <div className="absolute -right-16 -top-24 h-56 w-56 rounded-full border-[35px] border-white/5" />
        <div className="absolute -left-12 -bottom-28 h-48 w-48 rounded-full border-[25px] border-[#DAB716]/10" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DAB716] text-3xl shadow-md">
              ⭐
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-wide text-white sm:text-2xl">
                NEW STAR
              </h1>
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#DAB716] sm:text-xs">
                School of Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={linkStyle}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#DAB716] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Button */}
          <Link
            to="/admissions"
            className="hidden rounded-full bg-[#FF671A] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#FA3518] lg:inline-flex"
          >
            Join Our School <span className="ml-2">→</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-[#DAB716] hover:text-[#396000] lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`relative overflow-hidden bg-[#294700] transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-[550px] border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-white/10 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "text-[#DAB716]"
                      : "text-white hover:pl-2 hover:text-[#DAB716]"
                  }`
                }
              >
                {link.name}
                <span className="text-[#FF671A]">↗</span>
              </NavLink>
            ))}

            <Link
              to="/admissions"
              onClick={() => setMenuOpen(false)}
              className="mt-4 mb-3 rounded-xl bg-[#FF671A] px-5 py-3 text-center font-bold text-white transition hover:bg-[#FA3518]"
            >
              Join Our School →
            </Link>
          </div>
        </div>
      </nav>

      {/* Decorative Bottom Border */}
      <div className="relative flex h-[6px] w-full">
        <div className="w-[45%] bg-[#DAB716]" />
        <div className="w-[25%] bg-[#FF671A]" />
        <div className="w-[15%] bg-[#FA3518]" />
        <div className="flex-1 bg-white" />
      </div>

    </header>
  );
}
