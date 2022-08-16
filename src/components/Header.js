import {Link, animateScroll} from "react-scroll"




const header =()=>{
    const header={
        backgroundColor:"black",
        color:"white",
        display:"flex",
        justifyContent:"space-between",
        padding:"5vh 5vw",
        position:"sticky",
        top:"0"
    }

    let primeiroContainer={
        /* fontSize:"50px", */

        "&:hover": {
            cursor:"pointer"
          },
    }

/*     const onMouseEnter = () =>{
        primeiroContainer={
            cursor:"pointer",
            fontSize:"50px",
        }
    }
 */

    const segundoContainer={
        display:"flex",
        justifyContent:"center",
        
    }

const inside={
    marginRight:"2vw"
}
    
    
    
    return(
        
        <header style={header} id="laEmCima">

        <div style={primeiroContainer}>
        <div>
        <a onClick={()=>animateScroll.scrollToTop()} href={() => false}
   /*      onMouseEnter={()=>onMouseEnter} */
        >
            LFP
        </a>
        <br/>
            
        </div>
        </div>

        <div style={segundoContainer}>
        <div style={inside}>
           Sobre
        </div>
        <div style={inside}>
           Minhas conquistas
        </div>
        <div style={inside}>
           Entre em contato
        </div>
        <div style={inside}>
            <Link
             to="finalDaPagina"
             smooth
             spy
            /*  containerId="finalDaPagina" */
            >
                Final da página
            </Link>
        
           
        </div>

        </div>        
       </header>
    )
}

export default header;

/*  */