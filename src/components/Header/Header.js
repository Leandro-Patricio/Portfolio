import { Link, scrollSpy } from "react-scroll";
import "./Header.css";

const header = () => {
  scrollSpy.update();

  return (
    <header className="cabecalho" id="laEmCima">
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

export default header;

/*  */
