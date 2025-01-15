import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";

import AabddHeader from './components/aabdd-header';
import AabddFooter from './components/aabdd-footer';

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "arthurblattman.dev",
  description: "This is my website.",
  icons: {
    icon: '/rosie.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} antialiased layout`}>
        <AabddHeader />
        <main className="aabdd-content">{children}</main>
        <AabddFooter />
      </body>
    </html>
  );
} 