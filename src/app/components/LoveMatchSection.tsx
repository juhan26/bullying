"use client";
import { useState } from "react";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

export default function LoveMatchSection() {
  const [you, setYou] = useState({ name: "", age: "" });
  const [partner, setPartner] = useState({ name: "", age: "" });
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [underageModal, setUnderageModal] = useState(false);

  const numerologyMap: Record<string, number> = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
  };

  const reduceToSingle = (num: number): number => {
    while (num > 9 && num !== 11 && num !== 22) {
      num = num
        .toString()
        .split("")
        .reduce((a, b) => a + parseInt(b), 0);
    }
    return num;
  };

  const calculateNameNumber = (name: string): number => {
    const letters = name.toUpperCase().replace(/[^A-Z]/g, "");
    const sum = [...letters].reduce((total, char) => {
      return total + (numerologyMap[char] || 0);
    }, 0);
    return reduceToSingle(sum);
  };

  const getCompatibility = (a: number, b: number): string => {
    const diff = Math.abs(a - b);
    if (diff === 0) return "Sangat Serasi ❤️ (Energi kalian sama, harmonis banget!)";
    if (diff === 1) return "Cocok 💕 (Energinya saling melengkapi.)";
    if (diff <= 3) return "Lumayan Cocok ✨ (Masih bisa saling mengimbangi.)";
    return "Butuh Usaha 😬 (Tapi kalau cinta, pasti bisa.)";
  };

  const handleCheck = () => {
    setError("");
    setResult(null);

    if (!you.name || !partner.name || !you.age || !partner.age) {
      setError("Semua data harus diisi ya ❤️");
      return;
    }

    if (parseInt(you.age) < 18 || parseInt(partner.age) < 18) {
      setUnderageModal(true);
      return;
    }

    const yourNumber = calculateNameNumber(you.name);
    const partnerNumber = calculateNameNumber(partner.name);
    const compatibility = getCompatibility(yourNumber, partnerNumber);

    setResult({ yourNumber, partnerNumber, compatibility });
  };

  return (
    <Section
      title="Cek Kecocokan Jodoh"
      subtitle="Fitur numerologi ringan untuk edukasi"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6 bg-rose-100/60 rounded-2xl shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Anda */}
            <div>
              <label className="block font-semibold text-sm">Nama Anda</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl border mt-1 text-sm"
                value={you.name}
                onChange={(e) => setYou({ ...you, name: e.target.value })}
              />

              <label className="block font-semibold text-sm mt-4">Umur Anda</label>
              <input
                type="number"
                className="w-full p-3 rounded-xl border mt-1 text-sm"
                value={you.age}
                onChange={(e) => setYou({ ...you, age: e.target.value })}
              />
            </div>

            {/* Pasangan */}
            <div>
              <label className="block font-semibold text-sm">Nama Pasangan</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl border mt-1 text-sm"
                value={partner.name}
                onChange={(e) => setPartner({ ...partner, name: e.target.value })}
              />

              <label className="block font-semibold text-sm mt-4">Umur Pasangan</label>
              <input
                type="number"
                className="w-full p-3 rounded-xl border mt-1 text-sm"
                value={partner.age}
                onChange={(e) => setPartner({ ...partner, age: e.target.value })}
              />
            </div>
          </div>

          <button
            onClick={handleCheck}
            className="w-full mt-6 py-3 bg-rose-300 hover:bg-rose-400 text-white rounded-xl font-semibold text-sm"
          >
            Cek Kecocokan 💞
          </button>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-xl text-center text-sm font-medium">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-6 p-4 bg-white rounded-xl border border-rose-200 text-sm">
              <h3 className="text-base font-bold mb-2">Hasil Numerologi</h3>

              <p><b>Angka Nama Anda:</b> {result.yourNumber}</p>
              <p><b>Angka Nama Pasangan:</b> {result.partnerNumber}</p>

              <p className="mt-3 font-semibold text-rose-400">
                💖 {result.compatibility}
              </p>
            </div>
          )}
        </motion.div>
      </Container>

      {/* ===================== MODAL ===================== */}
      {underageModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl text-center"
          >
            <h2 className="text-lg font-bold text-rose-400">🚫 Belum Cukup Umur</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Salah satu dari kalian masih di bawah <b>18 tahun</b>.
              <br />
              <span className="text-rose-500 font-semibold">
                Secara usia, kamu belum siap untuk hubungan serius.
              </span>
              <br />
              Fokus dulu ke sekolah dan masa depanmu ya ✨
            </p>

            <button
              onClick={() => setUnderageModal(false)}
              className="mt-5 px-5 py-2 bg-rose-200 hover:bg-rose-300 text-white rounded-xl text-sm font-semibold"
            >
              Mengerti ❤️
            </button>
          </motion.div>
        </div>
      )}
    </Section>
  );
}
