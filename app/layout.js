import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Session from "@/components/Session";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy me Chai",
  description: "This Website is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <Session>
        <Navbar/>
       < div className=" text-white min-h-screen ">
        {children}
       </div>
        <Footer/>
        </Session>
        </body>
    </html>
  );
}
