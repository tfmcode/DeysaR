import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DEYSA - Servicios Ambientales y Mantenimiento Industrial",
  description:
    "Especialistas en mantenimiento, destapaciones y limpieza de cañerías para empresas, gastronomía e industrias en CABA y GBA. 30+ años de experiencia.",
  keywords:
    "destapaciones industriales, limpieza de cañerías, servicios ambientales, mantenimiento industrial, CABA, GBA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
