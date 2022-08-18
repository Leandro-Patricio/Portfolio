import Typewriter from "typewriter-effect";

const Inicio = () => {
  return (
    <section>
      <div
        style={{ margin: "7% 0 0 0%", fontSize: "15px", textAlign: "center" }}
        className={"fontePacifico"}
      >
        Bem-vindo a página de <br /> <br />
        <span className={"fonteRighteous"}> Leandro Fernandes Patrício </span>
        {/* <br/> e sou<br/> */}
        <div style={{ fontSize: "30px" }}>
          <Typewriter
            options={{ delay: 50, cursor: "|", deleteSpeed: 50, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<span class='fonteSilkscreen font-effect-shadow-multiple'>Desenvolvedor Full Stack</span>`
                )
                .pauseFor(1500)
                .deleteChars(10)
                .typeString(
                  `<span class='fonteSilkscreen font-effect-shadow-multiple'>Front End</span>`
                )
                .pauseFor(1500)
                .changeDeleteSpeed(10)
                .deleteChars(23)
                .typeString(
                  `<span class='fonteAkayaTelivigala font-effect-shadow-multiple'>Oceanógrafo</span>`
                )
                .pauseFor(1500)
                .deleteChars(11)
                .typeString(
                  `<span class='fonteAkayaTelivigala font-effect-shadow-multiple'>Mestre em Oceanografia Biológica</span>`
                )
                .pauseFor(1500)
                .deleteChars(32)
                .start();
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
