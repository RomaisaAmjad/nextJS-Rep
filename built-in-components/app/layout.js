import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookishBundle Home",
  description: "BookishBundle App using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar />
          <div className="flex flex-col items-center justify-center min-h-[83vh]">
        {children}
      </div>
         <Footer />
      </body>
    </html>
  );
}
