import "./Parte3_AreaDeInteresse.css";
import imgProgramador from "../../fig/programador_undraw_resize.svg";
import imgOceanografia from "../../fig/cyborg-bottom-of-the-sea_resize.png";

const Parte3_AreaDeInteresse = () => {
  return (
    <section className="secAreaDeInteresse">
      <h1
        name="areaDeInteresse"
        id="areaDeInteresse"
        className="subTitulo"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Área de Interesse
      </h1>

      <div className="containerInteressePrincipal">
        <div className="interessePrincipal">
          <h2> Desenvolvedor Web</h2>
          <img
            alt="programador"
            src={imgProgramador}
            className="imagemProgramador"
          />
        </div>

        <div className="interessePrincipal">
          <h2> Oceanografia</h2>
          <img
            alt="oceanografia"
            src={imgOceanografia}
            style={{ paddingTop: "-50px" }}
            className="imagemProgramador"
          />
        </div>
      </div>
    </section>
  );
};

export default Parte3_AreaDeInteresse;
