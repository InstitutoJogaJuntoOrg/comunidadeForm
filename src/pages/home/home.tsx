import { useEffect, useState } from "react";
import { Card } from "./components/card";
import StepsHome from "./components/steps";
import {
  About,
  ContainerCardLayout,
  ContainerHome,
  ContainerTitle,
} from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  display:flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

export const HomePage = () => {
  const auth = localStorage.getItem("token");
  const [showText, setShowText] = useState(false);


  const setCookie = (name: string) => {
    document.cookie = name
  };

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
      <ContainerHome>
        <ImageContainer>
          <Image
            src="https://cdn.discordapp.com/attachments/566850308702208001/1146146822100897905/Rectangle_35.png"
            alt="banner com a imagem de fundo da IETEC de ilhabela, e uma mulher em um notebook"
          />
          <Overlay
            onMouseOver={() => setShowText(true)}
            onMouseOut={() => setShowText(false)}
          >
            {showText && (
              <div>
                Texto que será exibido quando o mouse passar sobre a imagem
              </div>
            )}
          </Overlay>
        </ImageContainer>

        <section>
          <ContainerTitle className="InitialMessage">
            <h1>ILHABELA TECH</h1>
            <span>Você está a um clique do futuro</span>
            <Link to={auth ? "/inscricao" : "/login"}>
              <button>Inscrever-se</button>
            </Link>
          </ContainerTitle>
        </section>
        <ContainerCardLayout>
          <Card
            description="
            Ilhabela Tech é um programa da Prefeitura de Ilhabela em parceria com a ONG Instituto Joga Junto que visa capacitar, acelerar e incluir, prioritariamente, jovens de baixa renda no universo da tecnologia."
            className="secondImg"
            titleCard="Ilhabela Tech"
            image="https://cdn.discordapp.com/attachments/566850308702208001/1146214276537786438/Group.png"
            key={2}
            alt="img"
          />
          <Card
            description="O curso, que tem data de início prevista para 16.10, com duração de 148 horas, ocorrerá de forma presencial no laboratório de informática da IETEC, nos períodos da tarde (das 14h às 17h) ou noite (das 17:30 às 21:30).   "
            titleCard="Sobre o QA"
            image="https://cdn.discordapp.com/attachments/566850308702208001/1146220725309546546/Rectangle_28.png"
            key={1}
            alt="img"
          />
        </ContainerCardLayout>
        <About>
          <h1>Como participar</h1>
          <p>
            Para concorrer a uma das vagas do Ilhabela Tech é bem simples, as
            etapas iniciais do processo ocorrerão neste site e são:{" "}
          </p>
          <StepsHome />
        </About>
      </ContainerHome>
    </div>
  );
};
