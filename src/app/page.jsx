import Footer from './footer.jsx';
import NavBar from './navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">     
      <main className="w-full max-w-4xl flex-grow">
        <section className="my-16 text-center">
          <h2 className="text-3xl font-semibold">Unsere Dienstleistungen</h2>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <li className="flex items-center space-x-4">
              <span className="material-icons text-4xl">support</span>
              <span>Technischer Support</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="material-icons text-4xl">network_check</span>
              <span>Netzwerkverwaltung</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="material-icons text-4xl">code</span>
              <span>Softwareentwicklung</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="material-icons text-4xl">school</span>
              <span>IT-Schulungen und Workshops</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}