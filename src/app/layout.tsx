import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Stop Bullying — Bangun Lingkungan Aman",
  description: "Platform edukasi dan aksi untuk mencegah bullying di lingkungan sekolah dan masyarakat."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
