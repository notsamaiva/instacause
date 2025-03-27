"use client"; // Rend le composant client-side

import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simuler une action asynchrone (ex: API login)
    setTimeout(() => {
      setLoading(false);
      alert("Connexion réussie !");
    }, 2000);
  };
  return (
    <div className="flex min-h-screen overflow-hidden">
   {/* Partie gauche : Formulaire */}
   <div className="w-full md:w-[458px] h-auto md:h-[686.75px] mt-10 md:mt-[10px] ml-4 md:ml-10 flex flex-col justify-center items-center p-6 md:p-10 gap-6 md:gap-[53px]">

      {/* Titres */}
      <div className="w-[458px] h-auto gap-[38px] flex flex-col items-center justify-center">
  
  {/* Titre H1 */}
  <h2 className="w-[458px] h-[112px] text-center font-[700] text-[#292723] text-[30px] leading-[140%] tracking-[-1px]">
    Bonjour, bon retour sur <br /> InstaCard
  </h2>

  {/* Paragraphe P */}
  <p className="w-[458px] h-[14.75px] mt-[-55px] text-center font-[400] text-[#292723] text-[14px] leading-[140%] tracking-[-1px] mt-[-35]">
  Connectez-vous pour continuer
</p>

  
</div>

{/* Formulaire */}
<div className="mt-4 w-80 sm:mt-[-10]">
  {/* Champ Email */}
  <input
    type="email"
    placeholder="E-mail"
    className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2aa6ff] text-left"
  />

  {/* Champ Mot de passe avec l'icône "œil" */}
  <div className="relative mt-3">
    <input
      type="password"
      placeholder="Mot de passe"
      
      className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2aa6ff] text-left"
    />
    <img
      src="/images/eye.svg"
      alt="Afficher le mot de passe"
      className="w-5 h-5 absolute right-[130] top-1/2 transform -translate-y-1/2 cursor-pointer"
    />
  </div>

  {/* Lien "Mot de passe oublié ?" */}
  <div className="w-full flex justify-end mt-[-5]">
  <a
    href="#"
    className="text-[#003E7C] text-xs mt-2 inline-block text-right underline"
    style={{
      fontWeight: '500',
      fontSize: '12px', // Taille de la police ajustée
      lineHeight: '20px',  // Hauteur de ligne
      letterSpacing: '0px',  // Espacement des lettres
      textDecoration: 'underline',  // Souligné
      textDecorationThickness: '2px', // Épaisseur du soulignement
    }}
  >
    Mot de passe oublié ?
  </a>
