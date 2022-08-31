import "./ProjetosIndividuais.css";

const ProjetosIndividuais = (props) => {
  return (
    <a href={props.link} target="_blank" className="linkProjeto">
      <div className="boxProjeto">
        <img src={props.imagem} alt={props.nome} className="imgProjeto" />
        <div className="descricaoProjeto">
          <div className="tituloProjeto">{props.nome}</div>
          <p>{props.descricao}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjetosIndividuais;

/*  */
