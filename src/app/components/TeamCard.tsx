"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import memberImage from "../../../public/images/faiz.png";

type Member = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string; // ilustrasi 3D / avatar optional
};

export default function TeamCard({ member }: { member: Member }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
      className="
        relative p-2 rounded-3xl overflow-visible
        bg-gradient-to-br from-white via-white/90 to-white/70
        shadow-[0_8px_30px_rgb(0,0,0,0.08)]
        border border-white/40
      "
    >
      <div className="bg-blue-100 rounded-2xl flex">
        {/* Glow background */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none 
        bg-gradient-to-br from-pink-300/30 via-purple-300/30 to-blue-300/30 blur-2xl"
        ></div>

        <div className="p-2 relative w-full">
          <div className="text-lg font-extrabold text-slate-800 leading-tight">
            {member.name}
          </div>
          <div className="text-sm font-medium text-slate-500">
            {member.role}
          </div>

          <div className="absolute top-2  right-0 -translate-y-1/2 z-10 flex gap-4 items-center">
            <Image
              height={100}
              width={100}
              src={member.image ?? memberImage}
              alt="member"
              className="mix-blend-darken bg-cover"
            />
          </div>
        </div>
      </div>

      {member.bio && (
        <div className="p-2">
          <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
            {member.bio}
          </p>
        </div>
      )}
    </motion.div>
  );
}
