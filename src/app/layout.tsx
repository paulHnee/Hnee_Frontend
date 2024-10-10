import type { Metadata } from "next";
import "@styles/global.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/style";

export const metadata: Metadata = {
  title: "HNEE - ITSZ",
  description: "IT-Servicezentrum der HNEE",
  authors: [{ name: "Paul Buchwald", url: "https://paulokh.com" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{String(metadata.title) ?? 'IT-Servicezentrum'}</title>
        <meta name="description" content={metadata.description ?? ''} />
        {metadata.authors && Array.isArray(metadata.authors) && metadata.authors.length > 0 && (
          <meta name="author" content={metadata.authors[0].name} />
        )}
      </head>
      <body className={``}>
        <div className="bg-modernGreen overflow-hidden w-full">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </div>
        <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
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
}
