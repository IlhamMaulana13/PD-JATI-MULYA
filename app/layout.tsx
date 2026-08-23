import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PD Jati Mulya – Toko Kayu Berkualitas",
  description:
    "PD Jati Mulya adalah toko kayu terpercaya dengan berbagai produk kayu jati, mahoni, dan pinus berkualitas tinggi. Pesan langsung melalui WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-amber-50">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="bg-amber-900 text-amber-100 text-center text-sm py-4">
          © {new Date().getFullYear()} PD Jati Mulya. Seluruh hak dilindungi.
        </footer>
      </body>
    </html>
  );
}
