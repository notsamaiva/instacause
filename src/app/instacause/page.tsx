'use client';


import { FaImages, FaPaintBrush, FaSearch, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const postes = [
  {
    image: "/force.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 500,
  },
  {
    image: "/force.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 1200,
  },
  {
    image: "/force.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 800,
  },
  {
    image: "/force.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 950,
  },
  {
    image: "/force.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 700,
  },
];
const reviews = [
  {
    text: "J'avais envie de faire un don, mais avec InstaCause, j'ai pu envoyer un message personnel à la personne aidée. Ça change tout ! Une plateforme humaine et simple.",
    name: "Name",
    time: "Il y a 10 mois",
    image: "/carte.svg"
  },
  {
    text: "J'avais envie de faire un don, mais avec InstaCause, j'ai pu envoyer un message personnel à la personne aidée. Ça change tout ! Une plateforme humaine et simple.",
    name: "Name",
    time: "Il y a 8 mois",
    image: "/carte.svg"
  },
  {
    text: "J'avais envie de faire un don, mais avec InstaCause, j'ai pu envoyer un message personnel à la personne aidée. Ça change tout ! Une plateforme humaine et simple.",
    name: "Name",
    time: "Il y a 10 mois",
    image: "/carte.svg"
  },
  {
    text: "J'avais envie de faire un don, mais avec InstaCause, j'ai pu envoyer un message personnel à la personne aidée. Ça change tout ! Une plateforme humaine et simple.",   
    name: "Name",
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
  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };
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
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "Quel est le prix d’une carte postale solidaire ?",
      answer: "📌 Le prix varie selon la destination, mais une partie est toujours reversée à la cause soutenue.",
    },
    {
      question: "Comment sont envoyées les cartes postales ?",
      answer: "📌 Nous nous chargeons de l’impression et de l’envoi pour vous !",
    },
    {
      question: "Comment puis-je être sûr que l’argent est bien reversé ?",
      answer: "📌 Nous collaborons directement avec des associations et des porteurs de projets. Chaque transaction est transparente et suivie.",
    },
    {
      question: "Puis-je envoyer une carte anonymement ?",
      answer: "📌 Oui, vous pouvez envoyer une carte sans afficher votre nom.",
    },
    {
      question: "À qui puis-je envoyer une carte postale InstaCause ?",
      answer: "📌 Vous pouvez envoyer une carte à une personne en particulier ou à une association qui distribue les messages aux bénéficiaires.",
    },
    {
      question: "InstaCause est-il disponible dans mon pays ?",
      answer: "📌 InstaCause est accessible partout dans le monde. Nos cartes peuvent être envoyées vers de nombreux pays.",
    },
    {
      question: "Quel type de visuel puis-je choisir pour ma carte ?",
      answer: "📌 Vous pouvez choisir parmi nos designs solidaires ou importer vos propres images et visuels personnalisés.",
    },
    {
      question: "Comment puis-je suivre ma carte postale ?",
      answer: "📌 Une notification vous informe dès que votre carte a été imprimée et expédiée.",
    },
    {
      question: "Comment contacter le support InstaCause ?",
      answer: "📌 Vous pouvez nous écrire via le formulaire de contact ou par email à cause@insta-card.com.",
    },
  ];
  return (
    
<div className="overflow-hidden bg-gradient-to-b from-[#E7F9FF] to-[#FAF9F7] w-full min-h-screen">
     {/* Bandeau de livraison */}
     <div className="w-full bg-[#01121E] h-[48px] flex justify-center items-center text-white text-sm">
        Livraison offerte à partir de 90€ d'achat avec le code* <strong>ENVOI</strong>
      </div>
      <nav className="bg-[#E7F9FF]">
      <div className="container max-w-screen-xl mx-auto px-6 flex flex-wrap items-center justify-between h-[60px] mt-2">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#0B99FF]">
          <a href="/">
            <img src="/logo.svg" alt="logo" className="w-[48px] h-[47px]" />
          </a>
        </div>

        {/* Icône menu burger sur mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-2xl text-[#0B99FF]" />
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-[40px] text-[#292723] text-[14px] items-center">
          {[
            { label: "Accueil", links: ["Fonctionnalités clés", "Comment ça marche", "À propos", "Contact"] },
            { label: "Liste des causes", links: ["Education", "Humanitaire", "Politique", "Environnement", "Artiste", "Business", "Autres"] },
            { label: "À propos", links: ["Notre mission", "Notre équipe", "Contactez-nous", "FAQ"] },
          ].map((menu, index) => (
            <div key={index} className="relative group">
              <button onClick={() => toggleDropdown(menu.label)} className="hover:text-[#0B99FF] flex items-center gap-2">
                {menu.label} {openDropdown === menu.label ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50 transition-opacity duration-300 ${
                  openDropdown === menu.label ? "opacity-100 visible" : "opacity-0 invisible"
                } group-hover:opacity-100 group-hover:visible`}
              >
                {menu.links.map((link, i) => (
                  <a key={i} href="#" className="font-bold block px-4 py-2 hover:bg-gray-100">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Boutons */}
        <div className="hidden md:flex space-x-4 text-xs items-center">
          <button className="text-white px-4 md:px-6 py-2 md:py-3 rounded-[12px] bg-[#0B99FF] text-center">
            Créer une campagne
          </button>
          <button className="text-black px-4 md:px-6 py-2 md:py-3 rounded-[12px] border border-black bg-transparent text-center">
            Connexion
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-[150px] left-0 w-full bg-white shadow-lg z-50">
          {[
            { label: "Accueil", links: ["Fonctionnalités clés", "Comment ça marche", "À propos", "Contact"] },
            { label: "Liste des causes", links: ["Education", "Humanitaire", "Politique", "Environnement", "Artiste", "Business", "Autres"] },
            { label: "À propos", links: ["Notre mission", "Notre équipe", "Contactez-nous", "FAQ"] },
          ].map((menu, index) => (
            <div key={index} className="p-4 border-b">
              <button onClick={() => toggleDropdown(menu.label)} className="w-full text-left flex justify-between items-center">
                {menu.label} {openDropdown === menu.label ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openDropdown === menu.label && (
                <div className="mt-2 space-y-2">
                  {menu.links.map((link, i) => (
                    <a key={i} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <button className="w-full text-white px-4 py-3 rounded-[12px] bg-[#0B99FF] text-center">
              Créer une campagne
            </button>
            <button className="w-full mt-2 text-black px-4 py-3 rounded-[12px] border border-black bg-transparent text-center">
              Connexion
            </button>
          </div>
        </div>
      )}
    </nav>
      {/* Home  cause photo */}

      <main
  className="w-full pt-[50px] min-h-screen"
  style={{
    backgroundImage: "linear-gradient(to bottom, #E7F9FF 0%, #E7F9FF 300px, #E7F9FF 300px, #E7F9FF 100%)",
  }}
>


      <div className="max-w-[1232px] w-full h-full mx-auto px-4">
  {/* Texte central */}
  <div className="flex flex-col items-center text-center py-5">
    <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black">
      Vos cartes postales, un écho pour <br className="hidden md:block" />
      les causes qui comptent.
    </h1>
    <p className="text-black font-normal text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] mt-4 max-w-[690px]">
      Engagez-vous, sensibilisez, mobilisez. Envoyez des cartes <br className="hidden md:block" /> 
      postales personnalisées pour soutenir des causes universelles <br className="hidden md:block" />
      et faites la différence.
    </p>
  </div>

  {/* Grille responsive */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
    
    {/* Carte 1 */}
    <div className="bg-[#2D65AF] w-full max-w-[236px] md:mt-[-80] h-[287px] text-white rounded-[32px] flex flex-col justify-end p-4">
      <Image src="/traits.svg" alt="traits" width={236} height={287} className="rounded-[32px]" />
      <p className="mt-4 text-[14px] sm:text-[16px]">Soutenez les causes qui vous tiennent à cœur.</p>
      <Link href="/soutenir_cause" className="text-white border border-white px-6 py-3 rounded-[12px] font-semibold mt-4 text-center block">
        Explorer les causes
      </Link>
    </div>

    {/* Image 1 */}
    <Image src="/event.jpeg" alt="Campagne" width={236} height={287} className="md:mt-220 w-full max-w-[236px] min-h-[287px] object-cover rounded-[32px]" />

    {/* Carte 2 */}
    <div className="bg-[#0B99FF] w-full max-w-[236px] md:mt-[66] h-[220px] text-white p-4 rounded-[32px] flex flex-col justify-end text-center">
      <p className="mb-6 text-[14px] sm:text-[16px]">Engagez-vous en un clic avec InstaCause</p>
      <Link href="/login" className="text-white border border-white px-6 py-3 rounded-[12px] font-semibold text-center block">
        Créer une cause
      </Link>
    </div>

    {/* Image 2 */}
    <Image src="/cause.jpeg" alt="cause" width={236} height={287} className="md:mt-220 w-full max-w-[236px] min-h-[287px] object-cover rounded-[32px]" />

    {/* Carte 3 */}
    <div className="bg-[#6359F5] md:mt-[-80] w-full w-[236px] h-[287px] text-white rounded-[32px] flex flex-col justify-end p-4">
      <p className="text-[14px] sm:text-[16px]">Quand vos mots deviennent des actes</p>
      <button className="text-white border border-white px-6 py-3 rounded-[12px] font-semibold mt-4">
        Explorer l’impact
      </button>
    </div>

  </div>
</div>




    
       {/* Comment ça marche */}
<div className="flex flex-col items-center px-4 md:px-8 bg-[#FAF9F7] mt-[63] mb-24">
      <div className="rounded-[60px] p-8 w-full max-w-[1232px] text-center bg-gradient-to-l from-[#DFF0E4] to-[#A6D5E8]">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-[33px] sm:text-[33px] font-semibold mb-4 text-[#000000]">
            Créer une cause sur InstaCard ne prend <br />que quelques clics
          </h2>
          <p className="text-[#000000] text-[18px] sm:text-[24px]">
            Engagez-vous, sensibilisez, mobilisez. Envoyez des cartes <br /> postales personnalisées pour soutenir des causes universelles <br />et faites la différence.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around max-w-[1136px] min-h-[200px] p-4 mt-6 mx-auto space-y-6 md:space-y-0">
  {/* Étape 1 */}
  <div className="flex flex-col items-center text-center">
    <img src="/phon1.svg" width={285} height={275} className="w-24 sm:w-36" />
    <div className="w-[285px] h-[72px] md:mt-[43] flex items-center justify-center text-center">
      <p className="font-[Lufga] font-normal text-[22px] leading-[150%] tracking-[-0.5px]">
        Créer ou choisir un modèle de carte via l’explorateur
      </p>
    </div>
  </div>

  {/* Étape 2 */}
  <div className="flex flex-col items-center text-center">
    <img src="/phon2.svg" width={285} height={418} className="md:h-[188] w-24 sm:w-36" />
    <div className="w-[285px] h-[72px] md:mt-[-5] flex items-center justify-center text-center">
      <p className="font-[Lufga] font-normal text-[22px] leading-[150%] tracking-[-0.5px]">
        Personnaliser votre message, votre voix
      </p>
    </div>
  </div>

  {/* Étape 3 */}
  <div className="flex flex-col items-center text-center">
    <img src="/phon3.svg" width={274} height={238} className="w-24 sm:w-36" />
    <div className="w-[285px] h-[72px] md:mt-[63] flex items-center justify-center text-center">
      <p className="font-[Lufga] font-normal text-[22px] leading-[150%] tracking-[-0.5px]">
        On se charge de la livrer à la bonne adresse
      </p>
    </div>
  </div>
</div>

      </div>

      {/* LES causes interessant*/}
      <div className="flex justify-between max-w-[1232px] items-center w-full mt-[76] flex-col sm:flex-row">
      <div className="w-full max-w-[1553] mt-8 flex-col sm:flex-row">
        <h2 className="text-2xl font-semibold text-center justify-center sm:text-left">
          Quelques causes qui peuvent vous intéresser
        </h2> </div>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Image src="/arrowL.svg" alt="Previous" width={40} height={40} className="cursor-pointer rotate-180" />
          <Image src="/arrowL.svg" alt="Next" width={40} height={40} className="cursor-pointer" />
        </div>
      </div>
    
   {/* LES causes interessant*/}

 <section className="overflow-hidden relative text-center h-[756px] max-w-[1232px] mt-[-74] py-24">
 
  
  <div className="relative w-full overflow-hidden mt-[29.06px] ">
  {/* Liste des cartes avec animation */}
  <div className="flex space-x-[9.53px] animate-scroll">
  {[...postes, ...postes].map((poste, index) => (
     <div key={index} className="w-full max-h-[670px] max-w-[404px] bg-[#FFFFFF] p-3 rounded-[52px] border border-[#0000001F] flex flex-col items-center md:items-start gap-4">
      <div className="w-full max-h-[598px] max-w-[396px] bg-[#FFFFFF] p-3 flex flex-col rounded-[52px] items-center md:items-start gap-4">
        <img src={poste.image} width={456} height={300} className="rounded-[40px]" />
        <h1 className="text-[18px] font-semibold">{poste.title}</h1>
        <p className="text-[#6F7580] text-[12px] leading-[1.5] tracking-[0.5px] text-left w-full">
          {poste.description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p className="text-[#6F7580] text-[12px] leading-[1.5] tracking-[0.5px]">
          {poste.createdAt}
        </p>
        <h1 className="text-[14px] font-semibold">{poste.title}</h1>
        <div className="flex items-center -space-x-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-10 h-10 bg-white rounded-full border border-white">
              <img src="/carte.svg" alt={`Carte ${i + 1}`} width={48} height={48} className="rounded-full" />
            </div>
          ))}
          <span className="text-[13px] text-black pl-3">
            +{poste.cardsSent} cartes envoyées
          </span>
        </div>
      </div>
    </div>
  ))};
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

<div className="flex justify-center mt-[44]">
      <button className="text-white px-6 py-2 rounded-[12px] bg-[#0B99FF]">
        <strong className="text-[14px]">Voir tous</strong>
        <span className="text-2xl ml-2">+</span>
      </button>
    </div>
</div>

</section> 

<section className="overflow-hidden relative text-center h-[756px] w-full max-w-[1232px] mt-[-74] py-14">

  <div className="relative max-h-[768px] h-full w-full max-w-[1232px] flex flex-col items-center justify-center px-4 text-center mt-16">
    {/* Image du dégradé centrée */}
    <img
      src="/backdegrade.svg"
      alt="Dégradé"
      className="overflow-hidden absolute top-[-224px] left-2/3 transform -translate-x-2/3 w-full max-w-[1676px]  max-h-[1302px]"
    />
 
 <p className="text-[20px] sm:text-[25px] font-semibold text-[#000000]">
  En quelques minutes, transformez votre message en un <br />acte concret et rejoignez le mouvement Insta Cause.
</p>

    <p className="text-[90px] font-light text-black mt-[40] tracking-[-6.65px] leading-[166.33px]">
      + 5.000
    </p>


    <p className="text-[22px] font-semibold text-black mt-2">Nous ont déjà rejoints</p>
    <button className="mt-6 cursor-pointer bg-black text-white px-6 py-3 rounded-[14px] shadow-lg hover:bg-gray-800">
    Créer ma campagne maintenant !
    </button>
 
  </div>
</section>

<section className="overflow-hidden w-full relative text-center h-[756px] max-w-[1232px] mt-20 py-14 mx-auto">
      <h2 className="text-[#0B99FF] text-center uppercase font-bold text-[14px] tracking-wide drop-shadow-md">
        TEMOIGNAGES
      </h2>
      <h2 className="text-3xl font-bold mt-6 text-gray-800">
        Les gens adorent utiliser InstaCause.
      </h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Des milliers de personnes ont envoyé avec succès des milliers de cartes postales à travers le monde. Et vous ?
      </p>
      
      <div className="relative flex items-center justify-center mt-10">
 {/* Bouton gauche */}

        
        <div className="flex gap-6 w-full justify-center transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 33.3}%)` }}>
        {reviews.map((review, index) => (
            <div key={index} className="w-full">
              <div
                className={`relative w-[400px] h-[329px]  border border-gray-300 bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300
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
        <button onClick={prevSlide} className="absolute" style={{ top: "316.03px", right: "226px", width: "420px", height: "398px" }}>
  <Image
    src="/strollgauche.svg"
    alt="Scroll droite"
    width={420}
    height={398}
    className="cursor-pointer mt-[-546px]"style={{ transform: "translateX(-620px)" }} // Décalage appliqué ici
  />
</button>
       {/* Bouton droit */}
<button onClick={nextSlide} className="absolute" style={{ top: "316.03px", right: "226px", width: "420px", height: "398px" }}>
  <Image
    src="/strolldroite.svg"
    alt="Scroll droite"
    width={420}
    height={398}
    className="cursor-pointer mt-[-546px]"style={{ transform: "translateX(260px)" }} // Décalage appliqué ici
  />
</button>
      </div>
    </section>

       {/*BLOCKS  Logos des partenaires */}
    <div
      className="max-w-[1232px] w-full h-[120px] border-2 border-transparent bg-[#FAF9F7] relative mx-auto"
      style={{
        borderImage: 'linear-gradient(to right, #FAF9F7, #D2D2D2, #FAF9F7) 1',
      }}
    >
      {/* Div intérieure (centrée à l'intérieur de la première div) */}
      <div className="w-full max-w-[1200px] h-[48px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center">
        {/* Logos des partenaires */}
        <Image src="/logo1.svg" alt="Logo 1" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
        <Image src="/logo2.svg" alt="Logo 2" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
        <Image src="/logo3.svg" alt="Logo 3" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
        <Image src="/logo4.svg" alt="Logo 4" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
        <Image src="/logo5.svg" alt="Logo 5" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
      </div>
    </div>



{/* les question */}
<div className="relative max-w-[1232px] mt-[83] flex flex-col md:flex-row w-full justify-between bg-[#FAF9F7] mb-[50px] pb-[80px]  ">
  <Image
      src="/backb.svg"
      alt="decoration"
      width={800}
      height={800}
      className="absolute top-0 left-0 w-[80%] md:w-[1200px] h-auto"
      priority
    />
                    <div className="md:w-1/2 space-y-4 px-6 md:px-10 pt-[50px] md:pt-[100px]">
                      
                        <div className="absolute items-center mt-[4px] sm:items-start p-2 sm:p-6 sm:space-x-1">
                        <h2 className="text-[#FF5DD9] text-left uppercase font-bold text-[14px]  leading-none tracking-normal drop-shadow-[0px_4px_18px_#FF5DD9]">
                          FAQ
                        </h2>
                        
                        <h2 className="text-2xl mt-[34px] md:text-3xl font-bold text-gray-900">Questions posées par les utilisateurs <br />sur Instacard.</h2>
                        <p className="text-gray-600 mt-[14px] text-sm md:text-base">Des milliers de personnes ont envoyé avec succès des <br /> milliers de carte postale a travers le monde et vous ?</p>
                            
                            <div className="space-y-2 w-full mt-[34px]  sm:w-[500px]">
                         
                            <div>
                              {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-4">
                                  <button
                                    className="w-full text-left px-4 py-3 flex justify-between items-center text-sm md:text-lg font-medium text-gray-800 bg-white hover:bg-gray-100"
                                    onClick={() => toggle(index)}
                                  >
                                    <p className="text-[12px] sm:text-[13px] md:text-[14px]">{faq.question}</p>
                                    {open === index ? (
                                      <FaChevronUp className="text-16 md:text-[16] text-[#6F7580]" />
                                    ) : (
                                      <FaChevronDown className="text-16 md:text-[16] text-[#6F7580]" />
                                    )}
                                  </button>
                                  {open === index && (
                                    <div className="px-4 py-3 text-sm text-gray-700 bg-gray-50">
                                      {faq.answer}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-start relative p-4 md:p-0">
      {/* Image principale */}
      <Image
        src="/userr.svg"
        alt="Image utilisateur heureux"
        width={648}
        height={805}
        className="rounded-lg w-full max-w-[648px] h-auto"
      />
    </div>     
    </div>





    <div className="max-w-[1232px] flex flex-col items-center mt-[240px] mb-[60px] mx-auto">
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


             
                <footer className="w-full max-w-[1232px] relative bg-[#0A131E] text-gray-300 py-10 px-6 overflow-hidden">
               {/* Image du dégradé centrée */}
      <img
        src="/degrade.svg"
        alt="Dégradé"
        className="absolute top-[54px] left-[-494px]  transform  w-[4599px] h-[525px]"
      />
            <div className="max-w-[1232px] max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
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



{/* 500 */}




    </main>



   

               

        

    </div>
  );
}

