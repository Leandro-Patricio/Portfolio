import "./CaixaHabilidade.css";
import Aos from "aos";

const CaixaHabilidade = (props) => {
  Aos.init();
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="boxesHabilidades"
      id={props.linguagem}
    >
      <img className="imgHabilidade" src={props.imagem} alt={props.linguagem} />
      <div>{props.linguagem}</div>
    </div>
  );
};

export default CaixaHabilidade;

/*  */
