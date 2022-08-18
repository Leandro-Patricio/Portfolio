import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";

import Aos from 'aos';
import 'aos/dist/aos.css';

import Typewriter from 'typewriter-effect';


const LandingPage = () => {
    Aos.init();

    return (

        <>

            <Header />

            <Link to="/diario">
                <button >
                    Clique aqui para ir ao diário
                </button>
            </Link>

<div style={{margin:"7% 0 0 10%", fontSize:"15px"}} className={'fontePacifico'}>
Bem-vindo a página de <br/> <br/> 
<span className={'fonteRighteous'}> Leandro Fernandes Patrício </span>
{/* <br/> e sou<br/> */}



<div>
                <Typewriter
                
                options={{delay:50, cursor:'|', deleteSpeed:50, loop:true}}
                    onInit={(typewriter) => {
                        typewriter.typeString(`<span class='fonteSilkscreen font-effect-shadow-multiple'>Desenvolvedor Full Stack</span>`)
                        .pauseFor(1500)
                            .deleteChars(10)
                            .typeString(`<span class='fonteSilkscreen font-effect-shadow-multiple'>Front End</span>`)
                            .pauseFor(1500)
                            .changeDeleteSpeed(10)
                            .deleteChars(23)
                        .typeString(`<span class='fonteLobster font-effect-shadow-multiple'>Oceanógrafo</span>`)
                        .pauseFor(1500)
                        .deleteChars(11)
                            .typeString(`<span class='fonteLobster font-effect-shadow-multiple'>Mestre em Oceanografia Biológica</span>`)
                            .pauseFor(1500)
                            .deleteChars(32)
                        .start()
                        
                        
                }}

                /> 
</div>
</div>
            
{/*                     <Typewriter
                    options={{loop:true, deleteSpeed:10}}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(3000)
                            
                            .typeString(` <p style={{flexDirection:"column"}}> <br/>  Desenvolvedor Full Stack </p>`)
                            .pauseFor(1500)
                                .deleteAll()
                            .typeString(`Oceanógrafo`)
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString(`Desenvolvedor Front End`)
                            .pauseFor(1500)
                            .deleteAll()
                                .typeString(`Mestre dos mares`)
                                .pauseFor(1500)
                                .deleteAll()
                            .start()
                        }} /> */}

            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />



            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />



            <div class="item" data-aos="flip-up" data-aos-duration="3000" style={{ padding: "100px", backgroundColor: "red" }}>1</div>
            <></>




            <div name="finalDaPagina" id="finalDaPagina">to aqui embaixo</div>


            <Footer />
        </>



    );
}

export default LandingPage;