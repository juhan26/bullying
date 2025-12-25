"use client";

import React from 'react';
import Image from "next/image";
import chartImage from "@/../public/images/chart_image.png";

export default function BullyingChart() {
    return (
        <div className="w-full bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col items-center">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Tingkat Kasus Bullying Berdasarkan Jenis</h3>
            <div className="w-full max-w-lg">
                <Image
                    src={chartImage}
                    alt="Statistik Bullying"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-sm"
                    placeholder="blur"
                />
            </div>
        </div>
    );
}
