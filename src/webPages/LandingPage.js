import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Parte1_Ola from "../components/Parte1_Ola/Parte1_Ola";
import Parte2_Sobre from "../components/Parte2_Sobre/Parte2_Sobre";
import Header from "../components/Header/Header";
import Parte3_AreaDeInteresse from "../components/Parte3_Habilidades/Parte3_Habilidades";
import Parte5_EntreEmContato from "../components/Parte5_EntreEmContato/Parte5_EntreEmContato";

import Aos from "aos";
import "aos/dist/aos.css";
import "../components/Parte1_Ola/Parte1_Ola.css";
import Maintenance from "../fig/maintenance.png";
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

      <Footer />
    </div>
  );
};

export default LandingPage;
