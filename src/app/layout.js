import localFont from "next/font/local";
import styles from './style';
import "./globals.css"; //NEED TO BE HERE
import { Navbar, Footer, Front } from '../components';
import { Children } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HNEE - ITSZ",
  description: "IT-Servicezentrum der HNEE",
  author: "Paul Buchwald",
};

const RootLayout =() => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
              <Front />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
export default RootLayout;	