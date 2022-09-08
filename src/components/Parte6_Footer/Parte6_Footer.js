import Aos from "aos";
import "aos/dist/aos.css";
import { animateScroll } from "react-scroll";

import "./Parte6_Footer.css";

const Parte6_Footer = () => {
  Aos.init();
  return (
    <footer>
      <div
        className="item btnVoltaAoTopo"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <a onClick={() => animateScroll.scrollToTop()} href={() => false}>
          {/*  somente uma seta */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
        </a>
      </div>

      <div className="tamanho">
        &copy; 2022 | Design e desenvolvimento: Leandro Fernandes Patrício
      </div>
    </footer>
  );
};

export default Parte6_Footer;
