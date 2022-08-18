import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

import Inicio from "../components/Inicio";
import BotoesContato from "../components/BotoesContato/BotoesContato";

const LandingPage = () => {
  Aos.init();

  return (
    <>
      <Header />

      <Link to="/diario">
        <button>Clique aqui para ir ao diário</button>
      </Link>

      <Inicio />
      <BotoesContato />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div
        class="item"
        data-aos="flip-up"
        data-aos-duration="3000"
        style={{ padding: "100px", backgroundColor: "red" }}
      >
        1
      </div>
      <></>

      <div name="finalDaPagina" id="finalDaPagina">
        to aqui embaixo
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
