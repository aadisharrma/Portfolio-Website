import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Aadi Gautam Sharma | Data Science Portfolio",
  description:
    "Portfolio of Aadi Gautam Sharma, a data science graduate student focused on ETL pipelines, predictive modeling, and production analytics systems.",
  keywords: [
    "Aadi Gautam Sharma",
    "Data Science",
    "Machine Learning",
    "ETL",
    "Portfolio",
  ],
  authors: [{ name: "Aadi Gautam Sharma" }],
  openGraph: {
    title: "Aadi Gautam Sharma | Data Science Portfolio",
    description:
      "Data Science graduate student with hands-on experience in ETL pipelines, predictive modeling, and automation engineering.",
    url: "https://example.com",
    siteName: "Aadi Gautam Sharma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadi Gautam Sharma | Data Science Portfolio",
    description:
      "Data Science | ML | ETL | Automation — Portfolio and project highlights.",
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
