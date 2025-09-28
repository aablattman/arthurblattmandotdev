import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import AabddHeader from './components/aabdd-header';
import AabddFooter from './components/aabdd-footer';

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "Arthur Blattman — Principal Engineer",
  description:
    "Principal Engineer — end-to-end systems (Data Platforms, Cloud Infra & Apps). I build event-driven platforms and customer-facing apps.",
  openGraph: {
    title: "Arthur Blattman — Principal Engineer",
    description:
      "End-to-end systems: data platforms, cloud infra & apps. Recent work: in-house loyalty platform, challenge app, GCP data platform.",
    url: "https://arthurblattman.dev",
    siteName: "arthurblattman.dev",
    type: "website"
  },
  icons: { icon: "/rosie.ico" }
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
