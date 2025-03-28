"use client"; // Rend le composant client-side

import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaChevronDown } from 'react-icons/fa';
const countryCodes = {
  France: "+33",
  Tchad: "+235",
  Belgique: "+32",
  Canada: "+1",
  Sénégal: "+221",
  Maroc: "+212",
  // Ajoute d'autres pays si nécessaire
};
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

  const [selectedCountry, setSelectedCountry] = useState("France");
  const [phoneCode, setPhoneCode] = useState(countryCodes["France"]);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setPhoneCode(countryCodes[country]);
  };
  const [phoneNumber, setPhoneNumber] = useState(phoneCode);

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Empêcher la suppression du préfixe
    if (!inputValue.startsWith(phoneCode)) {
      setPhoneNumber(phoneCode);
    } else {
      setPhoneNumber(inputValue);
    }
  };
  return (
    <div className="flex min-h-screen overflow-hidden">
   {/* Partie gauche : Formulaire */}
   <div className="w-full md:max-w-[458px] h-auto md:h-[686.75px] mt-10 md:mt-[10px] ml-4 md:ml-10 flex flex-col justify-center items-center p-6 md:p-10 gap-6 md:gap-[53px]">

      {/* Titres */}
      <div className="w-[458px] h-auto gap-[38px] flex flex-col items-center justify-center">
  
  {/* Titre H1 */}
  <h2 className="w-[458px] h-[112px] text-center font-[700] text-[#292723] text-[30px] leading-[140%] tracking-[-1px]">
  Bienvenue sur instaCard
  </h2>

  {/* Paragraphe P */}
  <p className="w-[458px] h-[14.75px] mt-[-80px] text-center font-[400] text-[#292723] text-[14px] leading-[140%] tracking-[-1px] mt-[-35]">
  Nous avons besoin de vos informations <br />personnelles pour créer votre nouveau compte
</p>

  
</div>

{/* Formulaire */}
<div className="mt-4 w-80 sm:mt-[10]">
<div className="grid grid-cols-2 gap-4">
      {/* Champ Prénom et Nom */}
      {[
        { id: "prenom", label: "Prénom" },
        { id: "nom", label: "Nom de famille" },
      ].map(({ id, label }) => (
        <div key={id} className="relative">
          <input
            type="text"
            id={id}
            className="w-full p-2 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2aa6ff] text-[12px] peer"
            placeholder=" "
          />
          <label
            htmlFor={id}
            className="absolute left-2 top-1 text-gray-400 text-[12px] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#2aa6ff]"
          >
            {label}
          </label>
        </div>
      ))}

      {/* Champ Pays */}
      

<div className="relative">
  <select
    id="pays"
    className="w-full p-2 pr-10 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2aa6ff] text-[12px] peer"
    value={selectedCountry}
    onChange={handleCountryChange}
  >
    {Object.keys(countryCodes).map((country) => (
      <option key={country} value={country}>
        {country}
      </option>
    ))}
  </select>
  <label
    htmlFor="pays"
    className="absolute left-2 top-1 text-gray-400 text-[12px] transition-all duration-200 
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-gray-500 
               peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#2aa6ff]"
  >
    Pays
  </label>
  {/* Icône indiquant le select */}
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
    <FaChevronDown className="text-black w-2 h-4" />
  </div>
</div>


     {/* Champ Numéro de téléphone */}
<div className="relative">
  <input
    type="text"
    id="telephone"
    className="w-full p-2 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2aa6ff] text-[12px] peer"
    placeholder=" " // Placeholder invisible pour garder l'animation du label
    value={phoneCode}
    onChange={(e) => setPhoneCode(e.target.value)} // Mise à jour de l'état
  />
  <label
    htmlFor="telephone"
    className="absolute left-2 top-1 text-gray-400 text-[12px] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#2aa6ff]"
  >
    Téléphone
  </label>
</div>
</div>

{/* Champ Email */}
<div className="relative mt-3">
  <input
    type="email"
    id="email"
    className="w-full p-2 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2aa6ff] text-[12px] peer"
    placeholder=" "
  />
  <label
    htmlFor="email"
    className="absolute left-2 top-2 text-gray-400 text-[12px] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#2aa6ff]"
  >
    E-mail
  </label>
</div>

{/* Champ Mot de passe avec l'icône "œil" */}
<div className="relative mt-3">
  <input
    type="password"
    id="password"
    className="w-full p-2 pt-5 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2aa6ff] text-[12px] peer"
    placeholder=" "
  />
  <label
    htmlFor="password"
    className="absolute left-2 top-2 text-gray-400 text-[12px] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#2aa6ff]"
  >
    Mot de passe
  </label>
  <img
    src="/images/eye.svg"
    alt="Afficher le mot de passe"
    className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
  />
</div>



  

  {/* Bouton Connexion */}
  
  <button
      onClick={handleClick}
      className="relative w-full h-full max-h-[46] bg-[#d8dbe3] text-[#6f7580] p-2 rounded-md mt-4 font-bold text-sm 
      hover:bg-[#0B99FF] hover:text-white active:bg-[#0B99FF] active:text-white flex justify-center items-center"
      disabled={loading} // Désactive le bouton pendant le chargement
    >
      {loading ? (
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        "S’inscrire"
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
  className=" text-center sm:mt-[-10]"
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
<span>
  En continuant, vous confirmez votre accord avec <a href="#" className="text-[#0B99FF]">les termes <br />contrat de confidentialité</a> 
  et des <a href="#" className="text-[#0B99FF]">règles d'utilisation</a>, et<br />
  vous autorisez leur application.
</span>


</p>


{/* Lien pour créer un compte */}
<p
  className="mt-12 text-center mt-[-23]"
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
    Déjà un compte ? Connectez-vous
  </a>
</p>


    </div>

      {/* Partie droite : Image + Texte */}
      <div 

      
  className="absolute inset-0 bg-gradient-to-t from-black to-transparent w-[792px] h-[710px] top-[-7px] left-[-1px] ml-[50px] rounded-[32px] bg-[#29255E] text-white flex flex-col justify-center items-center relative p-6 border-[18px] border-white"
>
<div className="relative w-[84px] h-[-880px] left-[-80px] top-[-30px]">

  {/* Image superposée au-dessus du bloc */}
  <div className="absolute -top-[-85] -left-[202px] w-[586px] h-[400px] relative">
    {/* Fond noir dégradé */}
   
    <Image
      src="/register.svg"
      alt="Image 1"
      layout="fill"
      objectFit="cover"
      className="rounded-[30px]"
    />
     
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
