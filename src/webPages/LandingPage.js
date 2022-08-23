import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Parte1_Ola from "../components/Parte1_Ola/Parte1_Ola";
import Sobre from "../components/Sobre/Sobre";
import Header from "../components/Header/Header";
import Parte3_AreaDeInteresse from "../components/Parte3_AreaDeInteresse/Parte3_AreaDeInteresse";

import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  Aos.init();

  return (
    <div>
      <Header />
      <div
        style={{
          position: "fixed",
          zIndex: "-1",
          left: "-200px",
          top: "-400px",
        }}
      >
        <img
          /*           https://cff2.earth.com/uploads/2005/09/27011951/this-bottom-dwelling-fish-usually-moves-across-the-ocean-floor-crawling-on-a-pair-of-modified-pectoral-fins.jpg */
          /* https://images.squarespace-cdn.com/content/v1/5b43ad1f25bf025e1bd093da/1539520647833-376J0I14UWJIECVHRRJY/GOPR2367.JPG         */
          src="https://cff2.earth.com/uploads/2005/09/27011951/this-bottom-dwelling-fish-usually-moves-across-the-ocean-floor-crawling-on-a-pair-of-modified-pectoral-fins.jpg"
          alt="imagem de fundo"
          style={{}}
        />
      </div>
      {/*       <Link to="/diario">
        <button>Clique aqui para ir ao diário</button>
      </Link> */}
      <Parte1_Ola />
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

      <Footer />
    </div>
  );
};

export default LandingPage;
