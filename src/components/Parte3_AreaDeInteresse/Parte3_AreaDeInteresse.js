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
        Áreas de Interesse
      </h1>

      <div className="containerInteressePrincipal">
        <div className="interessePrincipal">
          <h2 style={{ textAlign: "center" }}> Desenvolvedor Web</h2>
          <img
            alt="programador"
            src={imgProgramador}
            className="imagemInteressePrincipal imagemProgramador"
          />
        </div>

        <div className="interessePrincipal">
          <h2> Oceanografia</h2>
          <img
            alt="oceanografia"
            src={imgOceanografia}
            style={{ paddingTop: "-50px" }}
            className="imagemInteressePrincipal imagemOceanografia"
          />
        </div>
      </div>

      <div className="containerInteresseIndividual">
        <div className="computador">
          <div className="containerInteresseDevWev">
            <div
              style={{
                marginTop: ".2vh",
                padding: "1vh 3vw",
                backgroundColor: "orange",
                width: "70%",
                textAlign: "center",
              }}
            >
              &lt;Competências /&gt;
            </div>
            <div
              className="insideComputer"
              style={{ backgroundColor: "orange" }}
            >
              HTML
            </div>
            <div
              className="insideComputer"
              style={{ backgroundColor: "#0B8AB3" }}
            >
              CSS
            </div>
            <div
              className="insideComputer"
              style={{ backgroundColor: "#98BF10" }}
            >
              JS
            </div>
            <div
              className="insideComputer"
              style={{ backgroundColor: "#01E6B3" }}
            >
              NODE.JS
            </div>
            <div
              className="insideComputer"
              style={{ backgroundColor: "#108382" }}
            >
              REACT
            </div>
            <div
              className="insideComputer"
              style={{ backgroundColor: "#6C63FF" }}
            >
              SQL
            </div>
            <div
              className="insideComputer"
              style={{ backgroundColor: "#EACDC7" }}
            >
              EXPRESS
            </div>
          </div>
          <div className="peDoPc">
            <div className="mousepad"></div>
          </div>
        </div>

        <div>dsasadasasdcomputador</div>
      </div>
    </section>
  );
};

export default Parte3_AreaDeInteresse;
