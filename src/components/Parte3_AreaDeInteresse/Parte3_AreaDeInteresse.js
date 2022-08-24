import CaixaHabilidade from "../CaixaHabilidade/CaixaHabilidade";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Parte3_AreaDeInteresse.css";
import imgProgramador from "../../fig/programador_undraw_resize.svg";
import imgOceanografia from "../../fig/cyborg-bottom-of-the-sea_resize.png";
import javascript from "../../fig/javascript.png";
import html from "../../fig/html.png";
import css from "../../fig/css.png";
import react from "../../fig/react.png";
import node from "../../fig/node.png";
import api from "../../fig/api.png";
import PostegreSQL from "../../fig/PostegreSQL.png";
import gitComHub from "../../fig/gitComHub.png";
import git from "../../fig/git.png";
import gitHub from "../../fig/gitHub.png";
import { useState } from "react";

const Parte3_AreaDeInteresse = () => {
  Aos.init();
  const [isWebDevOn, setIsWebDevOn] = useState(false);
  const [isOceanograpfyOn, setIsOceanograpfyOn] = useState(false);

  const entrarHabilidadesWebDev = () => {
    switch (isWebDevOn) {
      case false:
        setIsWebDevOn(!isWebDevOn);
        setIsOceanograpfyOn(false);
        document.getElementById("oceanografia").classList.add("saindo");
        document.getElementById("oceanografia").classList.remove("entrando");
        document.getElementById("devWeb").classList.remove("saindo");
        document.getElementById("devWeb").classList.add("entrando");

        break;
      case true:
        document.getElementById("devWeb").classList.remove("entrando");
        document.getElementById("devWeb").classList.add("saindo");

        setIsWebDevOn(!isWebDevOn);
        setIsOceanograpfyOn(!isOceanograpfyOn);
        break;
    }
  };
  const entrarHabilidadesOceanografia = () => {
    switch (isOceanograpfyOn) {
      case false:
        setIsOceanograpfyOn(!isOceanograpfyOn);
        setIsWebDevOn(false);
        document.getElementById("devWeb").classList.add("saindo");
        document.getElementById("devWeb").classList.remove("entrando");
        document.getElementById("oceanografia").classList.remove("saindo");
        document.getElementById("oceanografia").classList.add("entrando");

        break;
      case true:
        document.getElementById("oceanografia").classList.remove("entrando");
        document.getElementById("oceanografia").classList.add("saindo");
        setIsOceanograpfyOn(!isOceanograpfyOn);
        setIsWebDevOn(!isWebDevOn);
        break;
    }
  };

  return (
    <section className="secAreaDeInteresse">
      <h1
        name="areaDeInteresse"
        id="areaDeInteresse"
        className="subTitulo"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Habilidades
      </h1>
      <div className="containerInteressePrincipal">
        <div
          className="interessePrincipal"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          onClick={() => entrarHabilidadesWebDev()}
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
      <div className="containerInteresseIndividual" id="devWeb">
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
      <div className="containerInteresseIndividual" id="oceanografia">
        <CaixaHabilidade
          linguagem="Coisas de Oceanografia"
          imagem={javascript}
        />
        <CaixaHabilidade linguagem="Coisas de Oceanografia" imagem={html} />
        <CaixaHabilidade linguagem="Coisas de Oceanografia" imagem={css} />
        <CaixaHabilidade linguagem="Coisas de Oceanografia" imagem={react} />

        <CaixaHabilidade linguagem="Coisas de Oceanografia" imagem={node} />
        <CaixaHabilidade linguagem="Coisas de Oceanografia" imagem={api} />
        <CaixaHabilidade
          linguagem="Coisas de Oceanografia"
          imagem={PostegreSQL}
        />
        <CaixaHabilidade
          linguagem="Coisas de Oceanografia"
          imagem={gitComHub}
        />
      </div>
    </section>
  );
};

export default Parte3_AreaDeInteresse;
