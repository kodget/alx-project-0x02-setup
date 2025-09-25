import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Index() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen bg-black text-white`}
    >
      <Header />
      <main className="xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl max-[600px]:text-lg m-[20%]">
        Welcome to this page
      </main>
    </div>
  );
}
