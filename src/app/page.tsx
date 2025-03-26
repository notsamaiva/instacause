'use client';

import { useState } from 'react';
import { FaImages, FaPaintBrush, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
const cartes = [
  {
    image: "/postal.svg",
    user: { image: "/user.svg", name: "Jean Dupont", time: "Il y a 2 heures" },
  },
  {
    image: "/postal.svg",
    user: { image: "/user.svg", name: "Sophie Martin", time: "Il y a 5 heures" },
  },
  {
    image: "/postal.svg",
    user: { image: "/user.svg", name: "Sophie Martin", time: "Il y a 5 heures" },
  },
  {
    image: "/postal.svg",
    user: { image: "/user.svg", name: "Ahmed Diarra", time: "Hier" },
  },

];

const postes = [
  {
    image: "/cartet1.svg",
  },
  {
    image: "/cartet2.svg",
  },
  {
    image: "/cartet3.svg",
  },
  {
    image: "/cartet4.svg",
  },
  {
    image: "/cartet2.svg",
  },

];

const reviews = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and types",
    name: "Name",
    time: "Il y a 10 mois",
    image: "/carte.svg"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    name: "Name",
    time: "Il y a 8 mois",
    image: "/carte.svg"
  },
  {
    text: "LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    name: "Name",
    time: "Il y a 10 mois",
    image: "/carte.svg"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industtandard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",   
    time: "Il y a 10 mois",
    image: "/carte.svg"
  }
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#FF6600]" // Couleur personnalisée
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
  </svg>
);


