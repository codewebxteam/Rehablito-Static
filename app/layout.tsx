import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Footer import kiya
import WhatsAppWidget from "./components/WhatsAppWidget"; // Import added

// Blueprint Page 10 ke hisaab se fonts setup [cite: 186]
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
  weight: ['400', '600', '700', '800'],
});

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "Rehablito | Rehabilitation & Autism Care Center",
  description: "Specialist services for children with autism and special needs including ABA, Speech, and Occupational therapy. [cite: 20]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${nunito.variable} font-sans bg-[#F7FBFF] text-[#1A2E44] min-h-screen flex flex-col`}>
        {/* Redesigned Navbar jo humne abhi banaya hai */}
        <Navbar />

        {/* Main content area jo baki space cover karega */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Professional Footer jo har page ke bottom par dikhega */}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}