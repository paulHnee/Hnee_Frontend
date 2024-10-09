import React from "react";
import Image from "next/image";
import Link from "next/link";
import team from "../../assets/itsz_Team.png";
import info from "../../assets/itsz_FAQ.png";
import zammad from "../../assets/logo_zammad.png";
// import { email, request } from "../../assets";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-black">
      <main className="w-full max-w-4xl flex-grow">
        <section className="my-16 text-center">
          <h2 className="text-3xl font-semibold">IT-Servicezentrum</h2>
          {/* <div className="flex flex-row justify-center items-center">
            <Image src={email} alt="email" height={30} width={30} className="mr-5"/>
            <p className="text-xl leading-3 text-green-800">
              <Link href="mailto:it-support@hnee.de" className="hover:text-green-950 hover:underline">
                Support
              </Link>
            </p>
            <Image src={request} alt="request" height={30} width={30} className="ml-5" />   
          </div> */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            <li className="flex flex-col items-center space-y-4 p-4">
              <Link href="/team" rel="noopener noreferrer">
                <Image src={team} alt="Team" className="ml-[4.5rem]"/>
                <span className="text-3xl mt-4">Team & Erreichbarkeit</span>
              </Link>
            </li>
            <li className="flex flex-col items-center space-y-4 p-4">
              <Link href="https://zammad.hnee.de" target="_blank" rel="noopener noreferrer">
                <Image src={zammad} alt="Support" className="w-full h-auto"/>
                <span className="text-3xl mt-4">Support</span>
              </Link>
            </li>
            <li className="flex flex-col items-center space-y-4 p-4 center-info">
              <Link href="https://zammad.hnee.de/help" target="_blank" rel="noopener noreferrer">
                <Image src={info} alt="Informationen" className="ml-10"/>
                <span className="text-3xl mt-4">Informationen</span>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Page;
