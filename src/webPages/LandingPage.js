import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Parte1_Ola from "../components/Parte1_Ola/Parte1_Ola";
import Parte2_Sobre from "../components/Parte2_Sobre/Parte2_Sobre";
import Header from "../components/Header/Header";
import Parte3_AreaDeInteresse from "../components/Parte3_Habilidades/Parte3_Habilidades";

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
      <div name="entreEmContato" id="entreEmContato">
        Entre em contato
      </div>
      <div name="finalDaPagina" id="finalDaPagina">
        to aqui embaixo
      </div>

      <div style={{ textAlign: "center" }}>
        <img src={Maintenance} atl="Manutenção" />
        Está página está em manutenção
        <img src={Maintenance} atl="Manutenção" />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
