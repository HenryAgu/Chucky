import type { Metadata } from "next";
import { Crete_Round, Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";

const creteRound = Crete_Round({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-notoSans",
});

export const metadata: Metadata = {
  title: "Chucky Dashboard | Welcome To Chucky Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${creteRound.className} ${inter.className} ${notoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}