import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import corpoInteiroOval from "../../fig/corpo_inteiro_com_jade_oval.png";
import "./Sobre.css";

const Sobre = () => {
  Aos.init();
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(#0063a4, black)",
      }}
    >
      <h1
        name="sobre"
        id="sobre"
        className="tituloSobre"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Sobre
      </h1>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          style={{
            margin: "5vh 5vw 5vh 5vw",
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "2vw",
            color: "rgb(255, 255, 255, 0.8)",
            fontSize: "20px",
          }}
        >
          Desde a infância, sempre adorei o mar e as criaturas que nele habitam.
          Sem hesitar, ingressei no instituto de oceanografia da USP. <br />
          Desde o primeiro ano, entrei em contato com laboratórios que
          trabalhavam com peixes, e acabei descobrindo outra paixão, a pesca e
          seu manejo. Então, fiz meu TCC analisando os estoques pesqueiros mais
          importantes da nossa região.
          <div style={{ textAlign: "justify" }}>
            Seguindo com meus estudos, meu mestrado foi focado na capacidade
            reprodutiva da Sardinha-Verdadeira, o recurso pesqueiro mais
            importante do Brasil. Para atingir o objetivo do meu mestrado,
            eventualmente esbarrei na programação e, assim, descobri uma nova
            paixão.
          </div>
          <div style={{ textAlign: "justify" }}>
            Começando com C++, MatLab e principalmente R, hoje estudo Web
            FullStack, com foco em HTML, CSS, JavaScript, Node.js e React.
          </div>
          <p>
            Áreas de interesse: Desenvolvedor Web | Web FullStack | Oceanografia
            | Oceanografia Biológica | Biologia Marinha | Pesca
          </p>
        </div>

        <div data-aos="fade-left" data-aos-duration="3000">
          <img
            alt="Foto do Leandro"
            src={corpoInteiroOval}
            className="fotoLeandro"
          />
        </div>
      </div>
    </section>
  );
};

export default Sobre;

/*  */
