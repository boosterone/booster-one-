"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "選ばれる理由", href: "#why" },
  { label: "サービス", href: "#services" },
  { label: "制作実績", href: "#works" },
  { label: "料金プラン", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-xl border-b border-[rgba(201,168,76,0.15)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/images/logo.png"
              alt="BOOSTER ONE"
              className="h-10 w-10 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#contact");
            }}
            className="hidden lg:flex btn-gold px-6 py-2.5 rounded-full text-sm font-bold tracking-wider"
          >
            無料相談する
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span
              className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center gap-8 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <img
          src="/images/logo.png"
          alt="BOOSTER ONE"
          className="w-16 h-16 rounded-full object-cover mb-2"
        />
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className="text-2xl font-medium text-white hover:text-[#C9A84C] transition-colors duration-200 tracking-widest"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {link.label}
          </button>
        ))}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#contact");
          }}
          className="btn-gold px-10 py-4 rounded-full text-lg font-bold tracking-widest mt-4"
        >
          無料相談する
        </a>
      </div>
    </>
  );
}
