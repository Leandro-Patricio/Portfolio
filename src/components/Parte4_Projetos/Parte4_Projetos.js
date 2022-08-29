import Aos from "aos";
import "aos/dist/aos.css";
import "./Parte4_Projetos.css";
import CaraACaraMarvel from "../../fig/cara-a-cara-marvel.PNG";
import HackatonCodeOcean from "../../fig/hackatonCodeOcean.PNG";
import ProjetosIndividuais from "../ProjetosIndividuais/ProjetosIndividuais";
import ProjetoModulo6 from "../../fig/projetoModulo6.PNG";
import ProjetoModulo7 from "../../fig/projetoModulo7.PNG";

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
          nome="Cara-A-Cara: Marvel"
          descricao="Projeto baseado no jogo Cara-a-Cara. Chame um amigo(a) para jogar com você! Criado como primeiro projeto em React para o curso de FullStack da Let's Code. Clique aqui para acessar o website."
        />
        <ProjetosIndividuais
          link="https://hackaton-code-ocean.vercel.app/home"
          imagem={HackatonCodeOcean}
          nome="Hackaton Code Ocean"
          descricao="Projeto criado em grupo para o 1° hackaton realizado pela Let's Code/ADA. Este projeto ficou com o 4° lugar. Clique aqui para acessar o front-end do website."
        />
        <ProjetosIndividuais
          link="https://github.com/Leandro-Patricio/Projetos-finais-Curso-Lets-Code/tree/main/Mod6%20-%20Front%2BBack%20e%20Node%20-%20Acesso%20de%20listas"
          imagem={ProjetoModulo6}
          nome="Bricando com Node"
          descricao="Primeiro projeto utilizando o Node.js para o Módulo 6 do curso de FullStack oferecido pela Let's Code/ADA. Seu objetivo era um priemiro contato com o node e a utulizacão do server e as rotas de get/post/put/delete. Clique aqui para acessar github."
        />
        <ProjetosIndividuais
          link="https://github.com/Leandro-Patricio/Projetos-finais-Curso-Lets-Code/tree/main/Mod7%20-%20Projeto%20full%20stack%20-%20React%2BBackEnd%2BPostegreSQL"
          imagem={ProjetoModulo7}
          nome="O último fã do Milan"
          descricao="Primeiro projeto Full Stack, usando React, Express e PostegreSQL. Seu objetivo era fazer um site de cinema, no qual você poderia procurar pelas salas, filmes entre outros. Clique aqui para acessar github."
        />
      </div>
    </section>
  );
};

export default Parte4_Projetos;
