import { HomeContainer } from "./styles";

import { Footer } from "../../components/footer";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <div className="subtitle">
          <span
            style={{
              fontSize: "3rem",
            }}
          >
            Inscrições Encerradas!
            <p style={{
              fontSize: '14px',
             
            }}>Verifique seu email para atualizações.</p>
          </span>
          <a className="buttonYellow"
            style={{

              borderRadius: "8px",
              padding: "10px 20px",
              textDecoration: "none",
           
            }}
            target="_blank"
            href="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/Classifica%C3%A7%C3%A3o+Geral+Analise+de+dados+2025.1+-+Instituto+Joga+Junto.pdf"
          >
            <span style={{ color: "black", fontWeight: "bold" }}>
              Confira os resultados
            </span>
          </a>
          {/* <Link
            to="/inscricao"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              background: "#FCD700",
              padding: "1rem",
              borderRadius: '12px'
            }}
          >
    Inscreva-se
          </Link> */}
        </div>

        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div className="banners">
            <h3>Processos seletivos</h3>
            <Link to="/inscricao">
              <img src="/avisohome.png" alt="" />
            </Link>
          </div>
        </div> */}
      </HomeContainer>
      <Footer />
    </>
  );
};
