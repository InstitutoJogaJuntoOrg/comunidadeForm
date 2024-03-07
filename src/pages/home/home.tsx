import { useEffect, useState } from "react";
import { CardOne } from "./components/card";
import { CardTwo } from "./components/cardTwo";
import StepsHome from "./components/steps";
import video from "/Ilhabela.mp4";
import { Dialog } from "primereact/dialog";
import { FaSquareWhatsapp } from "react-icons/fa6";

import {
  About,
  BannerContainer,
  ContainerCardLayout,
  ContainerHome,
  ContainerTitle,
  ModalHome,
} from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Modules } from "../../components/modules/modules";
import FAQs from "./components/FAQ/faq";
// import { Cookies } from "js-cookie"; // Importe a biblioteca

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(253, 0, 0, 0.8);
  display: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  z-index: 100;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const VideoBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
`;
export const HomePage = () => {
  const [display, setDisplay] = useState(true);
  const auth = localStorage.getItem("token");
  const [showText, setShowText] = useState(false);

  const setCookie = (name: string) => {
    document.cookie = name;
  };
  useEffect(() => {
    const hasVisitedHomePage = localStorage.getItem("final");

    if (hasVisitedHomePage) {
      setDisplay(false);
    } else {
      localStorage.setItem("final", "true");
      setDisplay(false);
    }
  }, []);

  function canceldelete() {
    setDisplay(false);
  }

  // Função para coletar um cookie
  // const getCookie = (name: string) => {
  //   // return Cookies.get(name);
  // };

  useEffect(() => {
    setCookie("example");
    // console.log("Cookie example:", getCookie("example"));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
        }}
      >
        {display && (
          <Dialog
            className="accontDelete"
            visible={display}
            onHide={canceldelete}
            header=""
            footer={
              <a
                href="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/lista_CR_ILHABELATECH.pdf"
                target={"_blank"}
              >
                <ModalHome className="modalHomepage"></ModalHome>
              </a>
            }
          ></Dialog>
        )}
      </div>
      <ContainerHome>
        <ImageContainer>
          <VideoBackground>
            <Video
              src="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/JogaJunto_Ilhabela.mp4"
              autoPlay
              muted
              loop
            />
          </VideoBackground>
          <Overlay
            onMouseOver={() => setShowText(true)}
            onMouseOut={() => setShowText(false)}
          >
            {showText && (
              <div>
                Texto que será exibido quando o mouse passar sobre a image
              </div>
            )}
          </Overlay>
        </ImageContainer>

        <br />
        <br />
        <section>
          <ContainerTitle className="InitialMessage">
            <h1 style={{ textShadow: "14px 14px 18px rgba(0, 0, 0, 10.5)" }}>
              ILHABELA TEaaaaaaaaaaaaaaaaaaCH
            </h1>
            {/* <span
              className="subDescp"
              style={{ textShadow: "14px 14px 18px rgba(0, 0, 0, 10.5)" }}
            >
              Fique de olho no nosso Instagram <a href="https://www.instagram.com/ilhabela.tech/" target={"_blank"}>ilhabela.tech</a> para saber quando abrirem novas vagas!
            </span> */}
            <Link
              style={{ textShadow: "14px 14px 18px rgba(0, 0, 0, 10.5)" }}
              to={
                "/inscricao"
              }
       
            >
              <button>Inscreva-se</button>
            </Link>
          </ContainerTitle>
        </section>
        <ContainerCardLayout>
          <CardOne
            description={`
            É um programa da Prefeitura de Ilhabela em parceria com o Instituto Joga Junto que visa capacitar e incluir novos profissionais no mercado tecnológico por meio do conhecimento técnico de testador de Qualidade de Sofware (Q.A)`}
            className="secondImg"
            titleCard="O que é o Ilhabela tech:"
            image="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/card_ilhabela_bannerlogo.png"
            key={2}
            alt="img"
          />
          <CardTwo
            description=""
            titleCard="O que é um testador de qualidade de software"
            image="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/card_ilhabela_IETEC.png"
            key={1}
            alt="img"
          />
        </ContainerCardLayout>

        <BannerContainer>
          <img src="/banner.svg" style={{
            display: 'block',
          }} alt="icon" />
        </BannerContainer>

        <div
          style={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            justifyContent: "center",

            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Modules />
        </div>
        <About>
          <h1>Como participar</h1>
          <StepsHome />
        </About>
        <FAQs />
        <Footer />
      </ContainerHome>
    </div>
  );
};
