import { Link, scrollSpy } from "react-scroll";
import { useState } from "react";
import "./Header.css";
import Aos from "aos";

const Header = () => {
  scrollSpy.update();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const tranformarHamburguer = () => {
    setIsNavExpanded(!isNavExpanded);
    document.getElementById("menu-bar").classList.toggle("change");
  };
  return (
    <header
      className={isNavExpanded ? "cabecalho cabecalhoExpandido" : "cabecalho"}
      /* className="cabecalhoExpandido" */
      id="laEmCima"
    >
      <div
        className="hamburguer"
        id="menu-bar"
        onClick={() => tranformarHamburguer()}
      >
        <p id="bar1" class="bar"></p>
        <p id="bar2" class="bar"></p>
        <p id="bar3" class="bar"></p>
      </div>
      <div className="insideCabecalho">
        <Link to="sobre" smooth spy={true} hashSpy={true}>
          Sobre
        </Link>
      </div>
      <div className="insideCabecalho">
        <Link to="areaDeInteresse" smooth spy={true} hashSpy={true}>
          Área de Interesse
        </Link>
      </div>
      <div className="insideCabecalho">
        <Link to="formacaoAcademica" smooth spy={true} hashSpy={true}>
          Formação acadêmica
        </Link>
      </div>
      <div className="insideCabecalho">
        <Link to="projetos" smooth spy={true} hashSpy={true}>
          Projetos
        </Link>
      </div>
      <div className="insideCabecalho">
        <Link to="entreEmContato" smooth spy={true} hashSpy={true}>
          Entre em contato
        </Link>
      </div>
      <div className="insideCabecalho">
        <Link to="finalDaPagina" smooth spy={true} hashSpy={true}>
          Final da página
        </Link>
      </div>
    </header>
  );
};

export default Header;

/*  */
