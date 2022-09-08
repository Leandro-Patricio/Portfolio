import Typewriter from "typewriter-effect";
import { Link, scrollSpy } from "react-scroll";
import BotoesContato from "../BotoesContato/BotoesContato";
import Header from "../Header/Header.js";

import "./Parte1_Ola.css";

const Parte1_Ola = () => {
  scrollSpy.update();
  return (
    <section>
      <div className="fontePacifico containerInicial">
        Bem-vindo à página de <br /> <br />
        <span className={"fonteRighteous nomePrincipal"}>
          Leandro Fernandes <br /> Patrício
        </span>
        <div style={{ fontSize: "30px" }}>
          <Typewriter
            options={{ delay: 50, cursor: "|", deleteSpeed: 50, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<span class='fonteSilkscreen font-effect-shadow-multiple'>Dev. Full Stack</span>`
                )
                .pauseFor(1500)
                .deleteChars(10)
                .typeString(
                  `<span class='fonteSilkscreen font-effect-shadow-multiple'>Front End</span>`
                )
                .pauseFor(1500)
                .changeDeleteSpeed(10)
                .deleteChars(14)
                .typeString(
                  `<span class='fonteAkayaTelivigala font-effect-shadow-multiple'>M.Sc. em Oceanografia</span>`
                )
                .pauseFor(1500)
                .deleteChars(21)
                .typeString(
                  `<span class='fonteAkayaTelivigala font-effect-shadow-multiple'>Oceanografia Pesqueira</span>`
                )
                .pauseFor(1500)
                .deleteChars(22)
                .start();
            }}
          />
        </div>
      </div>

      <BotoesContato />
    </section>
  );
};

export default Parte1_Ola;
