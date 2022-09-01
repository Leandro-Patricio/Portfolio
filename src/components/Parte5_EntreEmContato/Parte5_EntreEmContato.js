import "./Parte5_EntreEmContato.css";

import yahoo from "../../fig/yahoo.svg";
import gmail from "../../fig/gmail.svg";
import outlook from "../../fig/outlook.svg";

const Parte5_EntreEmContato = () => {
  const modal = document.getElementsByClassName("containerModal")[0];

  const abrirModal = () => {
    modal.style.display = "block";
  };
  const fecharModal = () => {
    modal.style.display = "none";
  };
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  const enviarEmail = (email) => {
    let link = "";

    if (email === "gmail") {
      link = "https://mail.google.com/mail/u/0/?fs=1&tf=cm";
    } else if (email === "outlook") {
      link = "https://outlook.live.com/mail/0/deeplink/compose?popoutv2=1";
    } else if (email === "yahoo") {
      link = "http://compose.mail.yahoo.com/";
    }
    link += "&to=leandro27patricio@gmail.com";

    window.open(link);
  };

  return (
    <section className="secProjetos">
      <h1
        name="entreEmContato"
        id="entreEmContato"
        className="subTitulo"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Entre em Contato
      </h1>

      <div>
        <div>Entre em contato comigo!</div>
        <div className="abreModal" onClick={() => abrirModal()}>
          Clique aqui para abrir o modal
        </div>
        <div className="containerModal">
          <div className="conteudoModal">
            Escolha um email de preferência{" "}
            <span className="fechaModal" onClick={() => fecharModal()}>
              &times;
            </span>
            <button onClick={() => enviarEmail("gmail")} className="btnEmail">
              <img src={gmail} alt="gmail" className="imgEmail" />
              Enviar pelo gmail
            </button>
            <button onClick={() => enviarEmail("outlook")} className="btnEmail">
              <img src={outlook} alt="outlook" className="imgEmail" />
              Enviar pelo outlook
            </button>
            <button onClick={() => enviarEmail("yahoo")} className="btnEmail">
              <img src={yahoo} alt="yahoo" className="imgEmail" />
              Enviar pelo yahoo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parte5_EntreEmContato;
