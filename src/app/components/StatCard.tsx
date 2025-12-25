"use client";
import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="card p-4">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </motion.div>
  );
}
