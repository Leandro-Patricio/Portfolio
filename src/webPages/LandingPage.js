import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Parte1_Ola from "../components/Parte1_Ola/Parte1_Ola";
import Sobre from "../components/Sobre/Sobre";
import Header from "../components/Header/Header";
import Parte3_AreaDeInteresse from "../components/Parte3_AreaDeInteresse/Parte3_AreaDeInteresse";
import fundoparte1 from "../fig/fundo_parte1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../components/Parte1_Ola/Parte1_Ola.css";
import Maintenance from "../fig/maintenance.png";

const LandingPage = () => {
  Aos.init();

  return (
    <div>
      <div className="imagemDeFundo">
        <Header />

        <Parte1_Ola />
      </div>

      <Sobre />
      <Parte3_AreaDeInteresse />

      <div name="formacaoAcademica" id="formacaoAcademica">
        Formação acadêmica
      </div>
      <div name="projetos" id="projetos">
        Projetos
      </div>
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
