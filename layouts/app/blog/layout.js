import { Geist, Geist_Mono } from "next/font/google";
import BlogNavbar from "../components/BlogNavbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog- Portal",
  description: "This is the Blog portal!",
};

export default function RootLayout({ children }) {
  return (
    <>
   <BlogNavbar/>
   {children}
   </>
     
  );
}
