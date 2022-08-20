import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer";
import Inicio from "../components/Inicio";
import Sobre from "../components/Sobre/Sobre";

import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  Aos.init();

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://images.squarespace-cdn.com/content/v1/5b43ad1f25bf025e1bd093da/1539520647833-376J0I14UWJIECVHRRJY/GOPR2367.JPG)",
          /*           "url(https://cff2.earth.com/uploads/2005/09/27011951/this-bottom-dwelling-fish-usually-moves-across-the-ocean-floor-crawling-on-a-pair-of-modified-pectoral-fins.jpg)", */
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "inherit",
          top: "0",
        }}
      >
        <Header />

        <Link to="/diario">
          <button>Clique aqui para ir ao diário</button>
        </Link>

        <Inicio />
      </div>
      <Sobre />
      <div name="sobre" id="sobre">
        Sobre
      </div>
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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default LandingPage;
