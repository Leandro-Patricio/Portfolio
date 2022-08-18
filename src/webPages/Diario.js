import React from "react";
import { Link } from "react-router-dom";


const Diario = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                DIÁRIO

                </div>

                <div style={{textAlign:"center"}}> 
                    <Link to="/home" >
                        <button>
                            Clique aqui para ir ao Home
                        </button>
                    </Link>

                    <p>
                        Dia 5:
                        Google Fonts
                    </p>
                    <p>
                        Dia 4:
                        Descobrindo typewriterjs (efeito de escrita)
                    </p>
                    <p>
                        Dia 3:
                        Descobrindo AOS (animation on scroll)
                    </p>
                    <p>
                        Dia 2:
                        Add favicon (Edu cação) 
                        Add header
                        Add heder scroll (não finalizado)
                    </p>
                    <p>
                        Dia 1:
                        Começo do arquivo. 
                        Criação do diário
                    </p>
                </div>





        </>



    );
}

export default Diario;