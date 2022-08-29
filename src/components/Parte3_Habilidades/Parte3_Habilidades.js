import CaixaHabilidade from "./CaixaHabilidade/CaixaHabilidade";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Parte3_Habilidades.css";
import imgProgramador from "../../fig/programador_undraw_resize.svg";
import imgOceanografia from "../../fig/cyborg-bottom-of-the-sea_resize.png";
import javascript from "../../fig/javascript.png";
import html from "../../fig/html.png";
import css from "../../fig/css.png";
import react from "../../fig/react.png";
import node from "../../fig/node.png";
import api from "../../fig/api.png";
import PostegreSQL from "../../fig/PostegreSQL.png";
import git from "../../fig/git.png";
import gitHub from "../../fig/gitHub.png";

import coletaDeDados from "../../fig/coletaDeDados.jpg";
import estatistica from "../../fig/estatistica.png";
import machineLearning from "../../fig/machineLearning.png";
import mestrado from "../../fig/mestrado.jpg";
import microscopia from "../../fig/microscopia.png";
import oceanografiaPesqueira from "../../fig/oceanografiaPesqueira.png";
import R from "../../fig/R.png";
import reproducaoDePeixe from "../../fig/reproducaoDePeixe.jpg";
import mapa from "../../fig/mapa.png";

import { useState } from "react";

const Parte3_AreaDeInteresse = () => {
  Aos.init();
  const [isWebDevOn, setIsWebDevOn] = useState(true);
  const [isOceanographyOn, setIsOceanographyOn] = useState(false);

  const entrarHabilidadesWebDev = () => {
    if (!isWebDevOn) {
      setIsWebDevOn(!isWebDevOn);
      document.getElementById("devWeb").classList.remove("saindo");
      document.getElementById("devWeb").classList.add("entrando");
    } else {
      document.getElementById("devWeb").classList.remove("entrando");
      document.getElementById("devWeb").classList.add("saindo");
      setIsWebDevOn(!isWebDevOn);
    }
  };
  const entrarHabilidadesOceanografia = () => {
    if (!isOceanographyOn) {
      setIsOceanographyOn(!isOceanographyOn);
      document.getElementById("oceanografia").classList.remove("saindo");
      document.getElementById("oceanografia").classList.add("entrando");
    } else {
      document.getElementById("oceanografia").classList.remove("entrando");
      document.getElementById("oceanografia").classList.add("saindo");
      setIsOceanographyOn(!isOceanographyOn);
    }
  };

  return (
    <section className="sectionHabilidade">
      <h1 className="subTitulo" data-aos="fade-down" data-aos-duration="3000">
        Habilidades
      </h1>
      <div className="containerInteressePrincipal">
        <div
          className="interessePrincipal"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          onClick={() => entrarHabilidadesWebDev()}
          name="habilidades"
          id="habilidades"
        >
          <h2 style={{ textAlign: "center" }}> Desenvolvedor Web</h2>
          <img
            alt="programador"
            src={imgProgramador}
            className="imagemInteressePrincipal imagemProgramador"
          />
        </div>

        <div
          className="interessePrincipal"
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          onClick={() => entrarHabilidadesOceanografia()}
        >
          <h2> Oceanografia</h2>
          <img
            alt="oceanografia"
            src={imgOceanografia}
            style={{ paddingTop: "-50px" }}
            className="imagemInteressePrincipal imagemOceanografia"
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="containerInteresseIndividual entrando" id="devWeb">
          <CaixaHabilidade linguagem="JavaScript" imagem={javascript} />
          <CaixaHabilidade linguagem="HTML" imagem={html} />
          <CaixaHabilidade linguagem="CSS" imagem={css} />
          <CaixaHabilidade linguagem="React.JS" imagem={react} />

          <CaixaHabilidade linguagem="Node.JS" imagem={node} />
          <CaixaHabilidade linguagem="Api REST" imagem={api} />
          <CaixaHabilidade linguagem="PostegreSQL" imagem={PostegreSQL} />
          <CaixaHabilidade linguagem="Git" imagem={git} />
          <CaixaHabilidade linguagem="GitHub" imagem={gitHub} />
        </div>
        <div
          className="containerInteresseIndividual entrando"
          id="oceanografia"
        >
          <CaixaHabilidade linguagem="Mestrado" imagem={mestrado} />
          <CaixaHabilidade linguagem="Linguagem R" imagem={R} />
          <CaixaHabilidade linguagem="Microscopia" imagem={microscopia} />
          <CaixaHabilidade
            linguagem="Estatística avançada"
            imagem={estatistica}
          />
          <CaixaHabilidade
            linguagem="Machine Learning"
            imagem={machineLearning}
          />
          <CaixaHabilidade
            linguagem="Reprodução de peixes"
            imagem={reproducaoDePeixe}
          />
          <CaixaHabilidade
            linguagem="Oceanografia pesqueira"
            imagem={oceanografiaPesqueira}
          />
          <CaixaHabilidade linguagem="Embarques" imagem={coletaDeDados} />
          <CaixaHabilidade linguagem="Confecção de mapas" imagem={mapa} />
        </div>
      </div>
    </section>
  );
};

export default Parte3_AreaDeInteresse;
