import "./CaixaHabilidade.css";

const CaixaHabilidade = (props) => {
  return (
    <div className="boxesHabilidades">
      <img className="imgHabilidade" src={props.imagem} alt={props.linguagem} />
      <div>{props.linguagem}</div>
    </div>
  );
};

export default CaixaHabilidade;

/*  */
