import { Geist, Geist_Mono } from "next/font/google";
import AdminNavbar from "../components/AdminNavbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin - Portal",
  description: "This is the admin porta ENjoy!",
};

export default function RootLayout({ children }) {
  return (
    <>
   <AdminNavbar/>
   {children}
   </>
     
  );
}
