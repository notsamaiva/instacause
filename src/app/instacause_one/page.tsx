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
  
       {/* Grands Titres et image d'accueil*/}

<div className="max-w-[1076px] w-full px-4 md:px-0 mt-[75px] mx-auto text-center text-[#292723]">
<div className="flex justify-center mt-[26]">
      <button className="text-[14px] text-[#FFFFFF] px-5 py-2 rounded-[38px] bg-[#000000]">
        INSTACAUSE
      </button>
    </div>

</div>
  
  


      {/* Home  cause photo */}


      <main className="w-full pt-[50px] min-h-screen bg-gradient-to-b from-[#E7F9FF] to-[#FAF9F7]">
      <div className="max-w-[1236px]  h-full mx-auto px-4">
        <div className="flex flex-col items-center mt-[-44] text-center py-5">
          <h1 className="text-[48px] sm:text-[55px] lg:text-[37px] font-bold text-black">
            Vos cartes postales, un écho pour <br />
        les causes qui comptent.
          </h1>
          <p className="text-black font-normal text-[10px] lg:text-[22px] mt-4 max-w-[690px]">
            Engagez-vous, sensibilisez, mobilisez. Envoyez des cartes <br /> postales personnalisées
            pour soutenir des causes universelles <br /> et faites la différence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
          <div className="bg-[#2D65AF] max-w-[236px] h-[287px] mt-[-80px] text-white rounded-[32px] flex flex-col justify-end p-4">
            <Image src="/traits.svg" alt="traits" width={236} height={287} className="rounded-[32px]" />
            <p className="mt-4 text-[16px]">Soutenez les causes qui vous tiennent à cœur.</p>
            <Link href="/soutenir_cause" className="text-white border border-white px-6 py-3 rounded-[12px] font-semibold mt-4 text-center block">
              Explorer les causes
            </Link>
          </div>
          
          <Image src="/event.jpeg" alt="Campagne" width={236} height={287} className="  mt-220px max-w-[236px] min-h-[287px] object-cover rounded-[32px]" />
          
          <div className="bg-[#0B99FF] mt-[66px] ml-[3px]   max-w-[236px] h-[220px] text-white p-4 rounded-[32px] flex flex-col justify-end text-center">
            <p className="mb-6 text-[16px]">Engagez-vous en un clic avec InstaCause</p>
            <Link href="/login" className="text-white border border-white px-6 py-3 rounded-[12px] font-semibold text-center block">
              Créer une cause
            </Link>
          </div>
          
          <Image src="/cause.jpeg" alt="cause" width={236} height={287} className="ml-[-6px] max-w-[236px]  mt-220px min-h-[287px] object-cover rounded-[32px]" />
          
          <div className="bg-[#6359F5] max-w-[236px] h-[287px] mt-[-80px] text-white rounded-[32px] flex flex-col justify-end p-4">
            <p className="text-[16px]">Quand vos mots deviennent des actes</p>
            <button className="text-white border border-white px-6 py-3 rounded-[12px] font-semibold mt-4">
              Explorer l’impact
            </button>
          </div>
        </div>
      </div>

       {/* ronds des cercles */}
<div className="flex flex-col items-center px-4 md:px-8 mt-[63] mb-24">
      <div className="rounded-[60px] p-8 w-full text-center bg-gradient-to-l from-[#A6D5E8] to-[#A6D5E8]">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[33px] font-semibold mb-4 text-black">
            Créer une cause sur InstaCard ne prend que quelques clics
          </h2>
          <p className="text-black text-[18px] sm:text-[24px]">
            Engagez-vous, sensibilisez, mobilisez. Envoyez des cartes postales personnalisées pour soutenir des causes universelles et faites la différence.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around max-w-4xl min-h-[200px] p-4 mt-6 mx-auto space-y-6 md:space-y-0">
          {["cercle1.svg", "cercle2.svg", "cercle3.svg"].map((src, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={`/cercle.svg`} alt={`Cercle ${index + 1}`} width={140} height={140} className="w-24 sm:w-36" />
              <p className="mt-2 text-[18px] sm:text-[24px]">
                {index === 0 ? "Créer une carte dans l'explorateur" : 
                 index === 1 ? "Personnaliser votre message, votre voix" : 
                 "Poster la carte vers le destinataire"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full mt-8 flex-col sm:flex-row">
      <div className="flex justify-center items-center w-full mt-8 flex-col sm:flex-row">
        <h2 className="text-2xl font-semibold text-center justify-center sm:text-left">
          Quelques causes qui peuvent vous intéresser
        </h2> </div>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Image src="/arrowL.svg" alt="Previous" width={40} height={40} className="cursor-pointer rotate-180" />
          <Image src="/arrowL.svg" alt="Next" width={40} height={40} className="cursor-pointer" />
        </div>

        
      </div>
      <div className="relative min-h-[500px] w-full max-w-[3000px] flex flex-col items-center justify-center px-4 text-center mt-16">
            {/* Image du dégradé centrée */}
      <img
        src="/backdegrade.svg"
        alt="Dégradé"
        className="absolute top-[54px] left-2/3 transform -translate-x-2/3 w-full max-w-[3000px]  h-[525px]"
      />
        <p className="text-[30px] font-semibold text-black max-w-[850px]">
          En quelques minutes, transformez votre message en un acte concret et rejoignez le mouvement Insta Cause.
        </p>
        <p className="text-[90px] font-bold text-black mt-40">+ 5.000</p>
        <p className="text-[32px] font-semibold text-black mt-2">Nous ont déjà rejoints</p>
        <button className="mt-6 cursor-pointer bg-black text-white px-6 py-3 rounded-[14px] shadow-lg hover:bg-gray-800">
          Oui, je veux rejoindre InstaCard
        </button>
        {["top-20 left-10", "top-20 right-40", "bottom-0 left-40", "bottom-0 right-20"].map((position, index) => (
          <div key={index} className={`absolute ${position} w-[7rem] h-[11rem] bg-[#D9D9D9] rounded-[28px] hidden sm:block`} />
        ))}
        
      </div>
    </div>



{/* Les Tegmoignages */}


<section className="text-center w-full py-24">
<h2 className="text-[#0B99FF] mt-{-512} text-center uppercase font-bold text-[14px] leading-none tracking-normal drop-shadow-[0px_4px_18px_#0B99FFCC]">
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

    </main>



   

{/* les question */}
    <div className="relative flex flex-col md:flex-row w-full justify-between bg-[#FAF9F7] mb-[50px] pb-[80px]  ">
  <Image
      src="/backb.svg"
      alt="decoration"
      width={800}
      height={800}
      className="absolute top-0 left-0 w-[80%] md:w-[800px] h-auto"
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

      {/* Images supplémentaires */}
      <Image
        src="/sup4.svg"
        alt="Image 1"
        width={400}
        height={400}
        className="rounded-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50%] md:w-[400px] h-auto"
        priority
      />
      <Image
        src="/sup3.svg"
        alt="Image 2"
        width={120}
        height={120}
        className="rounded-lg absolute top-5 right-[62%] transform -translate-x-1/2 w-[15%] md:w-[120px] h-auto"
        priority
      />
      <Image
        src="/sup1.svg"
        alt="Image 2"
        width={120}
        height={120}
        className="rounded-lg absolute top-[28rem] right-[60%] transform -translate-x-1/2 w-[15%] md:w-[120px] h-auto"
        priority
      />
      <Image
        src="/sup2.svg"
        alt="Image 4"
        width={130}
        height={130}
        className="rounded-lg absolute top-[20rem] left-[90%] transform -translate-x-1/2 w-[16%] md:w-[130px] h-auto"
        priority
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