export default function Header() {
  const [selectedTab, setSelectedTab] = useState('Tab1');

  const tabs = [
    { id: 'Tab1', label: 'Vœux 2025' },
    { id: 'Tab2', label: 'Souvenirs' },
    { id: 'Tab3', label: 'Familles' },
    { id: 'Tab4', label: 'Religions' },
    { id: 'Tab5', label: 'Populaires' },
    { id: 'Tab6', label: 'Soutiens' },
    { id: 'Tab7', label: 'Autres' }
  ];

  const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
  return (
    
    
<div className="bg-gradient-to-b from-[#FFEEEE] to-[#FAF9F7] w-full min-h-screen">


     {/* Bandeau de livraison */}
     <div className="w-full bg-[#01121E] h-[48px] flex justify-center items-center text-white text-sm">
        Livraison offerte à partir de 90€ d'achat avec le code* <strong>ENVOI</strong>
      </div>

      {/* Menu principal */}
      <div className="container mx-auto px-6 flex items-center justify-between max-h-[60px] bg-[#FFEEEE] mt-2">
        {/* Logo */}
        <div className=" text-2xl font-bold text-[#0B99FF]">
          <a href="/">
            <img src="/logo.svg" alt="logo" className="h-8" />
          </a>
        </div>
    
        {/* Barre de recherche (affichée uniquement sur grand écran) */}
        <div className="hidden md:flex relative w-[300px] lg:w-[387px] h-[40px] border border-gray-200 rounded-[40px] items-center px-4 bg-white">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher une carte"
            className="w-full h-full ml-2 outline-none bg-transparent text-sm"
          />
        </div>

        {/* Icône menu burger sur mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-2xl text-[#0B99FF]" />
          </button>
        </div>

        {/* Navigation et boutons (affichés sur grand écran) */}
        <div className="hidden md:flex space-x-[40px] text-[#292723] text-[14px] items-center">
          <a href="#Apropos" className="hover:text-[#0B99FF] flex items-center">
            <img src="/galleries.svg" alt="Gallery" className="w-5 h-5 mr-2" /> Gallery
          </a>
          <a href="#contact" className="hover:text-[#0B99FF] flex items-center">
            <img src="/creations.svg" alt="Mes créations" className="w-5 h-5 mr-2" /> Mes créations
          </a>
        </div>

        {/* Boutons (affichés sur grand écran, ajustés pour mobile) */}
<div className="hidden md:flex space-x-2 text-[14px] items-center">
  <button className="text-white w-full md:w-auto px-4 md:px-6 py-2 md:py-3 rounded-[12px] bg-[#0B99FF] text-center">
    Se connecter
  </button>
  <button className="text-black w-full md:w-auto px-4 md:px-6 py-2 md:py-3 rounded-[12px] border border-black bg-transparent text-center">
    S'inscrire
  </button>
</div>

      </div>

      {/* Menu mobile (drawer latéral) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg p-6">
            <button onClick={() => setIsOpen(false)} className="text-2xl text-[#0B99FF]">
              <FaTimes />
            </button>

            <nav className="mt-8 flex flex-col space-y-4 text-[#292723] text-[16px]">
              <a href="#Apropos" className="hover:text-[#0B99FF] flex items-center">
                <img src="/galleries.svg" alt="Gallery" className="w-5 h-5 mr-2" /> Gallery
              </a>
              <a href="#contact" className="hover:text-[#0B99FF] flex items-center">
                <img src="/creations.svg" alt="Mes créations" className="w-5 h-5 mr-2" /> Mes créations
              </a>
            </nav>

            <div className="mt-6 flex flex-col space-y-4">
              <button className="text-white px-6 py-3 rounded-[12px] bg-[#0B99FF]">
                Se connecter
              </button>
              <button className="text-black px-6 py-3 rounded-[12px] border border-black bg-transparent">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      )}
  

  <main className="w-full pt-[50px] min-h-screen bg-gradient-to-b from-[#FFEEEE] to-[#FAF9F7]">
       {/* Grands Titres et image d'accueil*/}

<div className="max-w-[1076px] md:mt-[136] w-full px-4 md:px-0 mt-[55px] mx-auto text-center text-[#292723]">
  

  {/* Image responsive */}
  <div className="mt-[-278] flex justify-center">
    <img 
      src="/home.svg" 
      alt="Home" 
      className="w-full max-w-[2998px] h-[822]" 
    />
  </div>
  <h1 className="text-2xl md:text-4xl font-bold mt-[-536] md:mt-[-646]">Un sourire qui voyage</h1>
  <h2 className="text-2xl md:text-4xl mt-3 md:ml-[300px] font-bold">... Un mur qui inspire</h2>


 
  <div className="flex justify-center md:mt-[396] mt-[156]">
      <button className="text-white px-6 py-2 rounded-[12px] bg-[#0B99FF]">
        <strong className="text-[14px]">Commencer à créer</strong>
        <span className="text-2xl ml-2">+</span>
      </button>
    </div>
</div>
      <section className=" overflow-hidden relative text-center h-[756px] mt-[44] py-24 bg-[#FFEEEE]">
     
  {/* Vecteur en dégradé */}
  <div className="absolute top-0 left-0 w-[7%] h-[430%] bg-gradient-to-br from-[#0B99FF] to-white right-[-1180px] blur-[80px] transform  -translate-y-1/3 -translate-x-1/3 rotate-[-100deg]"></div>

  {/* Contenu de la section */}
  <h2 className="relative text-3xl font-bold mt-[-56px] text-gray-800 z-10">
    Saisissez des moments, transmettez des <br />émotions sans frontières.
  </h2>
  <p className="relative text-gray-600 mt-3 max-w-xl mx-auto z-10">
    Libérez tout le potentiel de Instacard avec des modèles. Découvrez des <br />milliers de designs et de catégories.
  </p>

  {/* Menu */}
  <div className="relative hidden xl:flex container h-[48px] mx-auto px-8 py-4 w-[771px] items-center justify-between mt-6 z-10">
    {tabs.map((tab) => (
      <div
        key={tab.id}
        onClick={() => setSelectedTab(tab.id)}
        className={`w-[107px] font-bold h-[40px] text-[#292723] text-[13px] text-center rounded-[12px] px-[16px] py-[20px] flex items-center justify-center gap-[8px] cursor-pointer 
          ${
            selectedTab === tab.id
              ? "bg-[#000000] text-white" // Style de l'onglet sélectionné
              : "bg-transparent text-gray-800" // Onglet non sélectionné, texte seul
          }`}
      >
        {tab.label}
      </div>
    ))}
  </div>

  
  <div className="relative w-full overflow-hidden mt-[29.06px] ">
  {/* Liste des cartes avec animation */}
  <div className="flex space-x-[9.53px] animate-scroll">
    {[...postes, ...postes].map((poste, index) => ( // Duplication pour un effet infini
      <div
        key={index}
        className="w-[342.99px] h-[268px] bg-white rounded-[19.06px] shadow-lg flex flex-col items-center "
      >
        {/* Image principale */}
        
          <Image
            src={poste.image}
            alt={`poste ${index + 1}`}
            width={342.99}
            height={268}
            className="w-full h-full object-cover rounded-xl"
          />
       
      </div>
    ))}
  </div>

  {/* Ajout des styles CSS pour l'animation */}
  <style jsx>{`
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      display: flex;
      animation: scroll 15s linear infinite;
      width: max-content;
    }
  `}</style>
</div>


</section>

     
{/* participer*/}
<div className="w-full max-w-[1232px] h-auto mt-[39] md:mt-[130px] mx-auto text-center text-[#292723] p-4 md:h-[723.66px]">

{/* Contenu de la section */}
<h2 className="relative text-2xl md:text-3xl font-bold mt-[-20px] md:mt-[-66px] text-gray-800 z-10">
Concevez en quelques minutes, publiez vos <br />carte postal en quelques secondes.
</h2>
<p className="relative text-gray-600 mt-3 max-w-xl mx-auto z-10 text-sm md:text-lg">
Libérez tout le potentiel de   <strong>Instacard</strong> avec des modèles. Découvrez des 
  <br className="hidden md:block" /> milliers de design et de catégories
</p>

</div>

{/* Section des blocs */}
<div className="mt-[24] md:mt-[-553] lg:mt-86 flex flex-wrap justify-center gap-6 md:gap-8">
{/* Container principal */}
<div className="container mx-auto max-w-[1056px]">
  {/* Blocks container en Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    
    {/* Block 1 */}
    <div className="w-full max-w-[296px] mx-auto translate-y-4 md:translate-y-0">
      <div className="w-full h-[258px] rounded-t-[16px] border border-[#FFF6F7] bg-[#FFF6F7]">
        <img src="/action1.svg" alt="Image 1" className="w-full h-full object-cover rounded-t-[16px]" />
      </div>
      <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
        <p className="text-sm text-center">Parcourez notre sélection de <br /> modèles préconçus.</p>
      </div>
    </div>

    {/* Block 2 */}
    <div className="w-full max-w-[296px] mx-auto translate-y-6 md:translate-y-0">
      <div className="w-full h-[258px] rounded-t-[16px] border border-[#FFF6F7] bg-[#FFF6F7]">
        <img src="/action2.svg" alt="Image 2" className="w-full h-full object-cover rounded-t-[16px]" />
      </div>
      <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
        <p className="text-sm text-center">Personnalisez votre carte</p>
      </div>
    </div>

    {/* Block 3 */}
    <div className="w-full max-w-[296px] mx-auto translate-y-8 md:translate-y-0">
      <div className="w-full h-[258px] rounded-t-[16px] border border-[#FFF6F7] bg-[#FFF6F7]">
        <img src="/action3.svg" alt="Image 3" className="w-full h-full object-cover rounded-t-[16px]" />
      </div>
      <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
        <p className="text-sm text-center">
          Envoyez vos cartes postales à <br /> vos amis, votre famille, vos <br /> clients et plus encore.
        </p>
      </div>
    </div>

    {/* Block 4 */}
    <div className="w-full max-w-[296px] mx-auto translate-y-10 md:translate-y-0">
      <div className="w-full h-[238px] mt-4 md:mt-8 rounded-t-[16px] border border-[#FFF6F7] bg-[#FFF6F7]">
        <img src="/action4.svg" alt="Image 4" className="w-full h-full object-cover rounded-t-[16px]" />
      </div>
      <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
        <p className="text-sm text-center">Personnalisez votre carte</p>
      </div>
    </div>

  </div>
</div>
</div>

{/* Bloc Instacause */}
<div className="w-full max-w-[1156px] mt-[123px] h-auto rounded-[60px] p-[32px] bg-gradient-to-r from-[#e1eff0] to-[#DFF0E4] flex flex-col md:grid md:grid-cols-3 gap-8 justify-center items-center mx-auto">
  
  {/* Bloc 1 */}
  <div className="w-full flex flex-col items-center md:items-start text-center md:text-left gap-4">
    <button className="text-[#0B99FF] md:mt-[-14] px-4 py-1 rounded-full bg-[#0B99FF38]">
      INSTACAUSE
    </button>
    <h1 className="text-2xl font-semibold">
      Des causes qui nous interpellent tous !
    </h1>
    <p className="text-[#6F7580] text-[13px] leading-[1.5] tracking-[0.5px]">
      Des cartes postales engagées, envoyées collectivement, pour sensibiliser et mobiliser autour de causes universelles, transformant chaque message en un acte concret et impactant.
    </p>
    <button className="text-white md:mt-[264] w-full md:w-auto px-6 py-3 rounded-lg bg-[#0B99FF]">
      Parcourir plus de 1000 causes
    </button>
  </div>

  {/* Bloc 2 */}
  <div className="w-full flex flex-col items-center md:items-start gap-4">
    <div className="w-full h-[400px] bg-[#f4f8f6] p-3 rounded-[40px]"></div>
    <h1 className="text-[18px] font-semibold">Non aux féminicides en France</h1>
    <p className="text-[#6F7580] text-[13px] leading-[1.5] tracking-[0.5px]">
      Stop aux féminicides : la justice, la prévention et la solidarité doivent triompher...  
      <span className="font-semibold"> #NonAuxFéminicides #PlusJamaisÇa</span>
    </p>
    <div className="flex items-center -space-x-2 ">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-10 h-10 bg-white rounded-full border border-white">
          <Image src="/carte.svg" alt={`Carte ${i + 1}`} width={48} height={48} className="rounded-full" />
        </div>
      ))}
      <span className="text-[14px] font-semibold text-black">
        +1005 cartes envoyées
      </span>
    </div>
  </div>

  {/* Bloc 3 */}
  <div className="w-full flex flex-col items-center md:items-start gap-4">
    <div className="w-full h-[400px] bg-[#f4f8f6] p-3 rounded-[40px]"></div>
    <h1 className="text-[18px] font-semibold">Stop Sida</h1>
    <p className="text-[#6F7580] text-[13px] leading-[1.5] tracking-[0.5px]">
      Stop au Sida : la prévention et la solidarité sont essentielles...
      <span className="font-semibold"> #StopSida #Prévention</span>
    </p>
    <div className="flex items-center -space-x-2">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-10 h-10 bg-white rounded-full border border-white">
          <Image src="/carte.svg" alt={`Carte ${i + 1}`} width={48} height={48} className="rounded-full" />
        </div>
      ))}
      <span className="text-[14px] font-semibold text-black">
        +1005 cartes envoyées
      </span>
    </div>
  </div>
