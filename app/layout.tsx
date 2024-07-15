import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './css/animation.css';
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  icons: {
    icon: "/phone.png",
  },
};

export default function RootLayout({
  children, heading,
}: Readonly<{
  children: React.ReactNode;
  heading: {
    tag: string
  };
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="body min-h-screen">
          <div className='container'>
            <Sidebar />
            <div className="main">
              <Navbar />
              <h1 className="heading">About Me</h1> {/* change About Me to {heading.tag} and change according to page */}
              <hr className="header-breaker"></hr>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
