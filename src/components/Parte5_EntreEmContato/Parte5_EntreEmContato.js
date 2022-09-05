import "./Parte5_EntreEmContato.css";

import yahoo from "../../fig/yahoo.svg";
import gmail from "../../fig/gmail.svg";
import outlook from "../../fig/outlook.svg";
import email from "../../fig/email.svg";
import whatsapp from "../../fig/whatsapp.svg";
import linkedin from "../../fig/linkedin.svg";
import instagram from "../../fig/instagram.svg";
import download from "../../fig/download.svg";
import imgProfissional from "../../fig/copoInteiroProfissional.jpg";

import curriculo from "../../fig/curriculo_LFP.pdf";

const Parte5_EntreEmContato = () => {
  const abrirModal = () => {
    const modal = document.getElementsByClassName("containerModal")[0];
    modal.style.display = "block";
  };
  const fecharModal = () => {
    const modal = document.getElementsByClassName("containerModal")[0];
    modal.style.display = "none";
  };
  window.onclick = function (e) {
    const modal = document.getElementsByClassName("containerModal")[0];
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

  const copiarParaClipboard = (informacao) => {
    navigator.clipboard.writeText(informacao);

    const containerCopiado =
      document.getElementsByClassName("containerCopiado")[0];
    containerCopiado.classList.remove("aparecerCopiado"); // reset animation
    void containerCopiado.offsetWidth; // trigger reflow
    containerCopiado.classList.add("aparecerCopiado"); // start animation };
  };

  return (
    <section className="secEntreEmContato">
      <div id="containerImgProfissional">
        <img
          src={imgProfissional}
          alt="imagem de busto Profissional"
          id="imagemCorpoIniteroProfissional"
        />
      </div>
      <div>
        <h1
          id="entreEmContato"
          className="subTitulo"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          Entre em Contato
        </h1>
        <div>
          {/*         <div id="containerImgProfissional">
          <img src={imgProfissional} alt="imagem de busto Profissional" />
        </div> */}
          <div id="subTitulo" name="entreEmContato">
            Quer saber mais? <br />
            Dê um olá!
          </div>

          <div id="containerContato">
            <div id="containerInformacoesGerais">
              <div className="tituloPrincipalInformacao">
                Informações gerais
                <div className="subTituloPrincipal">
                  (Clique para copiá-las)
                </div>
              </div>
              <div className="tituloInformacao">Nome</div>
              <div
                className="informacao"
                onClick={() =>
                  copiarParaClipboard("Leandro Fernandes Patrício")
                }
              >
                Leandro Fernandes Patrício
              </div>
              <div className="tituloInformacao">Telefone</div>
              <div style={{ marginBottom: "5vh" }}>
                <span
                  className="informacao"
                  onClick={() => copiarParaClipboard(" +55(11) 9 8161-9965")}
                >
                  +55(11) 9 8161-9965
                </span>
                <span> &nbsp;/ &nbsp;</span>
                <span
                  className="informacao"
                  onClick={() => copiarParaClipboard("+55(21) 9 7749-5545")}
                >
                  +55(21) 9 7749-5545
                </span>
              </div>
              <div className="tituloInformacao">E-mail</div>
              <div
                className="informacao"
                onClick={() =>
                  copiarParaClipboard("leandro27patricio@gmail.com")
                }
              >
                leandro27patricio@gmail.com
              </div>
              <div className="tituloInformacao">Residência atual</div>
              <div
                className="informacao"
                onClick={() => copiarParaClipboard("Niterói, Rio de Janeiro")}
              >
                Niterói, Rio de Janeiro
              </div>
            </div>
            <div id="containerBotoesRedesSociais">
              <div className="tituloPrincipalInformacao">Redes Sociais</div>
              <div className="displayRow">
                <div className="redeSocial" onClick={() => abrirModal()}>
                  <img
                    className="imgRedeSocial tamanhoImg"
                    src={email}
                    alt="email"
                  />
                  <div className="redeSocialNome">Email</div>
                </div>
                <div className="redeSocial">
                  <a
                    href=" https://whatsa.me/5511981619965/?t=Ol%C3%A1!%20Vi%20o%20seu%20portf%C3%B3lio!"
                    target="_blank"
                    rel="external"
                    className="linkParaRedeSocial"
                  >
                    <img
                      className="imgRedeSocial tamanhoImg"
                      src={whatsapp}
                      alt="whatsapp"
                    />
                    <div className="redeSocialNome">Whatsapp</div>
                  </a>
                </div>
              </div>
              <div className="displayRow">
                <div className="redeSocial">
                  <a
                    href="https://www.linkedin.com/in/leandro-patrico/"
                    target="_blank"
                    rel="external"
                    className="linkParaRedeSocial"
                  >
                    <img
                      className="imgRedeSocial tamanhoImg"
                      src={linkedin}
                      alt="linkedin"
                    />
                    <div className="redeSocialNome">Linkedin</div>
                  </a>
                </div>
                <div className="redeSocial">
                  <a
                    href="https://www.instagram.com/le.patricio/"
                    target="_blank"
                    rel="external"
                    className="linkParaRedeSocial"
                  >
                    <img
                      className="imgRedeSocial tamanhoImg"
                      src={instagram}
                      alt="instagram"
                    />
                    <div className="redeSocialNome">Instagram</div>
                  </a>
                </div>
              </div>
              <div className="tituloPrincipalInformacao">Currículo</div>
              <button className="btnDownload">
                <a
                  href={curriculo}
                  target="_blank"
                  className="linkParaRedeSocial displayRow"
                  download="curriculo_Leandro_Patrício"
                  style={{ alignItems: "center" }}
                >
                  Clique aqui para baixar
                  <span>
                    <img
                      src={download}
                      alt="download"
                      className="imgDownload"
                    />
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="containerCopiado">Copiado!</div>
        <div className="containerModal">
          <div className="conteudoModal">
            Escolha um email de preferência
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
        </div>{" "}
      </div>
    </section>
  );
};

export default Parte5_EntreEmContato;
