import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";
/* import NavbarLandingPage from "../components/NavbarLandingPage.js"
import BackToTopBtn from "../components/BackToTopBtn.js"
import SobreNosProjeto from "../components/SobreNosProjeto"
import SobreNosAlunos from "../components/SobreNosAlunos"
import Logo_Busca from "../components/Logo_Busca" */
import Aos from 'aos';
import 'aos/dist/aos.css';


const LandingPage = () => {
    Aos.init();

/*     <style>
        html{
            scroll-behaviour:smooth;
        }
    </style> */
    return (
        
        <>

        <Header />

            <Link to="/diario">
                <button >
                    Clique aqui para ir ao diário
                </button>
            </Link>





            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>



            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>



            <div class="item" data-aos="flip-up" data-aos-duration="3000" style={{padding:"100px", backgroundColor:"red"}}>1</div>
            <></>




            <div name="finalDaPagina" id="finalDaPagina">to aqui embaixo</div>
        
        
        <Footer />
        </>



    );
}

export default LandingPage;