"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import andini from "@/../public/images/andini.jpg";
import Image from "next/image";

import logoK7 from "@/../public/images/logo_k7.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 nav-blur border-b border-transparent">
      <div className="max-w-screen-xl px-4 mx-auto flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-indigo-500/30 transition-all bg-white border border-indigo-100">
            <Image
              src={logoK7}
              alt="Kelompok 7 Logo"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <div className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Kelompok 7</div>
            <div className="text-xs font-medium text-slate-500 tracking-wide">
              Stop Bullying Campaign
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="font-semibold">
            Home
          </Link>
          <Link href="/about" className="font-semibold">
            About
          </Link>
          <Link href="/documentation" className="font-semibold">
            Documentation
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg card"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="md:hidden px-4 pb-6"
          >
            <div className="bg-white rounded-2xl p-4 card space-y-2">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block font-semibold"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block font-semibold"
              >
                About
              </Link>
              <Link
                href="/documentation"
                onClick={() => setOpen(false)}
                className="block font-semibold"
              >
                Documentation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
