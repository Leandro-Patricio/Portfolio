import React from "react";
import Parte1_Ola from "../components/Parte1_Ola/Parte1_Ola";
import Parte2_Sobre from "../components/Parte2_Sobre/Parte2_Sobre";
import Header from "../components/Header/Header";
import Parte3_AreaDeInteresse from "../components/Parte3_Habilidades/Parte3_Habilidades";
import Parte5_EntreEmContato from "../components/Parte5_EntreEmContato/Parte5_EntreEmContato";
import Parte6_Footer from "../components/Parte6_Footer/Parte6_Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import "../components/Parte1_Ola/Parte1_Ola.css";
import Parte4_Projetos from "../components/Parte4_Projetos/Parte4_Projetos";

const LandingPage = () => {
  Aos.init();

  return (
    <div>
      <div className="imagemDeFundo">
        <Header />

        <Parte1_Ola />
      </div>

      <Parte2_Sobre />
      <Parte3_AreaDeInteresse />

      <Parte4_Projetos />
      <Parte5_EntreEmContato />
      <Parte6_Footer />
    </div>
  );
};

export default LandingPage;
