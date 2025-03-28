'use client';


import { FaImages, FaPaintBrush, FaSearch, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart, Defs, LinearGradient, Stop } from "recharts";

const data = [
  { name: '5000', value: 5000 },
  { name: '10 000', value: 10000 },
  { name: '20 000', value: 20000 },
  { name: '50 000', value: 50000 },
  { name: '67 067', value: 67067 },
];



const cartes = [
  {
    image: "/postal1.svg",

  },
  {
    image: "/postal2.svg",

  },
  {
    image: "/postal3.svg",

  },
  {
    image: "/postal4.svg",

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  const [loadingStep, setLoadingStep] = useState(0);

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
    
<div className="overflow-hidden bg-[#E7F9FF] w-full min-h-screen">
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
    <div id="nav-menu" className="hidden md:flex space-x-[40px] items-center">
      {[
        { label: "Accueil", links: ["Fonctionnalités clés", "Comment ça marche", "À propos", "Contact"] },
        { label: "Liste des causes", links: ["Education", "Humanitaire", "Politique", "Environnement", "Artiste", "Business", "Autres"] },
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
      <button className="text-white px-4 md:px-6 py-2 md:py-3 rounded-[12px] bg-[#000000] text-center">
        Soutenir une cause
      </button>
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
      <div className="relative w-full min-h-screen">


  <div className="overflow-hidden max-h-[236px] absolute inset-0 bg-gradient-to-t from-[#FAF9F7] to-transparent w-full min-h-screen"></div>
  <div className="max-w-[1536px] md:mt-[60] w-full mx-auto px-4">
      {/* Conteneur principal : colonne sur mobile, ligne sur desktop */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start w-full md:h-[220px] md:w-[1220px] mx-auto md:mt-[-12.56px] gap-6">
        
        {/* IMAGE & TEXTE (Largeur augmentée pour desktop) */}
        <div className="relative w-full md:w-[1820px] md:h-[407px] rounded-[36px] bg-gradient-to-t from-black">
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
            <div className="flex items-center mt-[-11] justify-center md:justify-start gap-1">
              <img src="/user.svg" alt="image" width={48} height={48} className="rounded-full" />
              <p className="font-lufga font-normal text-[16px] text-white">
              Nom d’affichage
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-lufga font-semibold text-[32px] md:text-[48px] leading-[150%] text-white">
              +67 067
            </p>
            <p className="font-lufga mt-[-20] font-normal text-[14px] md:text-[16px] leading-[150%] text-white">
            Cartes postales envoyées
            </p>

            <button className="mt-[10] w-full min-h-[48px] bg-[#7C16F5] text-[14px]  text-white rounded-[12px] py-3 px-6">
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

</div>


      <main
  className="w-full pt-[50px] min-h-screen bg-[#FAF9F7]">
  
{/* OJECTIF */}
<div className="w-full max-w-[1232px] h-auto md:mt-[-14.16px] mx-auto flex flex-wrap gap-4 justify-center md:flex-row">
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
        className="w-full h-[389.02px] md:mt-[-34] rounded-[32px] bg-cover bg-center"
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
  <div className="w-full md:w-[400px] h-auto md:h-[323px] rounded-[32px] border border-[#0000001F] p-6 flex flex-col gap-6 bg-white">
   
    <p className="text-[16px] font-lufga font-normal leading-[150%] tracking-[-0.5px] text-[#000000]">
      <strong>Notre Terre Pleure</strong> est un collectif de citoyens engagés, unis par une passion commune : la protection de l'environnement. Utilisateurs d'Insta Cause, nous avons créé cette initiative pour donner une voix aux océans, trop souvent oubliés. Nous croyons en la force de l'action collective et en l'impact des messages personnalisés pour sensibiliser et mobiliser. Ensemble, nous voulons construire un avenir où les océans seront respectés et préservés pour les générations futures.
    </p>
  </div>
</div>



{/* destination cause*/}

<div className="w-full max-w-[1232px] md:mt-[154] mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-6 bg-white rounded-[32px] border border-[#0000001F]">
      
      {/* Sous-div 1 */}
      <div className="flex flex-col gap-6 w-full md:w-[580px]">
        
        {/* Bloc 1 */}
        <div className="p-6 rounded-lg w-full">
          <h2 className="text-[24px] font-medium tracking-[-1px] text-[#292723]">
          A qui est destiné cette cause ?
          </h2>
          <p className="text-[16px] mt-[23px] font-normal leading-[150%] tracking-[-0.5px] text-[#000000]">
          Vos messages de soutien voyagent bien au-delà des écrans. Chaque carte que vous envoyez est imprimée et acheminée directement vers les bénéficiaires, que ce soit une personne en difficulté, une famille, une association ou un projet solidaire. Découvrez où votre message fera la différence aujourd’hui : <br /><br /> 📍 Adresse de destination : <strong> Donnée dynamique : Adresse fournie lors de la configuration de la cause</strong>
          </p>
        </div>

        {/* Bloc 2 */}
        <div className="p-6 rounded-lg mt-[-53px] w-full">
          <h2 className="text-[24px] font-medium tracking-[-1px] text-[#292723]">
          Dans quel but ?
          </h2>
          <p className="text-[16px] mt-[23px] font-normal leading-[150%] tracking-[-0.5px] text-[#000000]">
          Chaque carte envoyée porte un message fort et sincère. Votre soutien a un impact direct sur cette cause, en apportant un espoir ou en contribuant à un changement concret. 
          </p>
        </div>
        <div className="p-6 mt-[-43px] rounded-lg w-full">
        {/* Bouton */}
        <button className="w-[220px] min-h-[48px] rounded-[12px] text-[14px] border border-[#FFFFFF] bg-[#7C16F5] text-white font-medium px-6 py-3">
        Participer à cette cause
        </button>
        </div>
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
      Faites entendre votre voix et libérez tout le potentiel d’ <strong>InstaCard</strong>. <br />Découvrez des milliers de design et de catégories 
      </p>
    
    </div>
   {/* Section des blocs */}
<div className="md:mt-[-624px] flex justify-center">
  {/* Container principal */}
  <div className="container mx-auto max-w-[1256px]">
    {/* Blocks container en Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      
      {/* Block 1 */}
      <div className="w-full max-w-[359px] h-[416px] flex flex-col justify-between">
        <div className="w-full h-[358px] rounded-t-[16px] border border-[#0000001A] bg-[#FFF6F7] flex items-center justify-center">
          <img src="/action1.svg" alt="Image 1" className="max-w-[80%] max-h-[80%] object-contain rounded-t-[16px]" />
        </div>
        <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
          <p className="text-sm text-center">Choisissez un modèle de carte postale parmi <br /> les design proposés ou partez de zéro</p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="w-full max-w-[359px] h-[416px] flex flex-col justify-between">
        <div className="w-full h-[358px] rounded-t-[16px] border border-[#0000001A] bg-[#FFF6F7] flex items-center justify-center">
          <img src="/action2.svg" alt="Image 2" className="max-w-[80%] max-h-[80%] object-contain rounded-t-[16px]" />
        </div>
        <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
          <p className="text-sm text-center">Personnalisez votre message, apportez votre <br /> voix a cette cause</p>
        </div>
      </div>

      {/* Block 3 */}
      <div className="w-full max-w-[359px] h-[416px] flex flex-col justify-between">
        <div className="w-full h-[358px] rounded-t-[16px] border border-[#0000001A] bg-[#FFF6F7] flex items-center justify-center">
          <img src="/action3.svg" alt="Image 3" className="max-w-[80%] max-h-[80%] object-contain rounded-t-[16px]" />
        </div>
        <div className="bg-[#292723] text-white p-3 rounded-b-[16px] flex items-center justify-center h-[78px]">
          <p className="text-sm text-center">
          Nous nous chargeons du reste et votre carte <br /> est livrer à la bonne adresse
          </p>
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
      Choisissez un modèle de carte <br className="hidden sm:block" /> pour soutenir <span className="text-[#0B99FF] font-semibold"> Nom de la cause</span>
      </h2>
      <p className="text-[#000000] text-[14px] mt-4">
      Des milliers de personnes ont envoyé avec succès des milliers de cartes postales à travers le monde.  
      et vous ?
    </p>
    
    </div>

    {/* Bloc Droite */}
    <div className="mt-10 lg:mt-0 flex flex-col items-center lg:items-start space-y-4">
    <div className="flex -space-x-3">
  {["/carte.svg", "/carte2.svg", "/carte3.svg", "/carte4.svg", "/carte.svg"].map((src, index) => (
    <div key={index} className="w-12 h-12 bg-white rounded-full border border-white">
      <Image src={src} alt={`Carte ${index + 1}`} width={48} height={48} className="rounded-full" />
    </div>
  ))}
</div>

      <h2 className="text-[#000000] text-[18px] font-bold text-center lg:text-left">
      Aportez votre voix a celle des milliers <br /> d’autres personnes
      </h2>
      <div className="flex space-x-4 text-[12px]">
        <button className="text-white px-6 py-2 rounded-lg bg-[#0B99FF]">Commencez à créer +</button>
       
      </div>
    </div>
  </div>
  <div className="flex justify-between max-w-[1232px] items-center w-full mt-[76] flex-col sm:flex-row">
      <div className="w-full max-w-[1553] mt-[-48] flex-col sm:flex-row">
        <h2 className="text-2xl font-semibold text-center justify-center sm:text-left">
       
        </h2> </div>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Image src="/arrowL.svg" alt="Previous" width={40} height={40} className="cursor-pointer rotate-180" />
          <Image src="/arrowL.svg" alt="Next" width={40} height={40} className="cursor-pointer" />
        </div>
      </div>
  {/* Liste des cartes*/}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full max-w-[1392px] px-4">
    {cartes.map((carte, index) => (
      <div key={index} className="bg-white rounded-[19px] w-full max-w-[342px] shadow-md flex flex-col items-center p-1 relative">
        {/* Image principale */}
        <div className="relative w-full h-52"> 
          <Image src={carte.image} alt={`Carte ${index + 1}`} layout="fill" objectFit="cover" className="rounded-[19px]" />
        </div>

       
      </div>
    ))}
  </div>
</div>



{/* impact cause*/}

<div className="relative w-full mt-[123px] mt-[70] md:w-[1318px] h-[568px] overflow-hidden">
  {/* Image de fond avec gradient */}
  <div className="absolute inset-0">
    <img
      src="/oceane.png"
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
    <div className="w-full md:w-[737px] h-auto md:h-[402px] flex items-center justify-center p-6 shadow-lg mt-6 md:mt-0">
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
          {/* Définition du dégradé */}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#0B99FF00" />
              <stop offset="100%" stopColor="#0B99FF3B" />
            </linearGradient>
          </defs>

          {/* Grille optionnelle */}
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />

          {/* Axe X et Y */}
          <XAxis dataKey="name" tick={{ fill: "#ffffff", fontSize: 14, fontWeight: "bold" }} />
         

          {/* Courbe avec dégradé */}
          <Area type="monotone" dataKey="value" stroke="#ffffff" strokeWidth={3} fill="url(#colorGradient)" />
          <Line type="monotone" dataKey="value" stroke="#0B99FF00" strokeWidth={2} dot={{ fill: "url(#colorGradient)", r: 6 }} />

          {/* Affichage des valeurs sur le graphe */}
          {data.map((entry, index) => (
            <foreignObject key={index} x={index * 140 - 20} y={350 - entry.value / 250} width="60" height="32">
              <div className="bg-white text-[#0B99FF] text-[18px] font-medium rounded-[32px] px-2 py-1 text-center shadow-md">
                {entry.value}
              </div>
            </foreignObject>
          ))}

          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>


  </div><div className="w-full md:w-[737px] h-auto md:h-[402px] flex items-center justify-center p-6 shadow-lg mt-6 md:mt-0"> 
  <div className="w-full md:w-[737px] h-auto md:h-[402px] flex items-center justify-center p-6 shadow-lg mt-6 md:mt-0"> 
  <ResponsiveContainer width="100%" height={350}>
    <AreaChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
      {/* Définition du dégradé */}
      <defs>
        <linearGradient id="colorGradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="##0B99FF" />
          <stop offset="100%" stopColor="#0B99FF3B" />
        </linearGradient>
      </defs>

      {/* Grille optionnelle */}
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />

      {/* Axe X et Y */}
      <XAxis dataKey="name" tick={{ fill: "#ffffff", fontSize: 14, fontWeight: "bold" }} />

      {/* Courbe avec dégradé */}
      <Area 
        type="monotone" 
        dataKey="value" 
        stroke="#0B99FF" 
        strokeWidth={3} 
        fill="url(#colorGradient)" 
      />
      <Line 
        type="monotone" 
        dataKey="value" 
        stroke="#0B99FF00" 
        strokeWidth={2} 
        dot={{ fill: "url(#colorGradient)", r: 6 }} 
      />

      {/* Affichage des valeurs sur le graphe */}
      {data.map((entry, index) => (
        <foreignObject key={index} x={index * 140 - 20} y={350 - entry.value / 250} width="60" height="32">
          <div className="bg-white text-[#0B99FF] text-[18px] font-medium rounded-[32px] px-2 py-1 text-center shadow-md">
            {entry.value}
          </div>
        </foreignObject>
      ))}

      <Tooltip />
    </AreaChart>
  </ResponsiveContainer>
</div>
</div>
</div>





    </main>
 



<div className="relative flex mt-[-25] flex-col md:flex-row w-full justify-between bg-[#FAF9F7] mb-12 pb-20">

    <div className="bg-[#FAF9F7] max-w-[1232px] flex flex-col items-center md:mt-[10px] mb-[60px] mx-auto">
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

