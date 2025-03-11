import React from "react";

const ITSZ = () => {
  return (
    <div className="mb-5 w-full">
      <div className="w-full mt-5 mb-2">
        <h1 className="text-2xl">IT-Servicezentrum</h1>
        <p>Das IT-Servicezentrum (ITSZ) ist die IT-Dienststelle der HNEE </p>
      </div>
      <br />
      <div className="flex w-full justify-center items-center space-x-20">





        {/* ADRESS */}
        <div className="border border-solid shadow-sm box-border py-2">
          <span className="text-2xl text-bold text-modernGreen">Adresse</span>
          <div className="text-sm leading-tight">
            <p>Hochschule für nachhaltige Entwicklung Eberswalde</p>
            <p>IT-Servicezentrum</p>
            <p>Schicklerstraße 5</p>
            <p>16225 Eberswalde</p>
            <p>Raum 05.102-112</p>
          </div>
          <span className="mt-5 leading-3 text-modernGreen">
            <a
              href="mailto:itsz@hnee.de"
              className="hover:underline hover:text-blue-400"
            >
              itsz(at)hnee.de
            </a>
          </span>
        </div>



        {/* ERREICHBARKEIT */}
        <div className="border border-solid shadow-sm box-border py-2 px-2">
          <div className="p-2 ml-3">
            <span className="text-2xl text-bold text-modernGreen">
              Erreichbarkeit
            </span>
            <p>
              <b>Unsere Hotline ~ Telefon:</b>
              <p className="font-medium"> +49 (3334) 657-272 </p>
              <span className="italic font-thin">
                Bitte klingeln lassen, nach 20sek erfolgt eine Rufumleitung
              </span>
            </p>
            <p className="font-medium">
              <b>FAX: </b> +49 (3334) 657 440
            </p>
            <p>
              <b>Email: </b>
              <a
                href="mailto:support@hnee.de"
                className="text-modernGreen hover:underline hover:text-blue-400"
              >
                support(at)hnee.de
              </a>
              <br/>
              <b>Beschaffung: </b>
              <a
                href="mailto:it-einkauf@hnee.de"
                className="text-modernGreen hover:underline hover:text-blue-400"
              >
                it-einkauf(at)hnee.de
              </a>
            </p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default ITSZ;
