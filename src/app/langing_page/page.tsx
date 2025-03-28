'use client';


import { FaImages, FaPaintBrush, FaSearch, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    image: "/force.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 500,
  },
  {
    image: "/force1.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 1200,
  },
  {
    image: "/force2.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 800,
  },
  {
    image: "/force3.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 950,
  },
  {
    image: "/force4.svg",
    title: "Non aux féminicide en France",
    description: "Stop aux féminicides : la justice, la prévention et la \nsolidarité doivent triompher.... #NonAuxFéminicides \n#PlusJamaisÇa",
    createdAt: "Créer il y’a 5 jours",
    cardsSent: 700,
  },
];
const reviews = [
  {
    text: "J'ai utilisé InstaCause pour soutenir une association qui aide les enfants malades. Recevoir une carte de soutien a énormément touché les bénéficiaires. Une magnifique initiative !",
    name: "Marie L.",
    time: "Paris, France",
    image: "/carte.svg"
  },
  {
    text: "J'avais envie de faire un don, mais avec InstaCause, j'ai pu envoyer un message personnel à la personne aidée. Ça change tout ! Une plateforme humaine et simple.",
    name: "Thomas R.",
    time: "Lyon, France",
    image: "/carte.svg"
  },
  {
    text: "Créer ma propre campagne a été un jeu d’enfant. Grâce à InstaCause, j’ai mobilisé mes amis pour aider une famille en difficulté. Résultat : plus de 200 cartes envoyées !",
    name: "Fatima K.",
    time: "Bruxelles, Belgique",
    image: "/carte.svg"
  },
  {
    text: "Ce qui m'a convaincu, c'est l'impact direct. On voit à qui on écrit, on sait où va l'argent. C’est 100 % transparent !",   
    name: "Kevin D.",
    time: "Montréal, Canada",
    image: "/carte.svg"
  },
  {
    text: "Je n'avais jamais vu une plateforme qui permet d’envoyer du soutien moral ET d’aider financièrement en même temps. InstaCause est une révolution solidaire.",   
    name: "Amina T.",
    time: "Dakar, Sénégal",
    image: "/carte.svg"
  },
  {
    text: "J’ai reçu une carte InstaCause lors d’une période difficile. Ce petit mot d’encouragement m’a redonné de l’espoir. J’ai décidé ensuite d’envoyer moi-même des cartes à d’autres !",   
    name: " Lucas J.",
    time: "Marseille, France",
    image: "/carte.svg"
  },
  {
    text: "En tant qu'association, nous avons pu collecter des fonds tout en créant du lien avec nos donateurs. Une approche innovante et bien pensée.",   
    name: " Sophie B.",
    time: "Genève, Suisse",
    image: "/carte.svg"
  },
  {
    text: "Le fait de pouvoir envoyer une carte et participer à une bonne action en même temps est une superbe idée ! J’envoie une carte chaque mois maintenant.",   
    name: " Mohammed E.",
    time: "Casablanca, Maroc",
    image: "/carte.svg"
  },
  {
    text: "Je voulais aider une amie en difficulté, mais je ne savais pas comment. InstaCause m’a permis de lui envoyer du soutien de façon concrète.",   
    name: "  Julie V.",
    time: "Toulouse, France",
    image: "/carte.svg"
  },
  {
    text: "J’ai découvert InstaCause par hasard, et depuis, je l’utilise régulièrement. Le processus est fluide, rapide et surtout impactant. Bravo à l’équipe !",   
    name: " David S.",
    time: " Berlin, Allemagne",
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

 
  const [itemsPerView, setItemsPerView] = useState(3); // Par défaut : 3 cartes visibles (desktop)

  useEffect(() => {
    // Détecter la taille de l'écran pour ajuster le nombre d'éléments visibles
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile : 1 carte
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablette : 2 cartes
      } else {
        setItemsPerView(3); // Desktop : 3 cartes
      }
    };

    updateItemsPerView(); // Appliquer immédiatement
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, [reviews.length]);

  const [isLangOpen, setIsLangOpen] = useState(false);

 

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  // Fermer les menus si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !document.getElementById("nav-menu")?.contains(event.target as Node) &&
        !document.getElementById("lang-menu")?.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        setIsLangOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const languages = [
    { name: "Français", flag: "/flag-france.svg" },
    { name: "English", flag: "/flag-USA.svg" },
    { name: "Español", flag: "/flag-spain.svg" },
    { name: "Italiano", flag: "/flag-italy.svg" },
    
  ];



  return (
    
<div className="overflow-hidden bg-[#FFEEEE] w-full min-h-screen">
     {/* Bandeau de livraison */}
     <div className="w-full bg-[#01121E] h-[48px] flex justify-center items-center text-white text-sm">
        Livraison offerte à partir de 90€ d'achat avec le code* <strong>ENVOI</strong>
      </div>
      <nav className="bg-[#FFEEEE]">
  <div className="container max-w-screen-xl mx-auto px-6 flex flex-wrap items-center justify-between h-[60px] mt-2">
    {/* Logo */}
    <div className="text-2xl font-bold text-[#0B99FF]">
      <a href="/">
        <img src="/logo.svg" alt="logo" className="w-[48px] h-[47px]" />
      </a>
    </div>
  {/* Barre de recherche (affichée uniquement sur grand écran) */}
       <div className="hidden md:flex relative w-[300px] lg:w-[387px] h-[40px] border border-white rounded-[40px] items-center px-4 bg-white">
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

    {/* Menu Desktop */}
    <div id="nav-menu" className="hidden md:flex space-x-[40px] items-center">
        {/* Navigation et boutons (affichés sur grand écran) */}
        <div className="hidden md:flex space-x-[40px] text-[#292723] text-[14px] items-center">
          <a href="#Apropos" className="hover:text-[#0B99FF] flex items-center">
            <img src="/galleries.svg" alt="Gallery" className="w-5 h-5 mr-2" /> Gallery
          </a>
          <a href="#contact" className="hover:text-[#0B99FF] flex items-center">
            <img src="/creations.svg" alt="Mes créations" className="w-5 h-5 mr-2" /> Mes créations
          </a>
        </div>
      {[
        
        { label: "À propos", links: ["Notre mission", "Notre équipe", "Contactez-nous", "FAQ"] },
      ].map((menu, index) => (
        <div key={index} className="relative group">
          <button
            onClick={() => toggleDropdown(menu.label)}
            className="hover:text-[#0B99FF] flex items-center gap-2"
          >
            {menu.label} {openDropdown === menu.label ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openDropdown === menu.label && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50">
              {menu.links.map((link, i) => (
                <a key={i} href="#" className="font-bold block px-4 py-2 hover:bg-gray-100">
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Bouton Langue */}
      <div id="lang-menu" className="relative">
        <button
          onClick={toggleLangDropdown}
          className="hover:text-[#0B99FF] rounded-[12px] bg-[#FFFFFF] h-[40px] w-[160px] flex justify-center items-center gap-2"
        >
          <span className="flex items-center space-x-2">
            <span>Français</span>
            <img src="/flag-france.svg" alt="Français" className="w-5 h-5" />
          </span>
          {isLangOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {/* Menu Langues */}
        {isLangOpen && (
          <div className="absolute left-0 mt-2 w-[160px] bg-white shadow-lg rounded-md p-2 z-50">
            {languages.map((lang, index) => (
              <button
                key={index}
                className="flex items-center text-[#292723] w-full px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  console.log(`Langue sélectionnée : ${lang.name}`);
                  setIsLangOpen(false);
                }}
              >
                {lang.name}
                <img src={lang.flag} alt={lang.name} className="w-5 h-5 ml-2" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>

    {/* Boutons */}
    <div className="hidden md:flex space-x-4 text-xs items-center">
     
      <button className="text-white px-4 md:px-6 py-2 md:py-3 rounded-[12px] bg-[#0B99FF] text-center">
      Se connecter
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
      <div className="relative w-full min-h-screen">
  {/* Background Gradient */}
  <div className="overflow-hidden md:min-h-[676px] absolute inset-0 bg-gradient-to-t from-[#FAF9F7] to-transparent w-full min-h-screen">

  <div className="max-w-[1076px] md:mt-[136] w-full px-4 md:px-0 mx-auto text-center text-[#292723]">
  

  {/* Image responsive */}
  <div className="mt-[-208] flex justify-center">
    <img 
      src="/home.svg" 
      alt="Home" 
      className="w-full sm:min-w-[898px] md:min-w-[1398px] h-[822]" 
    />
  </div>
  <h1 className="text-2xl text-[#000000] md:text-[40px] md:ml-[-220px] font-medium mt-[-536] md:mt-[-676]">
  Un sourire qui voyage
</h1>
<h2 className="text-2xl text-[#000000] md:text-[40px] mt-6 md:ml-[300px] font-medium">
  ... Un mur qui inspire
</h2>


 

</div>
</div>
</div>


      <main
  className="w-full pt-[50px] min-h-screen bg-[#FAF9F7]">
    <div className="flex justify-center md:mt-[36] mt-[-46]">
      <button className="text-white px-6 py-2 rounded-[12px] bg-[#0B99FF]">
        <strong className="text-[14px]">Commencer à créer</strong>
        <span className="text-2xl ml-2">+</span>
      </button>
    </div>
<section className=" overflow-hidden relative text-center max-h-[756px] mt-[44] py-24">
     
  {/* Vecteur en dégradé */}
  <div className="absolute top-0 left-0 w-[7%] h-[430%] bg-gradient-to-br from-[#0B99FF] to-white right-[-1180px] blur-[80px] transform  -translate-y-1/3 -translate-x-1/3 rotate-[-100deg]"></div>

  {/* Contenu de la section */}
  <h2 className="relative text-3xl font-bold mt-[-56px] text-gray-800 z-10">
  Partagez vos moments, créez des souvenirs <br />inoubliables
  </h2>
  <p className="relative text-gray-600 mt-3 max-w-[750px] mx-auto z-10">
  Dans un monde où nos plus beaux instants restent figés dans nos téléphones, InstaCard <br />vous permet de leur donner une seconde vie. <strong>Avec InstaCard, transformez vos photos en <br />véritables cartes postales et envoyez-les à travers le monde, en quelques clics.</strong>
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
      <h2 className="relative text-2xl md:text-3xl font-bold mt-[20px] md:mt-[-66px] text-gray-800 z-10">
      Concevez en quelques minutes, publiez vos <br />carte postal en quelques secondes.
      </h2>
      <p className="relative text-gray-600 mt-3 max-w-[690px] mx-auto z-10 text-sm md:text-lg">
      Libérez tout le potentiel de <strong>InstaCard</strong> avec des modèles. Découvrez des <br />milliers de design et de catégories 
      </p>
    
    </div>
   {/* Section des blocs */}
<div className="md:mt-[-594px] flex justify-center">
  {/* Container principal */}
  <div className="container mx-auto max-w-[1232px]">
    {/* Blocks container en Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
      
      {/* Block 1 */}
      <div className="w-full max-w-[359px] h-[416px] flex flex-col justify-between">
        <div className="w-full h-[358px] rounded-t-[16px] border border-[#0000001A] bg-[#FFF6F7] flex items-center justify-center">
          <img src="/action1.svg" alt="Image 1" className="max-w-[80%] max-h-[80%] object-contain rounded-t-[16px]" />
        </div>
        <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
          <p className="text-center text-[15px]"><strong>Choisissez</strong> un modèle parmi les <br />designs disponibles ou partez <br />de zéro.</p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="w-full max-w-[359px] h-[416px] flex flex-col justify-between">
        <div className="w-full h-[358px] rounded-t-[16px] border border-[#0000001A] bg-[#FFF6F7] flex items-center justify-center">
          <img src="/action1.svg" alt="Image 1" className="max-w-[80%] max-h-[80%] object-contain rounded-t-[16px]" />
        </div>
        <div className="bg-[#292723] text-white p-3 rounded-b-[16px]  rounded-b-[16px] flex items-center justify-center h-[78px]">
          <p className="text-[15px] text-center"><strong>Choisissez une photo depuis </strong><br />votre galerie ou capturez un <br />instant unique.</p>
        </div>
      </div>

      {/* Block 3 */}
      <div className="w-full max-w-[359px] h-[416px] flex flex-col justify-between">
        <div className="w-full h-[358px] rounded-t-[16px] border border-[#0000001A] bg-[#FFF6F7] flex items-center justify-center">
          <img src="/action3.svg" alt="Image 3" className="max-w-[80%] max-h-[80%] object-contain rounded-t-[16px]" />
        </div>
        <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
          <p className="text-[15px] text-center">
          <strong>Ajoutez un message <br />personnalisé </strong>pour donner vie à <br />votre souvenir.
          </p>
        </div>
      </div>
       {/* Block 3 */}
       <div className="w-full max-w-[359px] h-[416px] flex flex-col justify-between">
        <div className="w-full h-[358px] rounded-t-[16px] border border-[#0000001A] bg-[#FFF6F7] flex items-center justify-center">
          <img src="/action3.svg" alt="Image 3" className="max-w-[80%] max-h-[80%] object-contain rounded-t-[16px]" />
        </div>
        <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
          <p className="text-[15px] text-center">
          <strong>Envoyez votre carte partout <br />dans le monde </strong>grâce à notre <br />réseau d’imprimeurs.
          </p>
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
      Des cartes postales engagées, envoyées <br />collectivement, pour sensibiliser et mobiliser <br /> autour de causes universelles, transformant <br />chaque message en un acte concret et <br />impactant.
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
  
      <span className="text-[13px] font-semibold text-black pl-3">
            +1500 cartes envoyées
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
      <span className="text-[13px] text-black font-semibold pl-3">
            +1500 cartes envoyées
          </span>
    </div>
  </div>
</div>

    
 

<div className="overflow-hidden flex flex-col mt-[-20] max-w-[1232px] md:flex-row w-full bg-[#FAF9F7] mb-12 pb-20 justify-center items-center mx-auto">

  
    {/* Contenu texte */}
    <div className="overflow-hidden w-full md:w-1/2 space-y-6 max-w-[1232px] px-4 justify-center sm:px-8 md:px-12 pt-12 md:pt-24 text-center md:text-left">
     
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
      Bien plus qu’une carte postale : <br /><span className="text-[#0B99FF] font-semibold"> un réseau social unique.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base">
      Découvrez InstaWall, l’espace où vos souvenirs prennent une nouvelle dimension.
      </p>
      <ul className="list-none text-sm sm:text-base text-[#000000] ml-5">
  <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-[#0B99FF] before:text-2xl">
    <span className="text-[#0B99FF] font-semibold">Partagez</span> vos photos de voyage et inspirez la <br /> 
    <span className="text-[#0B99FF] font-semibold"> communauté</span>.
  </li>
  <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-[#0B99FF] before:text-2xl">
    <span className="text-[#0B99FF] font-semibold">Likez, commentez et échangez </span>avec d’autres passionnés.
  </li>
  <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-[#0B99FF] before:text-2xl">
    <span className="text-[#0B99FF] font-semibold">Achetez ou vendez</span> des images pour les <br />transformer en cartes ou tirages d’art.
  </li>
</ul>



      <button className="text-black px-6 py-2 rounded-lg border border-black">Explorez  InstaWall</button>
    </div>


  {/* Image principale */}
  <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
    <Image
      src="/inter.svg"
      alt="Image utilisateur heureux"
      width={648}
      height={805}
      className="rounded-lg w-full max-w-[648px] md:mt-[100] h-auto object-cover"
    />
  </div>
</div>



{/* 500 */}
  <div className="relative flex flex-col mt-[-20] md:flex-row w-full justify-between bg-[#FAF9F7] mb-12 pb-20">
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
        <Image src="/logo.svg" alt="Logo 1" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
        <Image src="/logo2.svg" alt="Logo 2" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
        <Image src="/logo3.svg" alt="Logo 3" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
        <Image src="/phenix.svg" alt="Logo 4" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
        <Image src="/zenithis.svg" alt="Logo 5" width={124} height={40} className="w-[80px] h-[28px] sm:w-[100px] sm:h-[32px]" />
      </div>
    </div>
 </div>



    </main>



<div className="relative flex flex-col mt-[-93] md:flex-row w-full justify-between bg-[#FAF9F7] mb-12 pb-20">


<section className="overflow-hidden w-full relative flex flex-col  bg-[#FAF9F7] text-center mb-12 pb-20 h-[756px] max-w-[1232px] mt-30 py-14 mx-auto">
  
      <h2 className="text-3xl font-bold mt-6 text-gray-800">
        Les gens adorent utiliser InstaCause.
      </h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Des milliers de personnes ont envoyé avec succès des milliers de cartes postales à travers le monde. Et vous ?
      </p>
      
      <div className="relative flex items-center justify-center mt-10">

      <div
        className="flex gap-6 w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
      >
        {reviews.concat(reviews).map((review, index) => (
          <div key={index} className="w-full flex-shrink-0" style={{ flex: `0 0 ${100 / itemsPerView}%` }}>
            <div
              className={`relative w-[90%] mx-auto max-w-[400px] h-[329px] border border-gray-300 bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300
                ${index % 2 === 0 ? "rotate-6" : "-rotate-3"} hover:rotate-0 hover:scale-105`}
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
                      <span key={i} className="text-yellow-500">⭐</span>
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

    </div>

  
   {/* choix modele */}
   <div className="relative h-auto mt-[-216] w-full min-h-[800px] bg-[#01121E] flex flex-col items-center justify-center overflow-hidden px-4">
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
           Rejoignez notre communauté en <br /> pleine expansion
         </h2>
         <div className="flex space-x-4 text-[12px]">
           <button className="text-white px-6 py-2 rounded-lg bg-[#0B99FF]">Commencez à créer +</button>
           <button className="text-white px-6 py-2 rounded-lg border border-white">Visitez Instawall +</button>
         </div>
       </div>
     </div>
   
     {/* Liste des cartes avec boutons de chargement */}
     <div className="flex space-x-[9.53px] animate-scroll">
    {[...cartes, ...cartes].map((carte, index) => ( // Duplication pour un effet infini
      <div
        key={index}
        className="w-[342.99px] h-[268px] bg-white rounded-[19.06px] shadow-lg flex flex-col items-center "
      >
       
       {/* Image principale */}
                  <div className="relative mt-[5] rounded-[14.06px] bg-[#00000033] w-full w-[332.99px] h-[200px]"> 
                   
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
                  <div className="flex items-center mt-4 ml-2 w-full">
                    <Image src={carte.user.image} alt="user" width={40} height={40} className="rounded-full object-cover" />
                    <div className="ml-3">
                      <p className="font-bold">{carte.user.name}</p>
                      <p className="text-gray-500 text-sm">{carte.user.time}</p>
                    </div>
                  </div>
              
       
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



     <div className="relative flex flex-col mt-[-20] md:flex-row w-full justify-between bg-[#FAF9F7] mb-12 pb-20">
    {/* Image de fond */}
    <Image
      src="/backb.svg"
      alt="decoration"
      width={800}
      height={800}
      className="absolute top-0 left-0 hidden sm:block w-[80%] md:w-[1200px] h-auto"
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
  

      {/* Liste des questions */}
      <div className="space-y-2 w-full mt-6 sm:w-[500px]">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
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


  {/* Image principale */}
  <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
    <Image
      src="/userr.svg"
      alt="Image utilisateur heureux"
      width={648}
      height={805}
      className="rounded-lg w-full max-w-[648px] md:mt-[-200] h-auto object-cover"
    />
  </div>
</div>



<div className="relative flex mt-[-25] flex-col md:flex-row w-full justify-between bg-[#FAF9F7] mb-12 pb-20">

    <div className="bg-[#FAF9F7] max-w-[1232px] flex flex-col items-center md:mt-[-30px] mb-[60px] mx-auto">
                    <header className="text-center py-8">
                    <h2 className="text-[#3CE481CC] mt-[63] text-center uppercase font-bold text-[14px] leading-none tracking-normal drop-shadow-[0px_4px_18px_#3CE481CC]">
                        TELECHARGER
                      </h2>

                        <h1 className="text-[24px] mt-[33] font-bold text-[#292723]">
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
                </div>
   

   


    <footer className="w-full relative bg-[#0A131E] mt-[-53] text-gray-300 py-10 px-6 overflow-hidden">
               {/* Image du dégradé centrée */}
      <img
        src="/degrade.svg"
        alt="Dégradé"
        className="absolute top-[54px] left-[-494px]  transform  w-[4599px] h-[525px]"
      />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                <div>
                    <img src="/logo_blanc.svg" alt="logo instacard" className="w-[90px] h-[30px]" />
                    <p className="text-white text-sm">Chaque image a une histoire <br /> à raconter...</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[70px] mt-6 md:mt-0">
                    <div>
                        <h3 className="text-white font-semibold">Liens utiles</h3>
                        <div className="flex flex-col space-y-3 mt-2 text-sm">
                            <a href="#" className="hover:text-gray-400">Fonctionnalités cles</a>
                            <a href="#comment-ca-marche" name="comment-ca-marche" className="hover:text-gray-400">Comment ça marche</a>

                            <a href="#" className="hover:text-gray-400">Soutenir une cause</a>
                            <a href="#" className="hover:text-gray-400">Contactez-nous</a>
                            <a href="#" className="hover:text-gray-400">Politique de confidentialité</a>
                            <a href="#" className="hover:text-gray-400">Conditions d’utilisation</a>
                            <a href="#" className="hover:text-gray-400">Paramètres de cookies</a>
                        </div>
                    </div>
                  
                    <div>
                        <h3 className="text-white font-semibold">À propos</h3>
                        <div className="flex flex-col space-y-3 mt-2 text-sm">
                            <a href="#" className="hover:text-gray-400">Notre mission</a>
                            <a href="#" className="hover:text-gray-400">Notre équipe</a>
                            <a href="#" className="hover:text-gray-400">Contactez-nous</a>
                            <a href="#" className="hover:text-gray-400">Devenir partenaire</a>
                            <a href="#" className="hover:text-gray-400">FAQ</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">Mon compte</h3>
                        <div className="flex flex-col space-y-3 mt-2 text-sm">
                            <a href="#" className="hover:text-gray-400">Connexion/Inscription</a>
                            {/* Bouton Langue */}
                              
                              <div id="lang-menu" className="relative">
                                <button
                                  onClick={toggleLangDropdown}
                                  className="text-[#292723] mt-[10] rounded-[9px] bg-[#FFFFFF] h-[35px] w-[140px]  flex justify-center items-center gap-2"
                                >
                                  <span className="flex items-center space-x-2">
                                    
                                    <span>Français</span>
                                    <img src="/flag-france.svg" alt="Français" className="w-5 h-5" />
                                  </span>
                                  {isLangOpen ? <FaChevronUp /> : <FaChevronDown />}
                                </button>

                                {/* Menu Langues */}
                                {isLangOpen && (
                                  <div className="absolute left-0 mt-2 w-[160px] bg-white shadow-lg rounded-md p-2 z-50">
                                    {languages.map((lang, index) => (
                                    <button
                                    key={index}
                                    className="flex items-center text-[#292723] w-full px-4 py-2 hover:bg-gray-100"
                                    onClick={() => {
                                      console.log(`Langue sélectionnée : ${lang.name}`);
                                      setIsLangOpen(false);
                                    }}
                                  >
                                    {lang.name}
                                    <img src={lang.flag} alt={lang.name} className="w-5 h-5 ml-2" />
                                  </button>
                                  
                                    ))}
                                  </div>
                                )}
                              </div>
                       
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">Paiement sécurisé</h3>
                        <div className="flex flex-col h-full">

                        
                        {/* Contenu supérieur */}
                        <div className="mt-2">
                          <a href="#"><img src="/payment-methods 1.svg"alt="Icon"className="cursor-pointer hover:text-gray-400 w-[132px] h-[43px]"/></a>
                        </div>
                        
                        {/* DECALE en bas  */}
                        <div className="mt-[63] flex flex-col items-center">
                          <a href="#" className="text-white font-semibold">Suivez-nous</a>
                          <div className="flex justify-center space-x-5 text-lg mt-2">
                            <a href="#"><img src="/icon1.svg"alt="Icon"className="cursor-pointer hover:text-gray-400 w-6 h-6"/></a>
                            <a href="#"><img src="/icon2.svg"alt="Icon"className="cursor-pointer hover:text-gray-400 w-6 h-6"/></a>
                            <a href="#"><img src="/icon3.svg"alt="Icon"className="cursor-pointer hover:text-gray-400 w-6 h-6"/></a>
                            <a href="#"><img src="/icon4.svg"alt="Icon"className="cursor-pointer hover:text-gray-400 w-6 h-6"/></a>
                          </div>
                        </div>
                      </div>

                    </div>
                   
                </div>
            </div>
            
        </footer>

   

        

    </div>
  );
}

