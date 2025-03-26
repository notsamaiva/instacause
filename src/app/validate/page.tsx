"use client"; // Indique à Next.js que c'est un composant client


import { FaImages, FaPaintBrush, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from "react";
import Image from 'next/image';
import { XCircle } from "lucide-react";

export default function Header() {
  

  return (
    

<main className="w-full pt-[50px] min-h-screen bg-gradient-to-b from-[#FAF9F7] to-[#FAF9F7]">

    <div className="w-[471px] min-h-[668px] mx-auto mt-[112px] shadow-lg bg-white rounded-2xl flex flex-col">
      
       
      {/* Header */}
      <header className="w-full h-[77px] bg-[#007AFF] text-white flex justify-between items-center px-4 rounded-t-2xl">
        <h1 className="text-[18px] text-[#FFFFFF] font-semibold">Validation de votre carte</h1>
        
        {/* Close Icon */}
        <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full cursor-pointer">
          <XCircle size={24} strokeWidth={2} />
        </div>
      </header>

      {/* Contenu principal */}
<div className="flex justify-center items-center min-h-screen">
  {/* Conteneur principal */}
  <div className="w-[361px] h-[331px] mt-[-85] flex flex-col justify-center items-center p-4 gap-5 bg-white">
    {/* Image et Titre avec Description */}
    <div className="w-[206.24px] h-[206.24px] flex flex-col items-center justify-center">
      {/* Image online.svg */}
      <img src="/online.svg" alt="Traitement en cours" className="w-full h-full object-contain" />
      
      {/* Titre "Traitement en cours..." */}
      <h2 className="w-[361px] h-[24px] text-center font-[600] text-[24px] leading-[24px] tracking-[-0.5px] text-[#1B2029] mt-[16px]">
        ⏳ Traitement en cours...
      </h2>
      
      {/* Description */}
      <p className="w-[361px] h-[72px] text-center font-[400] text-[16px] leading-[24px] text-[#6F7580]">
        Votre paiement est en cours de validation. Restez zen, on s’en occupe ! Vous recevrez une confirmation dès que tout sera prêt.
      </p>

  <img
    src="/pay_succes.svg"
    alt="Agrandir"
    className="w-[100px] h-[100px]"
  />


    </div>
  </div>
</div>


      {/* Footer avec pagination à gauche et bouton à droite */}
      <footer className="w-full h-[80px] bg-[#E9ECF2] flex justify-between items-center px-4 rounded-b-2xl">
        
        {/* Pagination à gauche */}
        <div className="flex gap-3">
        <div className="w-[24px] h-[24px] bg-[#26A526] text-white text-[12px] font-bold flex items-center justify-center rounded-[20px] p-[2px] gap-[10px] relative">
  {/* Cercle avec check */}
  
  <img
    src="/cocher.svg"
    alt="Agrandir"
    className="w-[16px] h-[16px]"
  />

</div>

          <div className="w-[24px] h-[24px] bg-[#1092ED] text-white text-[12px] font-bold flex items-center justify-center rounded-full">
            2
          </div>
        </div>

        {/* Bouton "Envoyer ma carte" à droite */}
        <button className="bg-[#007AFF] text-[#FEFEFE] px-6 py-3 rounded-lg text-sm font-medium">
          Envoyer ma carte
        </button>

      </footer>
    </div>



</main>

  
  );
}
