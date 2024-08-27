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
              fontSize: "2rem",
            }}
          >
            Inscrições encerradas!
            <p style={{
              fontSize: '14px',
              marginLeft: 50,
            }}>Verifique seu email para atualizações.</p>
          </span>
          <Link
            to="/inscricao"
            style={{
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
    
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* <div className="banners">
            <h3>Processos seletivos</h3>
            <Link to="/inscricao">
              <img src="/aviso.png" alt="" />
            </Link>
          </div> */}
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
};
