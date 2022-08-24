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
        backgroundImage: "linear-gradient(#042E42, black)",
        /*   #0063a4 */
      }}
    >
      <h1
        id="sobre"
        className="tituloSobre"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Sobre
      </h1>

      <div className="containerSobre">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          style={{ margin: "5vh 5vw 5vh 5vw" }}
          name="sobre"
        >
          Desde a infância, sempre adorei o mar e as criaturas que nele habitam.
          Sem hesitar, ingressei no instituto de oceanografia da USP.
          <div>
            Desde o primeiro ano, entrei em contato com laboratórios que
            trabalhavam com peixes, e acabei descobrindo uma paixão, a pesca e
            seu manejo. Então, fiz meu TCC analisando os estoques pesqueiros
            mais importantes da nossa região.
          </div>
          <div>
            Seguindo com os estudos, meu mestrado focou na capacidade
            reprodutiva da
            <span>
              <a
                href="https://www.funbio.org.br/em-defesa-da-sardinha/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <u> Sardinha-Verdadeira</u>
              </a>
            </span>
            , o recurso pesqueiro mais importante do Brasil. Para atingir o
            objetivo da dissertação, eventualmente esbarrei na programação e,
            assim, descobri uma nova paixão.
          </div>
          <div>
            Começando com C++, MatLab e principalmente R, hoje estudo Web
            FullStack, com foco em HTML, CSS, JavaScript, Node.js e React.
          </div>
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
