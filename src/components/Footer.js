import Aos from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll } from "react-scroll";

const Footer = () => {
  Aos.init();
  return (
    <footer>
      <div
        class="item"
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{
          cursor: "pointer",
          position: "fixed",
          bottom: "5vh",
          zIndex: "5000",
          width: "50px",
          borderRadius: "50px",
          marginLeft: "5vw",
          textAlign: "center",
        }}
      >
        {" "}
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
    </footer>
  );
};

export default Footer;

/*  */
