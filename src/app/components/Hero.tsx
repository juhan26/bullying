"use client";
import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/../public/images/bullying_hero.png"

export default function Hero() {
  return (
    <div className="py-12 px-4 md:py-20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-indigo-500 uppercase bg-indigo-50 rounded-full">
              Stop Bullying Sekarang
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-800">
              Bangun Lingkungan <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Aman & Positif</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              Bersama kita ciptakan sekolah dan masyarakat yang bebas dari perundungan. Jadilah teman, bukan lawan.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#about" className="px-8 py-4 text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1 text-center">
                Pelajari Lebih Lanjut
              </a>
              <a href="#action" className="px-8 py-4 text-slate-700 bg-white border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all text-center">
                Ambil Aksi
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300/20 to-purple-300/20 rounded-full filter blur-3xl transform scale-110 -z-10"></div>
            <Image
              src={heroImage}
              alt="Stop Bullying Illustration"
              width={600}
              height={600}
              className="w-full max-w-lg object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
