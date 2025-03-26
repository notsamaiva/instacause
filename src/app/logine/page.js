import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
export default function Login() {
  return (
    <div className="flex min-h-screen overflow-hidden">
    {/* Partie gauche : Formulaire */}
    <div className="w-full md:w-[458px] h-auto md:h-[686.75px] mt-10 md:mt-[60px] flex flex-col justify-center items-center p-6 md:p-10 gap-6 md:gap-[53px]">
        {/* Titres */}
        <div className="w-full max-w-[458px] text-center">
          <h2 className="font-bold text-[#292723] text-2xl md:text-[30px] leading-[140%] tracking-[-1px]">
            connexion
          </h2>
        </div>

        {/* Formulaire */}
        <div className="w-full max-w-xs md:max-w-md">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2aa6ff]"
          />
          <div className="relative mt-3">
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2aa6ff]"
            />
            <img
              src="/images/eye.svg"
              alt="Afficher le mot de passe"
              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
          </div>
          <div className="w-full flex justify-end mt-2">
            <a href="#" className="text-[#003E7C] text-xs underline font-medium">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Bouton Connexion */}
          <button className="w-full bg-[#d8dbe3] text-[#6f7580] p-2 rounded-md mt-4 hover:bg-[#c1c7d1] font-bold text-sm">
            Se connecter
          </button>

          {/* Séparateur "ou" */}
          <div className="flex items-center justify-center mt-4">
            <div className="flex-1 h-px bg-[#ECEAE1]"></div>
            <span className="px-4 text-sm text-gray-600">ou</span>
            <div className="flex-1 h-px bg-[#ECEAE1]"></div>
          </div>

          <button className="w-full flex items-center justify-center bg-white text-black p-2 rounded-md mt-4 border border-black hover:bg-gray-100">
            <img src="/images/google-logo.svg" alt="Google" className="w-5 h-5 mr-2" />
            Continuer avec Google
          </button>
        </div>

      </div>

      {/* Partie droite : Image + Texte */}
      <div className="hidden md:flex md:w-[962px] top-[10px] h-auto md:h-[680px] bg-[#040108] text-white flex-col justify-center items-center relative p-6 border-2 border-white rounded-2xl ml-[190]">

  {/* Contenu ici */}


      <div className="relative w-[31%] h-[300px] top-[20px]  -right-10 bg-[#a12b2e] border-2 border-white rounded-[30px] p-6">
  {/* Image superposée au-dessus du bloc */}
  {/* IMAGE1 */}
<div className="absolute -top--5 -left-40 w-[230px] h-[250px]">
    <Image
      src="/images/back1.png"
      alt="Image 1"
      width={230}
      height={180}
      className="h-[260px] object-cover"
    />
</div>

{/* IMAGE2 */}
<div className="absolute -top-2 -left-8 w-[50px] h-[50px]">
    <Image
      src="/images/back5.png"
      alt="Image 1"
      width={50}
      height={50}
      className="h-[50px] object-cover"
    />
</div>

{/* IMAGE3 */}
<div className="absolute -top--5 -right-12 w-[100px] h-[100px]">
    <Image
      src="/images/back4.png"
      alt="Image 1"
      width={100}
      height={100}
    />
</div>

{/* IMAGE4 */}
<div className="absolute -top-6 -left-5 w-[300px] h-[290px] relative">
  {/* Fond noir dégradé */}
  <div className="absolute bottom-[-60px] w-full h-[40%] bg-gradient-to-t from-black to-transparent"></div>

  {/* Image */}
  <Image
    src="/images/back2.png"
    alt="Image 1"
    width={290}
    height={300}
    className="h-[350px] w-[300px] object-cover"
  />
</div>

{/* IMAGE5*/}
<div className="absolute top-[240px] left-[140px] w-[80px] h-[80px]">
    <Image
      src="/images/back3.png"
      alt="Image 1"
      width={80}
      height={80}
    />
</div>
<div className="absolute top-[295px] left-[170px] w-[200px] h-[200px]">
    <Image
      src="/images/back6.png"
      alt="Image 1"
      width={200}
      height={200}
    />
</div>





</div>


{/* Grand conteneur avec plus de marge en haut */}
<div className="w-[994px] h-[278px] top-[714.52px] left-[49px] flex flex-col gap-[46px] mt-4 mx-auto">
  {/* Grand titre */}
  <h2 
    className="w-[703.57px] h-[116px] font-[Lufga] font-semibold text-[30px] leading-[145%] tracking-[-0.09px] text-white text-center flex items-center justify-center mx-auto mt-[91]"
  >
    Vos souvenirs, transformés en cartes <br />
    postales uniques.
  </h2>

  {/* Blocs de texte */}
  <div 
    className="w-full flex flex-wrap md:flex-nowrap justify-between items-start gap-[46px] mt-[-11]"
  >
    {/* Bloc 1 : Personnalisation infinie */}
    <div className="flex flex-col items-start w-[289px]">
      <h3 className="w-full h-[35px] font-[600] text-[18px] leading-[145%] tracking-[-0.09px] text-white text-left">
        Personnalisation infinie
      </h3>
      <p className="w-full h-[69px] font-[400] text-[12px] leading-[145%] tracking-[-0.09px] text-gray-400 text-left">
        Ajoutez vos photos, vos textes, vos<br />
        stickers et choisissez parmi une large<br />
        gamme de modèles.
      </p>
    </div>

    {/* Bloc 2 : Envoi facile et rapide */}
    <div className="flex flex-col items-start w-[289px]">
      <h3 className="w-full h-[35px] font-[600] text-[18px] leading-[145%] tracking-[-0.09px] text-white text-left">
        Envoi facile et rapide
      </h3>
      <p className="w-full h-[69px] font-[400] text-[12px] leading-[145%] tracking-[-0.09px] text-gray-400 text-left">
        Instacard s'occupe de l'impression et<br />
        de l'envoi de vos cartes postales,<br />
        partout dans le monde.
      </p>
    </div>

    {/* Bloc 3 : Prix abordables */}
    <div className="flex flex-col items-start w-[289px]">
      <h3 className="w-full h-[35px] font-[600] text-[18px] leading-[145%] tracking-[-0.09px] text-white text-left">
        Prix abordables
      </h3>
      <p className="w-full h-[69px] font-[400] text-[12px] leading-[145%] tracking-[-0.09px] text-gray-400 text-left">
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
