"use client"; // Indique à Next.js que c'est un composant client


import { FaImages, FaPaintBrush, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < 3 ? prev + 1 : 0));
    }, 800);

    return () => clearInterval(interval);
  }, []);
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
    
<div className="bg-gradient-to-b from-[#E7F9FF] to-[#FAF9F7] w-full min-h-screen">


     
     {/* Bandeau de livraison */}
     <div className="w-full bg-[#01121E] h-[48px] flex justify-center items-center text-white text-sm">
        Livraison offerte à partir de 90€ d'achat avec le code* <strong>ENVOI</strong>
      </div>

      {/* Menu principal */}
      <div className="container mx-auto px-6 flex items-center justify-between h-[60px] bg-[#E7F9FF] mt-2">
        {/* Logo */}
        <div className=" text-2xl font-bold text-[#0B99FF]">
          <a href="/">
            <img src="/logo.svg" alt="logo" className="h-8" />
          </a>
        </div>
        <button className="text-[#0B99FF] text-[14px] w-[98px] h-[42px]  md:w-auto px-4 md:px-6 py-2 md:py-3 rounded-[12px] border border-[#75AFE8] bg-transparent text-center">
          InstaCause
        </button>
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
  
   


      {/* Home  cause photo */}


      <main className="w-full pt-[50px] min-h-screen bg-gradient-to-b from-[#E7F9FF] to-[#FAF9F7]">
      <div className="max-w-[1536px] w-full mx-auto px-4">
      {/* Conteneur principal : colonne sur mobile, ligne sur desktop */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start w-full md:w-[1220px] mx-auto mt-[-12.56px] gap-6">
        
        {/* IMAGE & TEXTE (Largeur augmentée pour desktop) */}
        <div className="relative w-full md:w-[1820px] h-[400px] rounded-[36px] bg-gradient-to-t from-black">
          {/* Image */}
          <img
            src="/ocean.svg"
            alt="Campagne"
            className="absolute w-full h-full object-cover rounded-[36px]"
          />
          
          {/* Texte & Boutons */}
          <div className="absolute bottom-0 left-0 p-6 md:ml-[30px] mb-[30px] flex flex-col gap-[15px] w-full md:w-[600px]">
            <p className="font-lufga font-medium text-[24px] md:text-[32px] leading-[100%] tracking-[-1.44%] text-white">
              Océans en danger : Votre carte, un appel à l'action.
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-[#75AFE8] rounded-[8px] text-white text-sm md:text-base">
                Écologie
              </button>
              <button className="px-4 py-2 border border-[#75AFE8] rounded-[8px] text-white text-sm md:text-base">
                France
              </button>
            </div>
          </div>
        </div>

        {/* INFO BOX (centrée sur mobile) */}
        <div className="w-full md:w-[496px] h-auto md:h-[403px] rounded-[36px] bg-[#6359F5] p-6 flex flex-col justify-between text-center md:text-left">
          <div className="w-full flex flex-col gap-4">
            <p className="font-lufga font-normal text-[12px] leading-[150%] text-[#FFFFFFA3]">
              Créé par
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src="/user.svg" alt="image" width={48} height={48} className="rounded-full" />
              <p className="font-lufga font-normal text-[16px] text-white">
                Notre Terre Pleure
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-lufga font-semibold text-[32px] md:text-[48px] leading-[150%] text-white">
              67 067
            </p>
            <p className="font-lufga font-normal text-[14px] md:text-[16px] leading-[150%] text-white">
              Ont déjà participé à cette cause
            </p>

            <button className="w-full h-[48px] bg-[#7C16F5] text-white rounded-[12px] py-3 px-6">
              Participer à cette cause
            </button>

            <div className="w-full h-[48px] bg-[#00000033] text-white rounded-[12px] py-3 px-6 flex justify-between items-center">
              <span>Inviter</span>
              <button className="bg-white text-[#6359F5] rounded-[5px] px-2 py-1 text-sm">
                Copier le lien
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>


{/* OJECTIF */}
<div className="w-full max-w-[1232px] h-auto mt-[64.16px] mx-auto flex flex-wrap gap-4 justify-center md:flex-row">
  {/* Sous div 1 */}
  <div className="w-full md:w-[400px] h-auto md:h-[323px] rounded-[32px] border border-[#0000001F] p-6 flex flex-col gap-6 bg-white">
    <h2 className="text-[24px] font-medium leading-none tracking-[-1px] text-[#292723]">
      Notre objectif
    </h2>
    <p className="text-[16px] font-lufga font-normal leading-[150%] tracking-[-0.5px] text-[#000000]">
      Notre objectif est simple : sauver nos océans. Chaque carte envoyée est un cri d'alarme contre la pollution plastique, la surpêche et le réchauffement climatique. Ensemble, nous voulons sensibiliser, mobiliser et soutenir les actions concrètes pour protéger ces écosystèmes vitaux. Rejoignez-nous, votre voix compte !
    </p>
  </div>
  
  <div className="flex flex-col items-center w-full max-w-[400px] mx-auto">
      {/* Image */}
      <div
        className="w-full h-[479.02px] rounded-[32px] bg-cover bg-center"
        style={{ backgroundImage: "url('/mer.svg')" }}
      ></div>

      {/* Loader */}
      <div className="flex gap-2 mt-4">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
              loadingStep === index ? "bg-[#0B99FF] scale-125" : "bg-[#D9D9D9]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  
  {/* Sous div 3 */}
  <div className="w-full md:w-[400px] h-auto md:h-[383px] rounded-[32px] border border-[#0000001F] p-6 flex flex-col gap-6 bg-white">
    <h2 className="text-[24px] font-medium leading-none tracking-[-1px] text-[#292723]">
      Notre objectif
    </h2>
    <p className="text-[16px] font-lufga font-normal leading-[150%] tracking-[-0.5px] text-[#000000]">
      <strong>Notre Terre Pleure</strong> est un collectif de citoyens engagés, unis par une passion commune : la protection de l'environnement. Utilisateurs d'Insta Cause, nous avons créé cette initiative pour donner une voix aux océans, trop souvent oubliés. Nous croyons en la force de l'action collective et en l'impact des messages personnalisés pour sensibiliser et mobiliser. Ensemble, nous voulons construire un avenir où les océans seront respectés et préservés pour les générations futures.
    </p>
  </div>
</div>

{/* destination cause*/}

<div className="w-full max-w-[1232px] mt-[54] mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-6 bg-white rounded-[32px] border border-[#0000001F]">
      
      {/* Sous-div 1 */}
      <div className="flex flex-col gap-6 w-full md:w-[580px]">
        
        {/* Bloc 1 */}
        <div className="p-6 rounded-lg w-full">
          <h2 className="text-[24px] font-medium tracking-[-1px] text-[#292723]">
          A qui est destiné cette cause ?
          </h2>
          <p className="text-[16px] font-normal leading-[150%] tracking-[-0.5px] text-[#000000]">
          Comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Bloc 2 */}
        <div className="p-6 rounded-lg w-full">
          <h2 className="text-[24px] font-medium tracking-[-1px] text-[#292723]">
          Dans quel but ?
          </h2>
          <p className="text-[16px] font-normal leading-[150%] tracking-[-0.5px] text-[#000000]">
          Comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Bouton */}
        <button className="w-[220px] h-[48px] rounded-[12px] border border-[#FFFFFF] bg-[#7C16F5] text-white font-medium px-6 py-3">
          En savoir plus
        </button>
      </div>

      {/* Sous-div 2 */}
      <div className="w-full md:w-[580px] flex flex-col gap-6">
        <img 
          src="/map.svg" 
          alt="Nature" 
          className="w-full h-[397.36px] rounded-[8px] object-cover"
        />
        <h2 className="text-[24px] font-medium tracking-[-1px] text-[#292723]">
        7 Rue des Patriarches, 75005 Paris
        </h2>
        <p className="text-[18px] font-medium leading-[36px] tracking-[-1px] text-[#292723]">
        Ministère de l’écologie et du développement durable
        </p>
      </div>
      
    </div>


