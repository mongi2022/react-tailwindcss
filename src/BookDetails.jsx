import React from "react";
import IconHome from "./modules/IconHome";
import IconSearch from "./modules/IconSearch";
import Line1 from "./modules/Line1";
import Polygon1 from "./modules/Polygon1";
import IconProfileCircled from "./modules/IconProfileCircled";
import Vector from "./modules/Vector";
import Vector1 from "./modules/Vector1";
import Vector2 from "./modules/Vector2";
import Vector3 from "./modules/Vector3";
import Line3 from "./modules/Line3";
import IconMenu from "./modules/IconMenu";
import IconViewGrid from "./modules/IconViewGrid";
import Ellipse2 from "./modules/Ellipse2";
import IconNavArrowLeft from "./modules/IconNavArrowLeft";
import Ellipse1 from "./modules/Ellipse1";
import rectangle5 from "./assets/rectangle5.jpeg";

const BookDetails = (props) => {
  return (
    <div
      className="box-border block w-[1440px] h-[1024px] relative overflow-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <div
        className="w-[312px] h-[1024px] absolute top-0 left-0 rounded-tr-[57px] bg-[#81807e]"
        style={{
          boxShadow: "0px 4px 6px 0 rgba(0,0,0,0.3)",
        }}
      />
      <p className="whitespace-pre-wrap absolute top-[277px] left-[45px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] font-bold italic text-left text-white">
        Initiation Numérologie
      </p>
      <p className="whitespace-pre-wrap absolute top-[316px] left-[45px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] italic text-left text-white">
        Initiation Tarot de Mars
      </p>
      <p className="whitespace-pre-wrap absolute top-[358px] left-[45px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] italic text-left text-white">
        Culture Générale
      </p>
      <p className="whitespace-pre-wrap absolute top-[399px] left-[45px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] italic text-left text-white">
        Initiation Astrologie
      </p>
      <div className="w-[304px] h-[52px] absolute top-[197px] left-4 rounded-tl-[25px] rounded-bl-[25px] bg-[#f3f3f3]" />
      <div className="w-[226px] h-[46px] absolute top-[782px] left-[46px] rounded-[40px] bg-[#253234]" />
      <p className="whitespace-pre-wrap absolute top-[38px] left-[93px] font-['MonteCarlo'] text-4xl leading-[normal] text-left text-white">
        Bibliothèque
      </p>
      <IconHome />
      <div className="w-[464px] h-11 absolute top-12 left-96 rounded-[20px] bg-[#e7eaec]" />
      <IconSearch />
      <p className="whitespace-pre-wrap absolute top-[57px] left-[454px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] italic text-left text-[#969595]">
        Recherche
      </p>
      <p className="whitespace-pre-wrap absolute top-[50px] left-[1263px] font-['Phetsarath'] text-xl leading-[normal] text-left text-[#81807e]">
        Fr
      </p>
      <Line1 />
      <Polygon1 />
      <IconProfileCircled />
      <p className="whitespace-pre-wrap absolute top-[212px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-[#897647]">
        Support Divinatoirs
      </p>
      <p className="whitespace-pre-wrap absolute top-[200px] left-[429px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        Support Divinatoirs
      </p>
      <p className="whitespace-pre-wrap absolute top-[473px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Formation Initiale
      </p>
      <p className="whitespace-pre-wrap absolute top-[537px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Psychologie Humaine
      </p>
      <p className="whitespace-pre-wrap absolute top-[598px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Divers
      </p>
      <Vector />
      <Vector1 />
      <Vector2 />
      <Vector3 />
      <Line3 />
      <p className="whitespace-pre-wrap absolute top-[790px] left-[137px] font-['Poppins'] text-xl leading-[normal] tracking-wider text-left text-[#fbfbfb]">
        Quiz
      </p>
      <IconMenu />
      <IconViewGrid />
      <Ellipse2 />
      <div
        className="w-[187px] h-[42px] absolute top-[586px] left-[764px] rounded-[20px] bg-[#0a6978]"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
        }}
      />
      <p className="whitespace-pre-wrap absolute top-[591px] left-[794px] w-[139px] h-[27px] font-['Poppins'] text-xl leading-[normal] tracking-wider text-left capitalize text-white">
        lire le livre
      </p>
      <div className="w-[168px] h-[219px] absolute top-[321px] left-[452px] bg-transparent" />
      <img
        className="w-[246px] h-[348px] absolute top-[316px] left-[431px] object-cover"
        style={{
          boxShadow: "0px 4px 5px 0 rgba(0,0,0,0.3)",
        }}
        src={rectangle5}
      />
      <p className="whitespace-pre-wrap absolute top-[326px] left-[764px] w-[541px] h-8 font-['Poppins'] text-2xl leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-[#0a6978]">
        numérologie les clés de votre destinée
      </p>
      <p className="whitespace-pre-wrap absolute top-[360px] left-[764px] w-[343px] h-[33px] font-['Poppins'] text-2xl leading-[normal] tracking-[0.03em] italic text-left capitalize text-[#585757]">
        Nom d’auteur
      </p>
      <p className="whitespace-pre-wrap absolute top-[419px] left-[765px] w-[559px] h-[130px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] italic text-justify capitalize text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <IconNavArrowLeft />
      <Ellipse1 />
    </div>
  );
};

export default BookDetails;