</div>


  {/* Bouton Connexion */}
  
  <button
      onClick={handleClick}
      className="relative w-full bg-[#d8dbe3] text-[#6f7580] p-2 rounded-md mt-4 font-bold text-sm 
      hover:bg-[#0B99FF] hover:text-white active:bg-[#0B99FF] active:text-white flex justify-center items-center"
      disabled={loading} // Désactive le bouton pendant le chargement
    >
      {loading ? (
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        "Se connecter"
      )}
    </button>



  {/* Séparateur "ou" */}
  <div className="flex items-center justify-center mt-4">
  <div
    className="flex-1 h-px"
    style={{
      border: '1px solid #ECEAE1',
      width: '199.5px',
      backgroundColor: '#ECEAE1',
    }}
  ></div>
  <span
    className="px-4 text-sm text-gray-600"
    style={{
      height: '20px',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0px',
      color: '#6F7580',
    }}
  >
    ou
  </span>
  <div
    className="flex-1 h-px"
    style={{
      border: '1px solid #ECEAE1',
      width: '199.5px',
      backgroundColor: '#ECEAE1',
    }}
  ></div>
</div>


<button
  className="w-full flex items-center text-sm justify-center bg-white text-black p-2 rounded-[12px] mt-4 border border-[#000000] hover:bg-gray-100"
  style={{
    height: '38px',
    width: '320px',
    paddingTop: '16px',
    paddingRight: '24px',
    paddingBottom: '16px',
    paddingLeft: '24px',
    gap: '8px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #000000',
    borderRadius: '12px',
  }}
>
  <img src="/images/google-logo.svg" alt="Google" className="w-5 h-5 mr-2" />
  Continuer avec Google
</button>

</div>

<p
  className=" text-center sm:mt-[-40]"
  style={{
    width: '409.3px',
    height: '60px',
    fontWeight: '400',
    fontSize: '11px',
    lineHeight: '145%',
    letterSpacing: '-0.09px',
    color: '#000000B8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }}
>
  <span>En continuant, vous confirmez votre accord avec les termes <br />du contrat de confidentialité et des règles d'utilisation, et<br />vous autorisez leur application.</span>

</p>


{/* Lien pour créer un compte */}
<p
  className="mt-12 text-center mt-[-1]"
  style={{
    width: '358px',
    height: '20px',
    top: '1613.62px',
    left: '224.5px',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0px',
    color: '#003E7C',
    textAlign: 'center',
  }}
>
  <a
    href="#"
    style={{
      textDecoration: 'underline',
      textDecorationStyle: 'solid',
      textDecorationThickness: '0%',
    }}
  >
    Pas encore de compte ? Créez votre nouveau compte
  </a>
</p>


    </div>

      {/* Partie droite : Image + Texte */}
      <div 
  className="w-[792px] h-[710px] top-[-7px] left-[-1px] ml-[50px] rounded-[32px] bg-[#040108] text-white flex flex-col justify-center items-center relative p-6 border-[18px] border-white"
>
<div className="relative w-[84px] h-[-880px] left-[-80px] top-[-30px]">
<div className="relative w-[334px] h-[380px] top-[50px] mx-auto bg-[#a12b2e] border-2 border-white rounded-[30px] p-6">
  {/* Image superposée au-dessus du bloc */}
  <div className="absolute -top-9 -left-[202px] w-[586px] h-[400px] relative">
    {/* Fond noir dégradé */}
   
    <Image
      src="/back2.svg"
      alt="Image 1"
      layout="fill"
      objectFit="cover"
      className="rounded-[30px]"
    />
     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
     {/* Image */}
  </div>
</div>
</div>

{/* Grand conteneur avec plus de marge en haut */}
<div className="w-[694px] h-[278px] mt-[13] left-[49px] flex flex-col gap-[46px] mt-[-63] mx-auto">
  {/* Grand titre */}
  <h2 
    className="w-[703.57px] mt-[123] h-[116px] font-[Lufga] font-semibold text-[20px] leading-[145%] tracking-[-0.09px] text-white text-center flex items-center justify-center mx-auto mt-[61]"
  >
    Vos souvenirs, transformés en cartes <br />
    postales uniques.
  </h2>

  {/* Blocs de texte */}
<div className="w-full flex flex-wrap md:flex-nowrap justify-between items-start gap-[6px] mt-[-11px]">
  {/* Bloc 1 : Personnalisation infinie */}
  <div className="flex flex-col items-start w-[479px]">
    <h3 className="w-full h-[35px] font-[600] text-[14px] leading-[145%] tracking-[-0.09px] text-white text-left">
      Personnalisation infinie
    </h3>
    <p className="w-full h-[69px] font-[400] text-[11px] leading-[145%] tracking-[-0.09px] text-gray-400 text-left">
      Ajoutez vos photos, vos textes, vos<br />
      stickers et choisissez parmi une large<br />
      gamme de modèles.
    </p>
  </div>

  {/* Bloc 2 : Envoi facile et rapide */}
  <div className="flex flex-col items-start w-[479px]">
    <h3 className="w-full h-[35px] font-[600] text-[14px] leading-[145%] tracking-[-0.09px] text-white text-left">
      Envoi facile et rapide
    </h3>
    <p className="w-full h-[69px] font-[400] text-[11px] leading-[145%] tracking-[-0.09px] text-gray-400 text-left">
      Instacard s'occupe de l'impression et<br />
      de l'envoi de vos cartes postales,<br />
      partout dans le monde.
    </p>
  </div>

  {/* Bloc 3 : Prix abordables */}
  <div className="flex flex-col items-start w-[479px]">
    <h3 className="w-full h-[35px] font-[600] text-[14px] leading-[145%] tracking-[-0.09px] text-white text-left">
      Prix abordables
    </h3>
    <p className="w-full h-[69px] font-[400] text-[11px] leading-[145%] tracking-[-0.09px] text-gray-400 text-left">
      Profitez de tarifs avantageux pour<br />
      envoyer des cartes postales à vos<br />
      proches.
    </p>
  </div>
  </div>




</div>

      </div>
    </div>
  );
}
