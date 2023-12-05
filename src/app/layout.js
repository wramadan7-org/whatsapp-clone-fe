import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatsApp Clone",
  description: "Clone WhatsApp Web using Next.Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#444444]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
