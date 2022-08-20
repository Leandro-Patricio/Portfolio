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

      <div>
        <Link to="sobre" smooth spy={true} hashSpy={true}>
          <div
            style={{
              textAlign: "center",
              padding: "5vw 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-8h3l-4 4-4-4h3V8h2v4z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
            Mergulhe mais fundo
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Parte1_Ola;
