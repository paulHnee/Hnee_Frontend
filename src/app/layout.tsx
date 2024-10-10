import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/style";
import React from 'react';

const openGraph = {
  type: "website",
  locale: "de_DE",
};

const metadata = {
  title: "IT-Servicezentrum",
  discription: "IT-Servicezentrum der Hochschule für nachhaltige Entwicklung Eberswalde",
  author: "Paul Buchwald"
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta property="og:type" content={openGraph.type} />
        <meta property="og:locale" content={openGraph.locale} />
        <meta name="description" content={metadata.discription} />
        <meta name="author" content={metadata.author} />
      </head>
      <body>
      <div className="bg-modernGreen overflow-hidden w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className={`bg-slate-200 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </div>
      </body>
    </html>
  );
};