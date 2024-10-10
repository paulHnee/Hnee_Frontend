import "@/styles/globals.css";
import type { Metadata } from "next";
import DashboardWrapper from "./dashboardWrapper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITSZ - HNEE",
  description: "Startseite des IT-Servicezentrums der Hochschule für nachhaltige Entwicklung Eberswalde",
  authors: [{ name: "Paul Buchwald", url: "https://paulokh.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}