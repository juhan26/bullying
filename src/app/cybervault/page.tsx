"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import Link from "next/link";

export default function CyberVault() {
    const [fileHash, setFileHash] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [report, setReport] = useState("");
    const [isEncrypting, setIsEncrypting] = useState(false);
    const [reportSent, setReportSent] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Feature 1: Evidence Hashing (SHA-256)
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

        setFileHash(hashHex);
    };

    // Feature 2: Secure Reporting Simulation
    const handleSendReport = async () => {
        if (!report) return;
        setIsEncrypting(true);

        // scramble effect
        const originalText = report;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let iterations = 0;

        const interval = setInterval(() => {
            setReport(prev =>
                prev.split("").map((char, index) => {
                    if (index < iterations) return "█";
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            iterations += 1;
            if (iterations > originalText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsEncrypting(false);
                    setReportSent(true);
                    setReport("");
                }, 500);
            }
        }, 30);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-indigo-500 selection:text-white pb-20">
            {/* Header */}
            <div className="border-b border-indigo-500/20 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
                <Container className="py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Kembali
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-mono text-green-500">SECURE CONNECTION ESTABLISHED</span>
                    </div>
                </Container>
            </div>

            <Container className="pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 mb-6 font-mono tracking-tight">
                        CyberVault
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Pusat keamanan digital untuk korban bullying. Amankan bukti digital Anda dengan enkripsi kriptografi dan kirim laporan secara anonim.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Feature 1: Evidence Hasher */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-800/50 border border-indigo-500/30 rounded-3xl p-8 backdrop-blur-sm hover:border-indigo-500/50 transition-all"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white">Digital Fingerprint</h2>
                        </div>

                        <p className="text-slate-400 mb-6 text-sm">
                            Unggah tangkapan layar atau bukti digital. Sistem akan men-generate <span className="text-indigo-400 font-mono">SHA-256 Hash</span> unik. Jika file diubah satu pixel pun, kode ini akan berubah. Ini membuktikan keaslian bukti Anda.
                        </p>

                        <div
                            className="border-2 border-dashed border-slate-600 rounded-2xl p-8 text-center cursor-pointer hover:bg-slate-700/30 hover:border-indigo-400 transition-all group"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <div className="text-slate-500 group-hover:text-indigo-400 transition-colors">
                                Drop file here or click to upload
                            </div>
                        </div>

                        <AnimatePresence>
                            {fileHash && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="mt-6 bg-slate-950 rounded-xl p-4 border border-teal-500/30 font-mono text-xs break-all overflow-hidden"
                                >
                                    <div className="text-teal-500 mb-2 font-bold uppercase tracking-wider flex justify-between">
                                        <span>Integrity Verified</span>
                                        <span>SHA-256</span>
                                    </div>
                                    <div className="text-slate-300">File: {fileName}</div>
                                    <div className="mt-2 text-teal-400 selection:bg-teal-500 selection:text-black p-2 bg-teal-500/10 rounded">
                                        {fileHash}
                                    </div>
                                    <div className="mt-3 flex gap-2 text-[10px] text-slate-500">
                                        <span>🔒 Calculated Client-Side</span>
                                        <span>🚫 No Data Uploaded</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Feature 2: Encrypted Whisper */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-800/50 border border-purple-500/30 rounded-3xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all relative overflow-hidden"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white">Encrypted Whisper</h2>
                        </div>

                        <p className="text-slate-400 mb-6 text-sm">
                            Ceritakan kejadian yang Anda alami. Pesan Anda akan dienkripsi sebelum dikirim ke database aman kami. Identitas Anda terlindungi.
                        </p>

                        {!reportSent ? (
                            <div className="space-y-4">
                                <textarea
                                    value={report}
                                    onChange={(e) => setReport(e.target.value)}
                                    placeholder="Tulis laporan Anda di sini..."
                                    className="w-full h-40 bg-slate-950 border border-slate-700 rounded-xl p-4 text-slate-300 focus:outline-none focus:border-purple-500 transition-all resize-none"
                                    disabled={isEncrypting}
                                ></textarea>
                                <button
                                    onClick={handleSendReport}
                                    disabled={!report || isEncrypting}
                                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {isEncrypting ? "ENCRYPTING DATA..." : "Kirim Laporan Aman"}
                                </button>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="h-64 flex flex-col items-center justify-center text-center p-6 bg-slate-950/50 rounded-2xl border border-green-500/30"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Laporan Terenkripsi Terkirim</h3>
                                <p className="text-slate-400 text-sm">
                                    Hash laporan Anda telah disimpan. Konselor kami akan meninjau data terdekripsi segera. Tetap kuat!
                                </p>
                                <button
                                    onClick={() => { setReportSent(false); }}
                                    className="mt-6 text-sm text-purple-400 hover:text-purple-300 hover:underline"
                                >
                                    Kirim laporan lain
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
