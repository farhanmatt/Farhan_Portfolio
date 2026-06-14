import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Farhan M R — Software Developer",
  description:
    "Software Developer specializing in React.js, Next.js, Node.js, and PostgreSQL. 7+ months building scalable full-stack web applications in production environments.",
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Tamil Nadu",
    "India",
  ],
  authors: [{ name: "Mohamed Farhan M R" }],
  openGraph: {
    title: "Mohamed Farhan M R — Software Developer",
    description:
      "Software Developer specializing in React.js, Next.js, Node.js, and PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="font-body bg-stone-950 text-stone-50 antialiased">
        {children}
      </body>
    </html>
  );
}
