import Navbar from "./components/Navbar";
import PageWrapper from "./page-wrapper";

import Footer from "./components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import NewsLetter from "./components/NewsLetter";

export const metadata: Metadata = {
  title: "Envogue Elite",
  description: "Elegant Style",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primarywhite">
        <PageWrapper>
          <Navbar />
          {children}
          <NewsLetter/>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
