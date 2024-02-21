import { Encode_Sans } from "next/font/google";
import "./globals.css";

const encodeSans = Encode_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Vik i Myrdal",
  description: "Created by Frontend Developer Ermakova Alina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={encodeSans.className}>{children}</body>
    </html>
  );
}
