import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Nickk",
  description: "Web Based Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="body min-h-screen">
          <div className='container'>
            <div className="sidebar">
              <div className="logo-container">
                <Image className="img" src="/profile.jpg" alt="profile" fill={true}/>
              </div>
              <div className="profile-data">
                <h1>
                  Nikhil Sharma
                </h1>
              </div>
              <div className="role">
                <h2>
                  Web Developer
                </h2>
              </div>
              <hr className="sidebar-hr"></hr>
              <div className="contacts">
                <ul>
                  <li className="contacts-itemholder">
                    <div className="contacts-img invert">
                      <Image src="/mail.png" alt="email" fill={true}></Image>
                    </div>
                    <ul>
                      <li>Email</li>
                      <li className="contacts-data">nikhilsharmalku@gmai.com</li>
                    </ul>
                  </li>
                  <li className="contacts-itemholder">
                    <div className="contacts-img invert">
                      <Image src="/phone.png" alt="phone" fill={true}></Image>
                    </div>
                    <ul>
                      <li>Phone no</li>
                      <li className="contacts-data">+91 7985788639</li>
                    </ul>
                  </li>
                  <li className="contacts-itemholder">
                    <div className="contacts-img invert">
                      <Image src="/dob.png" alt="date-of-birth" fill={true}></Image>
                    </div>
                    <ul>
                      <li>D.O.B.</li>
                      <li className="contacts-data">12th March 2004</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main">
            <Navbar/>
            <h1 className="heading">About Me</h1>
            <hr className="header-breaker"></hr>
            <div className="content">
              {children}
            </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
