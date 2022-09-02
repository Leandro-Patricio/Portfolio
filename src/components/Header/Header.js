import { Link, scrollSpy } from "react-scroll";
import { useState } from "react";
import "./Header.css";

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
        <Link to="sobre" smooth spy={true} hashSpy={true} offset={-40}>
          Sobre
        </Link>
      </div>
      <div className="insideCabecalho">
        <Link to="habilidades" smooth spy={true} hashSpy={true} offset={-200}>
          Habilidades
        </Link>
      </div>
      <div className="insideCabecalho">
        <Link to="projetos" smooth spy={true} hashSpy={true} offset={0}>
          Projetos
        </Link>
      </div>
      <div className="insideCabecalho">
        <Link to="entreEmContato" smooth spy={true} hashSpy={true} offset={0}>
          Entre em contato
        </Link>
      </div>
    </header>
  );
};

export default Header;

/*  */
