import { Link } from "react-router-dom";
import {logo_zammad, team, info} from "../assets";

const Page = () => {
  return (
    <div id="home"className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 text-black">
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
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center ">
            <li className="flex flex-col items-center space-y-4 p-4 hover:text-gray-700">
              <Link to="/itsz">
                <img src={team} alt="Team" className="ml-[4.5rem]"/>
                <span className="text-3xl mt-4">Team & Erreichbarkeit</span>
              </Link>
            </li>
            <li className="flex flex-col items-center space-y-4 p-4 hover:text-gray-700">
              <a href="https://zammad.hnee.de" target="_blank" rel="noopener noreferrer">
                <img src={logo_zammad} alt="Support" className="w-full h-auto"/>
                <span className="text-3xl mt-4">Support</span>
              </a>
            </li>
            <li className="flex flex-col items-center space-y-4 p-4 center-info hover:text-gray-700">
              <a href="https://zammad.hnee.de/help" target="_blank" rel="noopener noreferrer">
                <img src={info} alt="Informationen" className="ml-10"/>
                <span className="text-3xl mt-4">Informationen</span>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Page;