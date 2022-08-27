import Aos from "aos";
import "aos/dist/aos.css";
import "./Parte4_Projetos.css";
import CaraACaraMarvel from "../../fig/cara-a-cara-marvel.PNG";
import ProjetosIndividuais from "../ProjetosIndividuais/ProjetosIndividuais";

const Parte4_Projetos = () => {
  Aos.init();

  return (
    <section className="secProjetos">
      <h1
        name="projetos"
        id="projetos"
        className="subTitulo"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Projetos
      </h1>

      <div className="containerProjetos">
        <ProjetosIndividuais
          link="https://cara-a-cara-marvel.vercel.app/"
          imagem={CaraACaraMarvel}
          nome="Cara-A-Cara-Marvel"
          descricao=""
        />
        <ProjetosIndividuais
          link="https://cara-a-cara-marvel.vercel.app/"
          imagem={CaraACaraMarvel}
          nome="Cara-A-Cara-Marvel"
          descricao="Projeto baseado no jogo Cara-a-Cara. Chame um amigo(a) para jogar com você! Criado como primeiro projeto em React para o curso de FullStack da Let's Code."
        />
      </div>
    </section>
  );
};

export default Parte4_Projetos;
