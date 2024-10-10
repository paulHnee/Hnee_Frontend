import React from "react";

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-black">
      <main className="w-full max-w-4xl flex-grow">
        <section className="my-16 text-center">
          <h2 className="text-3xl font-semibold">Team & Erreichbarkeit</h2>
          <p>Aufgrund unserer vielfältigen Einsatzgebiete sind wir nicht immer persönlich zu erreichen. Vereinbaren Sie deshalb bitte einen Termin mit uns, wenn Sie ein Gespräch wünschen. Sie erreichen uns jederzeit per Email.</p>
          <div>
            <h3>IT-Servicezentrum</h3>
            <p>Telefon: +49 (3334) 657-272</p>
            <p>Email: <a href="mailto:it-support@hnee.de"> it-support@hnee.de</a></p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;