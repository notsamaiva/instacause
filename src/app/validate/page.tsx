"use client"; // Indique à Next.js que c'est un composant client

import { XCircle } from "lucide-react";

export default function Header() {
  return (
    <main className="w-full pt-12 min-h-screen bg-gradient-to-b from-[#FAF9F7] to-[#FAF9F7]">
      <div className="w-full md:w-[471px] min-h-[668px] mx-auto mt-12 shadow-lg bg-white rounded-2xl flex flex-col">
        {/* Header */}
        <header className="w-full h-20 bg-[#007AFF] text-white flex justify-between items-center px-4 rounded-t-2xl">
          <h1 className="text-lg font-semibold">Validation de votre carte</h1>
          <div className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <XCircle size={24} strokeWidth={2} />
          </div>
        </header>

        {/* Contenu principal */}
        <div className="flex justify-center items-center flex-1">
          {/* Conteneur principal pour le message */}
          <div className="w-full md:w-[361px] h-auto mt-[-20] flex flex-col justify-center items-center p-4 gap-5 bg-white">
            {/* Image et Titre avec Description */}
            <div className="w-full flex flex-col items-center justify-center">
              {/* Image online.svg */}
              <img
                src="/online.svg"
                alt="Traitement en cours"
                className="w-full h-auto max-h-[206px] max-w-[206px] object-contain"
              />
              {/* Titre */}
              <h2 className="w-full text-center font-semibold text-2xl leading-6 tracking-[-0.5px] text-[#1B2029] mt-4">
                ⏳ Traitement en cours...
              </h2>
              {/* Description */}
              <p className="w-full text-center font-normal text-lg leading-6 text-[#6F7580]">
                Votre paiement est en cours de validation. Restez zen, on s’en occupe ! Vous recevrez une confirmation dès que tout sera prêt.
              </p>
              {/* Image de succès */}
              <img
                src="/pay_succes.svg"
                alt="Paiement réussi"
                className="w-24 h-24 mt-4"
              />
            </div>
          </div>
        </div>

        {/* Footer avec pagination et bouton */}
        <footer className="w-full h-20 bg-[#E9ECF2] flex justify-between items-center px-4 rounded-b-2xl">
          {/* Pagination */}
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-[#26A526] text-white text-sm font-bold flex items-center justify-center rounded-full p-1 relative">
              <img
                src="/cocher.svg"
                alt="Coché"
                className="w-4 h-4"
              />
            </div>
            <div className="w-6 h-6 bg-[#1092ED] text-white text-sm font-bold flex items-center justify-center rounded-full">
              2
            </div>
          </div>
          {/* Bouton */}
          <button className="bg-[#007AFF] text-[#FEFEFE] px-6 py-3 rounded-lg text-sm font-medium">
            Envoyer ma carte
          </button>
        </footer>
      </div>
    </main>
  );
}
