import { Container } from "./styles";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <Link to={"/"}>
            <img src="/logo_white.png" alt="Comunidade logo" />
          </Link>

          <div className="footerFlex">
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h1>Organização</h1>
              <li>
                <a
                  target="_blank"
                  href="https://www.jogajuntoinstituto.org/#Sobre"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.jogajuntoinstituto.org/#metodologia"
                >
                  Método
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.jogajuntoinstituto.org/#Projetos"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.jogajuntoinstituto.org/#Contato"
                >
                  Contato
                </a>
              </li>
            </ul>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h1>Projetos</h1>
              <li>Trip</li>
              <li>Farm</li>
              <li>Voa</li>
              <li>Goal</li>
            </ul>
          </div>
          <div className="colaboraai">
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
           
              <a style={{
                color: "black",
                backgroundColor: "#f1c40f",
                fontSize: '1rem',
                fontWeight: '500',
                borderRadius: '15px',
                padding: '1rem 1.5rem'
              }} href="https://www.paypal.com/donate/?hosted_button_id=ABNWG273YLYWU" target="`_b">Doe</a>
            
              <div>
                <a
                  target="_blank"
                  href="https://br.linkedin.com/company/institutojogajunto"
                >
                  <FaLinkedin />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/institutojogajunto"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footerSub">
          <p>© Instituto Joga Junto 2023. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};
