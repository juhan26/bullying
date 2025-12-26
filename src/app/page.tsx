"use client";

import Container from "./components/Container";
import Link from 'next/link';
import Hero from "./components/Hero";
import Section from "./components/Section";
import { motion } from "framer-motion";
import StatCard from "./components/StatCard";
import STATS from "@/data/stats";
import BullyingChart from "./components/BullyingChart";
import ThreeDCard from "./components/ThreeDCard";

export default function Home() {
  const types = [
    {
      title: "Verbal",
      desc: "Menghina, mengejek, atau memberi julukan negatif yang menyakiti hati.",
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Fisik",
      desc: "Memukul, mendorong, menendang, atau merusak barang milik orang lain.",
      color: "from-red-400 to-red-600",
      bg: "bg-red-50"
    },
    {
      title: "Sosial",
      desc: "Mengucilkan, menyebarkan rumor, atau mempermalukan di depan umum.",
      color: "from-purple-400 to-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Cyber",
      desc: "Perundungan melalui media sosial, menyebarkan aib, atau ancaman online.",
      color: "from-pink-400 to-pink-600",
      bg: "bg-pink-50"
    }
  ];

  const impacts = [
    { title: "Kesehatan Mental", desc: "Depresi, kecemasan, hingga risiko bunuh diri." },
    { title: "Penurunan Akademik", desc: "Sulit konsentrasi dan nilai sekolah menurun drastis." },
    { title: "Isolasi Sosial", desc: "Menarik diri dari pergaulan dan takut berinteraksi." },
    { title: "Gangguan Fisik", desc: "Cedera fisik, gangguan tidur, dan masalah makan." }
  ];

  return (
    <>
      <Hero />

      {/* DEFINITION */}
      <Section title="Apa Itu Bullying?" subtitle="Memahami tindakan perundungan di sekitar kita">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-10 border-l-4 border-indigo-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-medium">
              <span className="text-indigo-600 font-bold">Bullying</span> adalah segala bentuk penindasan atau kekerasan yang dilakukan dengan sengaja oleh satu orang atau sekelompok orang yang lebih kuat atau berkuasa terhadap orang lain, dengan tujuan untuk menyakiti dan dilakukan secara terus menerus.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* TYPES */}
      <Section title="Jenis-Jenis Bullying" subtitle="Kenali berbagai bentuk perundungan">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ThreeDCard className={`h-full card p-6 ${item.bg} border-t-0 hover:shadow-xl transition-all group`}>
                  <div className={`w-12 h-1 bg-gradient-to-r ${item.color} mb-4 rounded-full`}></div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 transform group-hover:translate-z-10">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </ThreeDCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* IMPACT */}
      <Section title="Dampak Serius" subtitle="Bahaya bullying bagi masa depan anak">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impacts.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="card p-6 flex items-start gap-4 hover:bg-white/90"
              >
                <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* STATS & CHART */}
      <Section title="Data & Fakta" subtitle="Angka yang mengkhawatirkan">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <BullyingChart />
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <StatCard key={s.id} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SOLUTIONS / ACTION */}
      <div id="action">
        <Section title="Ambil Peran" subtitle="Apa yang bisa kita lakukan?">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 bg-gradient-to-br from-indigo-50 to-white">
                <h3 className="text-xl font-bold text-indigo-700 mb-3 block border-b pb-2 border-indigo-100">Korban</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span>🛡️</span> Jangan takut melapor</li>
                  <li className="flex gap-2"><span>🤝</span> Cari teman yang dipercaya</li>
                  <li className="flex gap-2"><span>🛑</span> Simpan bukti (jika cyber)</li>
                </ul>
              </div>
              <div className="card p-6 bg-gradient-to-br from-purple-50 to-white">
                <h3 className="text-xl font-bold text-purple-700 mb-3 block border-b pb-2 border-purple-100">Saksi</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span>👀</span> Jangan diam saja</li>
                  <li className="flex gap-2"><span>🗣️</span> Tegur pelaku jika aman</li>
                  <li className="flex gap-2"><span>👂</span> Dampingi korban</li>
                </ul>
              </div>
              <div className="card p-6 bg-gradient-to-br from-blue-50 to-white">
                <h3 className="text-xl font-bold text-blue-700 mb-3 block border-b pb-2 border-blue-100">Sekolah</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span>📚</span> Sosialisasi anti-bullying</li>
                  <li className="flex gap-2"><span>⚖️</span> Tegakkan aturan tegas</li>
                  <li className="flex gap-2"><span>🧘</span> Sediakan konseling</li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      {/* CYBERVAULT CTA */}
      <Section title="Technological Protection" subtitle="Fitur eksklusif untuk perlindungan digital">
        <Container>
          <Link href="/cybervault">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/30 transition-all"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -ml-10 -mb-10 group-hover:bg-teal-500/20 transition-all"></div>

              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold text-teal-400 bg-teal-400/10 rounded-full border border-teal-400/20">
                    NEW IT FEATURE
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Masuk ke <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">CyberVault</span>
                  </h2>
                  <p className="text-slate-400 text-lg max-w-xl">
                    Gunakan teknologi kriptografi untuk mengamankan bukti bullying dan kirim laporan terenkripsi. Ruang aman digital Anda.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-bold flex items-center gap-3 group-hover:bg-white/20 transition-all">
                    Akses Fitur
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </Container>
      </Section>

      {/* QUOTE SECTION */}
      <div className="py-20 text-center px-4">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="card p-8 md:p-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-2xl md:text-4xl text-black font-extrabold mb-4 relative z-10">"Keberanian bukan berarti tidak takut, tapi berani bertindak meski takut."</h2>
            <p className="text-black text-lg relative z-10">- Stop Bullying, Start Caring</p>
          </motion.div>
        </Container>
      </div>
    </>
  );
}
