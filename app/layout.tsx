import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-vercel-url.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aadi Gautam Sharma | Data Science Portfolio",
  description:
    "Data Science graduate student focused on machine learning, ETL systems, and analytics engineering.",
  openGraph: {
    title: "Aadi Gautam Sharma | Data Science Portfolio",
    description:
      "Data Science • ML • Data Engineering — projects, experience, and technical skills.",
    url: siteUrl,
    siteName: "Aadi Gautam Sharma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadi Gautam Sharma | Data Science Portfolio",
    description: "Data Science • ML • Data Engineering",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
