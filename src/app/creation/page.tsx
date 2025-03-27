"use client"; // Indique à Next.js que c'est un composant client

import { XCircle } from "lucide-react";

export default function Header() {
  return (
    <main className="w-full pt-12 min-h-screen bg-gradient-to-b from-[#FAF9F7] to-[#FAF9F7]">
      <div className="w-full md:w-[974px] min-h-[774px] mx-auto mt-12 shadow-lg bg-white rounded-2xl flex flex-col">
        {/* Header */}
        <header className="w-full h-20 bg-[#007AFF] text-white flex justify-between items-center px-4 rounded-t-2xl">
          <h1 className="text-lg font-semibold">Validation de votre carte</h1>
          <div className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <XCircle size={24} strokeWidth={2} />
          </div>
        </header>

        {/* Contenu principal */}
        <div className="flex flex-col md:flex-row justify-center items-center flex-1 p-4 gap-5">
          {/* Div 1 */}
          <div className="w-full md:w-[393px]">
            <h2 className="font-Lufga font-semibold text-2xl mt-6 leading-6 tracking-[-0.5px] text-[#1B2029]">
              Confirmer votre commande
            </h2>
              {/* Sous-div avec Destinataire et Ajouter un destinataire */}
      <div className="w-full h-[132px] flex justify-between items-center mt-[-24]">
        <span className="text-[#292723]">Destinataire (1)</span>
        <button className="text-[#0B99FF] font-medium">Ajouter un destinataire</button>
      </div>

      {/* Boîte */}
      <div className="w-[361px] h-auto p-4 border border-[#ECEAE1] bg-white rounded-[12px] mt-[-44] gap-2 flex items-center">
        {/* Radio Button */}
        <div className="relative w-[24px] h-[24px] rounded-full bg-[#0B99FF] flex items-center justify-center">
          <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
        </div>
        
        {/* Informations du destinataire */}
        <div className="flex-1 ml-2">
          <p className="font-bold text-[#292723]">Nom du destinataire</p>
          <p className="text-[#6F7580]">Adresse</p>
          <p className="text-[#6F7580]">Ville, Pays, Code postal</p>
        </div>
        
        {/* Modifier */}
        <button className="text-[#0B99FF] font-medium">Modifier</button>
      </div>
      <div className="w-[361px] h-auto p-4  bg-white rounded-[12px] mt-[4]">
        <h2 className="font-[Lufga] font-semibold text-[18px] leading-[24px] tracking-[-0.5px] text-[#1B2029] mt-6">
        Récapitulatif & paiement
      </h2>
        </div>

      {/* Détails du récapitulatif */}
      <div className="w-[361px] h-auto p-4  bg-white rounded-[12px] mt-[-4]">
       
    
        {[ 
          { label: "Date d’envoi", value: "28 nov. 2024" },
          { label: "Quantité", value: "01" },
          { label: "Coût d’impression", value: "2,60€" },
          { label: "Coût de l’affranchissement", value: "8,60€" },
          { label: "TVA", value: "2,60€" },
          { label: "Total", value: "23,90€" }
        ].map((item, index, array) => (
          <div key={index}>
            <div className="flex justify-between items-center py-2">
            <span className={`${item.label === "Total" ? "font-bold text-[#292723]" : "text-[#6F7580]"}`}>
  {item.label}
</span>

              <span className={`${item.label === "Total" ? "text-[#0B99FF]" : "text-[#292723]"} font-bold`}>
  {item.value}
</span>

            </div>
            {index < array.length - 1 && <div className="border-b border-[#ECEAE1]"></div>}
          </div>
        ))}
      </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-[548px] bg-[#D8DBE3]"></div>

          {/* Div 2 */}
          <div className="w-full md:w-[393px] flex flex-col gap-5">
            <h2 className="font-Lufga font-semibold text-lg mt-4 leading-6 tracking-[-0.5px] text-[#1B2029]">
              Aperçu de votre création
            </h2>
             {/* Sous div 1 */}
  <div 
    className="w-[393px] h-[222px] border-[12px] border-[#FFFFF5] rounded-[12px]" 
    style={{
      background: "linear-gradient(to bottom, #000000, #000000)", 
      backgroundImage: "url('/person.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
  </div>
{/* Sous div 2 */}
<div className="w-[393px] h-[222px] shadow-[0px_0px_11px_0px_#00000040] flex justify-center items-center relative">


      {/* div1 */}
      <div className="w-[160px]">
       {/* Div contenant le message de joyeux anniversaire */}
  <div className="w-[179px] h-[202px] absolute top-[10px] left-[14px]">
    <div className="w-[162px] h-[120px] absolute top-[6px] left-[8px] font-[Lufga] font-normal text-[8px] italic text-[#292723] leading-[10px] tracking-[0px] flex items-center justify-center">
      Joyeux anniversaire, Jessy !<br />
      <br />
      Tu es un véritable mystère, un charme à part qui nous captive tous. Cette touche d’énigme te rend unique, et c’est un privilège de te connaître. Que cette nouvelle année te comble de bonheur et de belles surprises.
      <br />
      <br />
      Avec toute mon affection, passe une journée magique, tout comme toi !
    </div>
    <div className="w-[62px] h-[20px] absolute top-[166px] left-[118px] font-[Lufga] font-normal text-[8px] italic text-[#292723] leading-[10px] tracking-[0px] flex items-center justify-center">
    John Doh
     
    </div>
  </div>

   </div>
       {/* Divider */}
       <div className="flex flex-col items-center gap-[12px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">

       <div className="w-[100px] h-[0.8px] bg-[#D8DBE3] rounded-[2px] rotate-90"></div>
         {/* Texte Instacard au centre, affiché du bas vers le haut */}
    <span className="w-[23px] h-[6px] font-[Lufga] font-medium text-[10px] leading-[4px] text-[#0B99FF] tracking-[0px] flex items-center justify-center rotate-90">
      Instacard
    </span>
       <div className="w-[100px] h-[0.8px] bg-[#D8DBE3] rounded-[2px] rotate-90"></div>

       </div>
      {/* Div2 */}
      <div className="w-[160px] h-[200px] flex flex-col gap-5 relative">

  {/* Affichage de l'image timbre.svg avant la div contenant l'adresse */}
  <img
    src="/timbre.svg"
    alt="Timbre"
    className="w-[108px] h-[66px] absolute top-[10px] left-[29px]"
  />

  {/* Div contenant l'adresse */}
  <div className="w-[179px] h-[202px] absolute bottom-0">
    <div className="w-[162px] h-[120px] absolute top-[56px] left-[8px] font-[Lufga] font-normal text-[8px] italic text-[#292723] leading-[10px] tracking-[0px] flex items-center justify-center">
      123 Rue Paul Monter,<br />
      Tradex, Yassa Douala.<br />
      <br />
      Jessica Jamila Duala Belle
    </div>
  </div>

</div>

</div>

<button className="w-[91.31px] h-[32px] mt-[-3] rounded-[54.98px] bg-[#F5E1F0] flex items-center justify-center gap-[8.31px] p-[8px]">
  {/* Icône agrandir.svg */}
  <img
    src="/agrandir.svg"
    alt="Agrandir"
    className="w-[16px] h-[16px]"
  />
  {/* Texte "Agrandir" */}
  <span className="font-[BodySmall] font-normal text-[12px] leading-[16px] text-[#000000]">
    Agrandir
  </span>
</button>



          </div>
        </div>

        {/* Footer */}
        <footer className="w-full h-20 bg-[#E9ECF2] flex justify-between items-center px-4 rounded-b-2xl">
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-[#1092ED] text-white text-sm font-bold flex items-center justify-center rounded-full">
              1
            </div>
            <div className="w-6 h-6 border border-[#1092ED] text-[#1092ED] text-sm font-bold flex items-center justify-center rounded-full">
              2
            </div>
          </div>
          <button className="bg-[#007AFF] text-[#FEFEFE] px-6 py-3 rounded-lg text-sm font-medium">
            Envoyer ma carte
          </button>
        </footer>
      </div>
    </main>
  );
}
