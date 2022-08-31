import "./Parte5_EntreEmContato.css";

const Parte5_EntreEmContato = () => {
  const enviarEmailGmail = () => {
    const assunto = document.getElementById("assunto").value;
    const corpoDoTexto = document.getElementById("corpoDoTexto").value;
    const link =
      "https://mail.google.com/mail/u/0/?fs=1&tf=cm" +
      "&to=leandro27patricio@gmail.com" +
      "&su=" +
      encodeURIComponent(assunto) +
      "&body=" +
      encodeURIComponent(corpoDoTexto);

    window.open(link);
  };
  const enviarEmailOutlook = () => {
    const assunto = document.getElementById("assunto").value;
    const corpoDoTexto = document.getElementById("corpoDoTexto").value;
    const link =
      "https://outlook.live.com/mail/0/deeplink/compose?popoutv2=1" +
      "&to=leandro27patricio@gmail.com" +
      "&subject=" +
      encodeURIComponent(assunto) +
      "&body=" +
      encodeURIComponent(corpoDoTexto);

    window.open(link);
  };
  const enviarEmailYahoo = () => {
    const assunto = document.getElementById("assunto").value;
    const corpoDoTexto = document.getElementById("corpoDoTexto").value;
    const link =
      "http://compose.mail.yahoo.com/" +
      "&to=leandro27patricio@gmail.com" +
      "&subject=" +
      encodeURIComponent(assunto) +
      "&body=" +
      encodeURIComponent(corpoDoTexto);

    window.open(link);
  };

  return (
    <section className="secProjetos">
      <h1
        name="projetos"
        id="projetos"
        className="subTitulo"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Entre em Contato
      </h1>

      <div>
        <div>Entre em contato comigo!</div>
        <textarea id="assunto">Assunto do email</textarea>
        <textarea id="corpoDoTexto">Corpo do texto</textarea>
        <button onClick={() => enviarEmailGmail()}>Enviar gmail</button>
        <button onClick={() => enviarEmailOutlook()}>Enviar outlook</button>
        <button onClick={() => enviarEmailYahoo()}>Enviar yahoo</button>
      </div>
    </section>
  );
};

export default Parte5_EntreEmContato;
