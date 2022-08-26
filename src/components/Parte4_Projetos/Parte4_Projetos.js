import Aos from "aos";
import "aos/dist/aos.css";
import "./Parte4_Projetos.css";
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
    </section>
  );
};

export default Parte4_Projetos;
