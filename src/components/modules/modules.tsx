import { FormationInfo, ModuleContainer } from "./styles";

export const Modules = ({}) => {
  return (
    <div>
      <ModuleContainer>
       
        <div>
          <h1>FORMAÇÃO BÁSICA</h1>
          <ul>
            <li>
              <span className="circle">1</span> Autoconhecimento
            </li>
            <li>
              <span className="circle">2</span>
              Gestão de projetos
            </li>
            <li>
              <span className="circle">3</span>
              Testes Manuais
            </li>
          </ul>
          <footer>
            Certificado <span>QA Básico</span>
          </footer>
        </div>

   <div>
    
   <h1>FORMAÇÃO AVANÇADA</h1>
          <ul>
            <li>
              <span className="circle">4</span> Algorítimos
            </li>
            <li>
              <span className="circle">5</span>
              Python
            </li>
            <li>
              <span className="circle">6</span>
              Automação de testes
            </li>
          </ul>
          <footer>
            Certificado <span>QA Avançado</span>
          </footer>
   </div>
     

      </ModuleContainer>
     <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
     }}>
     <FormationInfo>
        <div className="image">
          <img src="/certificado.svg" alt="" />
        </div>
        <div className="content">
          <h2>+ de 140 horas de formação</h2>
          <p>
            E diversos workshops com especialistas em finanças, recursos
            humanos, projetos, inovação, preparação para o mercado de trabalho e
            muito mais.
          </p>
        </div>
      </FormationInfo>
     </div>
    </div>
  );
};
