import React from "react";

function VPN() {
  return (
    <div>
      <div className="border-solid border flex flex-row">
        <div className="border-solid border flex flex-col items-start">
          <p className="bold font-semibold">Public-key:</p>
          <textarea
            className="h-6 w-44 border-solid rounded-md"
            placeholder="publickey"
            inputMode="text"
            id="p_pbk001"
          />
          <button className="border border-solid shadow-md rounded-md bg-modernGreen text-white mt-2 w-20 hover:bg-modernGreen-dark">
            Senden
          </button>
        </div>
        <div className="border-solid ml-20">
          <p className="bold font-medium ">VPN Liste</p>
          <button>
            <img alt="reload" />
          </button>
          <div className="border border-solid rounded-sm shadow-inner">
            <ul>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-solid h-36 w-36">Konfig</div>
    </div>
  );
}

export default VPN;