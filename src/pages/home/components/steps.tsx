import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
import "./styles";
import { CardsContainer, StepsContainer } from "./styles";
import { Link } from "react-router-dom";

export default function StepsHome() {
  const auth = localStorage.getItem("token");

  const items: MenuItem[] = [
    {
      label: "",
    },
    {
      label: "",
    },
    {
      label: "",
    },
    {
      label: "",
    },
  ];

  return (
    <StepsContainer>
      <Steps model={items} />

      <CardsContainer>
        <div>
          <span className="pass">1 Passo</span>
          <Link
            to={auth ? "/inscricao" : "/login"}
            style={{ textDecoration: "none" }}
          >
            <p>Realize seu cadastro aqui no site preenchendo todos os campos.</p>
          </Link>
        </div>
        <div>
          <span className="pass">2 Passo</span>
          <p>Teste seus conhecimentos sobre informática básica. <br /> (Etapa seletiva)</p>
        </div>
        <div>
          <span className="pass">3 Passo</span>
          <p>Preencha o formulário de inscrição. <br /> (Critério de desempate)</p>
        </div>
        <div>
          <span className="pass">4 Passo</span>
          <p>Uma vez aprovado no processo seletivo, você estará automaticamente matriculado no curso.</p>
        </div>

      </CardsContainer>
    </StepsContainer>
  );
}