</div>


<section className="text-center w-full py-24">
<h2 className="text-[#0B99FF] text-center uppercase font-bold text-[14px] leading-none tracking-normal drop-shadow-[0px_4px_18px_#0B99FFCC]">
  TEMOIGNAGES
</h2>
      <h2 className="text-3xl font-bold mt-6 text-gray-800">
        Les gens adorent utiliser Instacard.
      </h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Des milliers de personnes ont envoyé avec succès des milliers de cartes postales à travers le monde et vous ?
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {reviews.map((review, index) => (
    <div key={index} className="w-full">
      <div
        className={`relative w-[270px] h-[470px]  border border-gray-300 bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300
        ${index % 2 === 0 ? 'rotate-6' : '-rotate-3'} hover:rotate-0 hover:scale-105`}
      >
        {/* Texte du review */}
        <p className="text-gray-700 italic text-left">{review.text}</p>

        {/* Contenu en bas */}
        <div className="absolute bottom-0 left-0 w-full px-6 pb-6">
          <hr className="w-full border border-gray-300 my-2" />

          {/* Infos utilisateur + étoiles */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={review.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p className="font-bold text-left">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.time}</p>
              </div>
            </div>

            {/* Étoiles */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>

   
   
   {/* choix modele */}
   <div className="relative h-auto mt-16 w-full min-h-[800px] bg-[#01121E] flex flex-col items-center justify-center overflow-hidden px-4">
     {/* Image du dégradé centrée */}
     <img
       src="/degrade.svg"
       alt="Dégradé"
       className="absolute top-[54px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[999px] h-auto"
     />
   
     {/* Contenu principal */}
     <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between px-6 py-10 sm:py-16">
       {/* Bloc Gauche */}
       <div className="max-w-lg text-center lg:text-left">
         <h2 className="text-[#FFFFFF] text-[24px] sm:text-[28px] font-bold leading-snug">
           Trouvez de l’inspiration pour vos <br className="hidden sm:block" /> cartes avec plus de 200000 <br className="hidden sm:block" /> créations.
         </h2>
         <p className="text-[#D8DBE3] text-[14px] mt-4">
           Des milliers de personnes ont envoyé avec succès des milliers de cartes postales à travers le monde. Et vous ?
         </p>
       </div>
   
       {/* Bloc Droite */}
       <div className="mt-10 lg:mt-0 flex flex-col items-center lg:items-start space-y-4">
         <div className="flex -space-x-3">
           {Array(5).fill("/carte.svg").map((src, index) => (
             <div key={index} className="w-12 h-12 bg-white rounded-full border border-white">
               <Image src={src} alt={`Carte ${index}`} width={48} height={48} className="rounded-full" />
             </div>
           ))}
         </div>
         <h2 className="text-[#FFFFFF] text-[18px] text-center lg:text-left">
           Rejoignez notre communauté en pleine expansion
         </h2>
         <div className="flex space-x-4 text-[12px]">
           <button className="text-white px-6 py-2 rounded-lg bg-[#0B99FF]">Commencez à créer +</button>
           <button className="text-white px-6 py-2 rounded-lg border border-white">Visitez Instawall +</button>
         </div>
       </div>
     </div>
   
     {/* Liste des cartes avec boutons de chargement */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full max-w-7xl px-4">
       {cartes.map((carte, index) => (
         <div key={index} className="bg-white rounded-lg shadow-md flex flex-col items-center p-4 relative">
           {/* Image principale */}
           <div className="relative w-full h-52"> 
             <Image src={carte.image} alt={`Carte ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
             <button className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full shadow-md text-sm text-gray-700">
               12 Créations
             </button>
   
             {/* Boutons de chargement centrés */}
             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
               <div className="w-5 h-2.5 bg-[#0B99FF] rounded-full animate-pulse" />
               <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
               <div className="w-2.5 h-2.5 bg-white  rounded-full animate-pulse" />
               <div className="w-2.5 h-2.5 bg-white  rounded-full animate-pulse" />
             </div>
           </div>
   
           {/* Infos utilisateur */}
           <div className="flex items-center mt-4 w-full">
             <Image src={carte.user.image} alt="user" width={40} height={40} className="rounded-full object-cover" />
             <div className="ml-3">
               <p className="font-bold">{carte.user.name}</p>
               <p className="text-gray-500 text-sm">{carte.user.time}</p>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>

   <div className="relative flex flex-col md:flex-row w-full justify-between bg-[#FAF9F7] mb-12 pb-20">
  {/* Image de fond */}
  <Image
    src="/backb.svg"
    alt="decoration"
    width={800}
    height={800}
    className="absolute top-0 left-0 hidden sm:block w-[80%] md:w-[800px] h-auto"
    priority
  />

  {/* Contenu texte */}
  <div className="md:w-1/2 space-y-6 px-4 sm:px-8 md:px-12 pt-12 md:pt-24 text-center md:text-left">
    <h2 className="text-[#FF5DD9] uppercase font-bold text-sm sm:text-base tracking-wide drop-shadow-md">
      FAQ
    </h2>
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
      Questions posées par les utilisateurs <br className="hidden sm:block" />
      sur Instacard.
    </h2>
    <p className="text-gray-600 text-sm sm:text-base">
      Des milliers de personnes ont envoyé avec succès des cartes postales à travers le monde, et vous ?
    </p>

    {/* Questions */}
    <div className="space-y-2 w-full mt-[34px]  sm:w-[500px]">
                         
                         <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                             <button className="w-full text-left px-4 py-3 flex justify-between items-center text-sm md:text-lg font-medium text-gray-800 bg-white hover:bg-gray-100" aria-expanded="false">
                                 <p className="text-[12px] sm:text-[13px] md:text-[14px]">PComment envoyer une carte?</p>
                                 <span className="text-lg md:text-xl">^</span>
                             </button>
                         </div>
                         <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                             <button className="w-full text-left px-4 py-3 flex justify-between items-center text-sm md:text-lg font-medium text-gray-800 bg-white hover:bg-gray-100" aria-expanded="false">
                                 <p className="text-[12px] sm:text-[13px] md:text-[14px]">Elle arrive quand dans la boite aux lettres ma carte ?</p>
                                 <span className="text-lg md:text-xl">^</span>
                             </button>
                         </div>
                         <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                             <button className="w-full text-left px-4 py-3 flex justify-between items-center text-sm md:text-lg font-medium text-gray-800 bg-white hover:bg-gray-100" aria-expanded="false">
                                 <p className="text-[12px] sm:text-[13px] md:text-[14px]">Et si je veux l’envoyer vers une contrée inconnue ?</p>
                                 <span className="text-lg md:text-xl">^</span>
                             </button>
                         </div>
                         <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                             <button className="w-full text-left px-4 py-3 flex justify-between items-center text-sm md:text-lg font-medium text-gray-800 bg-white hover:bg-gray-100" aria-expanded="false">
                                 <p className="text-[12px] sm:text-[13px] md:text-[14px]">je ne parviens pas a envoyer ma carte</p>
                                 <span className="text-lg md:text-xl">^</span>
                             </button>
                         </div>
                         <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                             <button className="w-full text-left px-4 py-3 flex justify-between items-center text-sm md:text-lg font-medium text-gray-800 bg-white hover:bg-gray-100" aria-expanded="false">
                                 <p className="text-[12px] sm:text-[13px] md:text-[14px]">Il ya trop de fonctionnalité seulement pour envoyer une seul carte ?</p>
                                 <span className="text-lg md:text-xl">^</span>
                             </button>
                         </div>
                         <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                             <button className="w-full text-left px-4 py-3 flex justify-between items-center text-sm md:text-lg font-medium text-gray-800 bg-white hover:bg-gray-100" aria-expanded="false">
                                 <p className="text-[12px] sm:text-[13px] md:text-[14px]">SOS, ça  ne fonctionne pas!</p>
                                 <span className="text-lg md:text-xl">^</span>
                             </button>
                         </div>
                     </div>
  </div>

  {/* Image utilisateur */}
  <div className="md:w-1/2 flex justify-center items-start relative p-4 md:p-0">
    <Image
      src="/userr.svg"
      alt="Image utilisateur heureux"
      width={648}
      height={805}
      className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-lg object-cover"
    />
  </div>
</div>

                <div className="flex flex-col items-center mt-[-10px] mb-[60px] max-w-[1236px] mx-auto">
                    <header className="text-center py-8">
                    <h2 className="text-[#3CE481CC] text-center uppercase font-bold text-[14px] leading-none tracking-normal drop-shadow-[0px_4px_18px_#3CE481CC]">
                        TELECHARGER
                      </h2>

                        <h1 className="text-[24px] font-bold text-[#292723]">
                            Découvrez l &#x27;application Instacard.
                        </h1>
                        <p className="text-gray-600 mt-2">L &#x27;application qui transforme vos moments en souvenirs inoubliables.</p>
                    </header>
                    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
                        <div className="flex items-center justify-center">
                        <Image
      src="app.svg"
      alt="Mobile App"
      width={500}
      height={500}
      className="bg-[#E7F9FF] w-full h-auto"
      priority
    />
                        </div>
                        <div className="bg-pink-100 flex-1 p-8">
                            <h2 className="text-[28px] md:text-[36px] text-[#111D54] font-bold mb-8 leading-tight">Téléchargez Instacard et commencez à créer</h2>
                            <ul className="list-disc pl-5 space-y-2 text-[#111D54] text-base md:text-lg">
                                <li>Des milliers de modèles à personnaliser</li>
                                <li>Personnalisation illimitée avec vos textes, photos, stickers, etc.</li>
                                <li>Expédié directement chez votre destinataire</li>
                            </ul>
                            <div className="flex gap-4 mt-8">
                                <a href="#" className="flex items-center hover:bg-gray-800 transition">
                                    <img alt="App Store" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="color:transparent" src="/AppStore.svg"/>
                                </a>
                                <button className="flex items-center hover:bg-gray-800 transition">
                                    <img alt="Google Play" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="color:transparent" src="/PlayStore.svg"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                </main>
    {/* Le footer */}
                <footer className="relative bg-[#0A131E] text-gray-300 py-10 px-6 overflow-hidden">
               {/* Image du dégradé centrée */}
      <img
        src="/degrade.svg"
        alt="Dégradé"
        className="absolute top-[54px] left-[-494px]  transform  w-[4599px] h-[525px]"
      />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                <div>
                    <img src="/Instacard.svg" alt="logo instacard" className="w-[90px] h-[30px]" />
                    <p className="text-white text-sm">Slogan Instacard</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-[70px] mt-6 md:mt-0">
                    <div>
                        <h3 className="text-white font-semibold">Cartes postales</h3>
                        <div className="flex flex-col space-y-1 mt-2 text-sm">
                            <a href="#" className="hover:text-gray-400">Souvenirs</a>
                            <a href="#" className="hover:text-gray-400">Familles</a>
                            <a href="#" className="hover:text-gray-400">Religions</a>
                            <a href="#" className="hover:text-gray-400">Populaires</a>
                            <a href="#" className="hover:text-gray-400">Soutiens</a>
                            <a href="#" className="hover:text-gray-400">Autres</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">À propos</h3>
                        <div className="flex flex-col space-y-1 mt-2 text-sm">
                            <a href="#" className="hover:text-gray-400">Figma to Framer</a>
                            <a href="#" className="hover:text-gray-400">HTML to Framer</a>
                            <a href="#" className="hover:text-gray-400">Developers</a>
                            <a href="#" className="hover:text-gray-400">Startup kit</a>
                            <a href="#" className="hover:text-gray-400">SaaS kit</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">Company</h3>
                        <div className="flex flex-col space-y-1 mt-2 text-sm">
                            <a href="#" className="hover:text-gray-400">Careers</a>
                            <a href="#" className="hover:text-gray-400">Events</a>
                            <a href="#" className="hover:text-gray-400">Status</a>
                            <a href="#" className="hover:text-gray-400">Security</a>
                            <a href="#" className="hover:text-gray-400">Privacy</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">Legal</h3>
                        <div className="flex flex-col space-y-1 mt-2 text-sm">
                            <a href="#" className="hover:text-gray-400">Abuse</a>
                            <a href="#" className="hover:text-gray-400">Charges</a>
                            <a href="#" className="hover:text-gray-400">Cookies</a>
                            <a href="#" className="hover:text-gray-400">Terms</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">Legal</h3>
                        <div className="flex flex-col space-y-1 mt-2 text-sm">
                            <a href="#" className="hover:text-gray-400">Abuse</a>
                            <a href="#" className="hover:text-gray-400">Charges</a>
                            <a href="#" className="hover:text-gray-400">Cookies</a>
                            <a href="#" className="hover:text-gray-400">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start ml-[730px] mt-8 space-x-10 text-lg">

              <a href="#">
                    <img
                        src="/icon1.svg"
                        alt="Icon"
                        className="cursor-pointer hover:text-gray-400 w-6 h-6"
                    />
                </a>
                <a href="#">
                    <img
                        src="/icon2.svg"
                        alt="Icon"
                        className="cursor-pointer hover:text-gray-400 w-6 h-6"
                    />
                </a>
                <a href="#">
                    <img
                        src="/icon3.svg"
                        alt="Icon"
                        className="cursor-pointer hover:text-gray-400 w-6 h-6"
                    />
                </a>
                <a href="#">
                    <img
                        src="/icon4.svg"
                        alt="Icon"
                        className="cursor-pointer hover:text-gray-400 w-6 h-6"
                    />
                </a>
            </div>
        </footer>

      
    </div>
  );
}
