import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giang Anh Vu",
  description:
    "Giang Anh Vu — crafting refined digital experiences with engineering precision and a designer's eye.",
  openGraph: {
    title: "Giang Anh Vu",
    description:
      "Explore projects, passions, and ways to collaborate with Giang Anh Vu.",
    images: [
      {
        url: "/GAV_Image.jpeg",
        width: 1200,
        height: 1600,
        alt: "Giang Anh Vu overlooking a mountain landscape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giang Anh Vu",
    description:
      "Explore projects, passions, and ways to collaborate with Giang Anh Vu.",
    images: ["/GAV_Image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-ink text-white">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-ink text-white`}>
        <div className="relative min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