{/* participer*/}
<div className="w-full max-w-[1232px] h-auto mt-[39] md:mt-[130px] mx-auto text-center text-[#292723] p-4 md:h-[723.66px]">

  {/* Contenu de la section */}
  <h2 className="relative text-2xl md:text-3xl font-bold mt-[-20px] md:mt-[-66px] text-gray-800 z-10">
    Comment participer ?
  </h2>
  <p className="relative text-gray-600 mt-3 max-w-xl mx-auto z-10 text-sm md:text-lg">
    Libérez tout le potentiel de <strong>Instacard</strong> avec des modèles. Découvrez des 
    <br className="hidden md:block" /> milliers de design et de catégories.
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


{/* choix modele */}
<div className="relative h-auto mt-16 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
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
      <h2 className="text-[#000000] text-[24px] sm:text-[28px] font-bold leading-snug">
        Trouvez de l’inspiration pour vos <br className="hidden sm:block" /> cartes avec plus de 200000 <br className="hidden sm:block" /> créations.
      </h2>
      <p className="text-[#000000] text-[14px] mt-4">
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
      <h2 className="text-[#000000] text-[18px] text-center lg:text-left">
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


{/* impact cause*/}

<div className="relative w-full mt-[123px] md:w-[1318px] h-[568px] overflow-hidden">
  {/* Image de fond avec gradient */}
  <div className="absolute inset-0">
    <img
      src="/ocean.svg"
      alt="Campagne"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#7C16F5] to-transparent"></div>
  </div>

  {/* Conteneur des blocs */}
  <div className="relative flex flex-col md:flex-row items-center justify-between w-full h-full p-6">
    {/* Première sous-div */}
    <div className="w-full md:w-[496px] h-auto md:h-[403px] rounded-[36px] bg-white p-6 flex flex-col justify-between text-center md:text-left">
      {/* Titre section "Impact de notre cause" */}
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <p className="font-lufga text-center font-normal text-[16px] text-[#292723]">
            Impact de notre cause
          </p>
        </div>
      </div>

      {/* Nombre de participants */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-lufga text-center font-semibold text-[32px] md:text-[48px] leading-[150%] text-[#000000]">
          67 067
        </p>

        {/* Section des avatars et texte des participants */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-x-[1] -space-x-3">
            {Array(3).fill("/carte.svg").map((src, index) => (
              <div key={index} className="w-12 h-12 bg-white rounded-full border border-white">
                <Image src={src} alt={`Carte ${index}`} width={48} height={48} className="rounded-full" />
              </div>
            ))}
          </div>
          <p className="font-lufga font-normal text-[14px] md:text-[16px] leading-[150%] text-[#000000]">
            +6005 participants
          </p>
        </div>
      </div>

      {/* Section pour inviter des personnes */}
      <div className="w-full h-[48px] bg-[#000000] text-[#FEFEFE] rounded-[12px] py-3 px-6 flex justify-between items-center mt-4">
        <span className="text-xs md:text-sm">Inviter des personnes à cette cause</span>
        <button className="bg-[#FFFFFF52] text-[#FEFEFE] rounded-[5px] px-2 py-1 text-sm">
          Copier le lien
        </button>
      </div>

      {/* Bouton Participer à cette cause */}
      <button className="w-full h-[48px] bg-[#7C16F5] text-white rounded-[12px] py-3 px-6 mt-4">
        Participer à cette cause
      </button>
    </div>

    {/* Deuxième sous-div */}
    <div className="w-full md:w-[737px] h-auto md:h-[402px] rounded-[36px] flex items-center justify-center p-6 shadow-lg mt-6 md:mt-0">
      <p className="text-gray-700">Contenu ici...</p>
    </div>
  </div>
</div>



    </main>



   

{/* les telecherges */}

                <div className="flex flex-col items-center mt-[90px] mb-[60px] max-w-[1236px] mx-auto">
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
