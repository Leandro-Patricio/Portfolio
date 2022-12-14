import Aos from "aos";
import "aos/dist/aos.css";
import corpoInteiroOval from "../../fig/corpo_inteiro_com_jade_oval.png";
import "./Parte2_Sobre.css";

const Parte2_Sobre = () => {
  Aos.init();
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(#021B27, black)",
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
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          style={{ margin: "5vh 5vw 0vh 5vw" }}
          name="sobre"
        >
          Desde a infância, sempre adorei o mar e as criaturas que nele habitam.
          Sem hesitar, ingressei no instituto de oceanografia da USP.
          <div>
            Desde o primeiro ano, entrei em contato com laboratórios, e acabei
            descobrindo a pesca e seu manejo. Então, fiz meu TCC e meu mestrado
            analisando os estoques pesqueiros mais importantes da nossa região,
            como a da &nbsp;
            <span>
              <a
                href="https://www.funbio.org.br/em-defesa-da-sardinha/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <u>Sardinha-Verdadeira.</u>
              </a>
            </span>
          </div>
          <div>
            Para atingir o objetivo da dissertação, esbarrei na programação e,
            assim, descobri uma nova paixão, programação.
          </div>
          <div>
            Começando com C++, MatLab e principalmente R, hoje estudo Web
            FullStack, com foco em HTML, CSS, JavaScript, Node.js e React.
          </div>
        </div>

        <div data-aos="zoom-in-down" data-aos-duration="3000">
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

export default Parte2_Sobre;

/*  */
