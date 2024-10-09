import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-black">     
      <main className="w-full max-w-4xl flex-grow">
        <section className="my-16 text-center">
          <h2 className="text-3xl font-semibold">IT-Servicezentrum</h2>
          <p>Hier gehts zu zammad</p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-8 items-center">
            <li className="flex items-center space-x-4">
              <span className="text-3xl">Team & Erreichbarkeit</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-3xl">Informationen</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-3xl">Support</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-3xl">FAQ</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Page;