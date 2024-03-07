import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { ContainerQuestions, FAQContainer } from "./styles";

type FAQItem = {
  question: string;
  answer: string | string[];
};

type FAQProps = {
  faqs: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ faqs }: any) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(-1);

  const toggleItem = (index: number) => {
    if (selectedItem === index) {
      setSelectedItem(null);
    } else {
      setSelectedItem(index);
    }
  };

  return (
    <ContainerQuestions>
      <div className="wrapper">
        {faqs.map(
          (
            faq: {
              question:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              answer: (
                | string
                | number
                | boolean
                | ReactPortal
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | null
                | undefined
              )[];
            },
            index: Key | any | undefined
          ) => (
            <div
              key={index}
              style={{ marginBottom: "10px" }}
              className="questions"
            >
              <div className="openClass" onClick={() => toggleItem(index)}>
                <h1
                  style={{
                    fontSize: "22px",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  {faq.question}
                </h1>
                <span
                  style={{
                    float: "right",
                    color: "white",
                    fontWeight: "500",
                    marginTop: "-20px",
                  }}
                >
                  {selectedItem === index ? "-" : "+"}
                </span>
              </div>
              {selectedItem === index && (
                <div
                  style={{
                    backgroundColor: "#cbe0c4",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  {Array.isArray(faq.answer) ? (
                    <ul className="respQuestion">
                      {faq.answer.map(
                        (
                          item:
                            | string
                            | number
                            | boolean
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | ReactPortal
                            | null
                            | undefined,
                          i: Key | null | undefined
                        ) => (
                          <li key={i} className="list">{item}</li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p
                      className="respQuestion"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </ContainerQuestions>
  );
};

const FAQs: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "O que é o Ilhabela tech",
      answer:
        "• É um programa da Prefeitura de Ilhabela em parceria com o <a target='_blank' href='https://www.jogajuntoinstituto.org/'>Instituto JogaJunto</a> que visa capacitar e incluir novos profissionais no mercado tecnológico por meio do conhecimento técnico de testador de Qualidade de Sofware (Q.A)",
    },
    {
      question: "Quantas vagas são disponibilizadas?",
      answer: [
        "São disponibilizadas 30 vagas para o curso, com no mínimo 20 aprovados para formação da turma.",
      ],
    },
    {
      question:
        "Não sou residente de Ilhabela, mas frequento a cidade. Posso fazer o curso?",
      answer: [
        "Sim, você pode fazer o curso desde que compareça presencialmente nas aulas. A frequência mínima é de 75% em sala de aula para obtenção do certificado.",
      ],
    },
    {
      question: "Preciso estar presencial para fazer o curso?",
      answer: [
        "Sim, a frequência mínima é de 75% em sala de aula para obtenção do certificado.",
      ],
    },
    {
      question: "Recebo um certificado no final do curso?",
      answer: [
        "Sim, você receberá certificado desde que tenha frequência de 75% em sala de aula e tenha entregue o projeto final.",
      ],
    },
    {
      question: "Quantos certificados posso receber?",
      answer: [
        "Dois certificados, um do curso básico e outro do curso avançado de qualidade de software, desde que tenha realizado os dois cursos, com cumprimento dos requisitos de aprovação.",
      ],
    },
    {
      question: "Qual o critério de classificação?",
      answer: [
        "As 30 melhores classificações no teste de conhecimentos em informática básica.",
      ],
    },
    {
      question: "Qual o critério de desempate?",
      answer: [
        "Beneficiário de programas sociais do Governo Federal",
        "Maior tempo de experiência na área",
        "Maior nota na etapa teórica",
      ],
    },
    {
      question: "Qual a frequência mínima para eu receber o certificado?",
      answer: ["Frequência de 75% em sala de aula."],
    },
    {
      question: "Preciso pagar para realizar o curso?",
      answer: [
        "Não, o curso é realizado pelo Instituto Joga Junto  em parceria com a Prefeitura de Ilhabela e é oferecido gratuitamente para todos os aprovados no processo seletivo.",
      ],
    },
    {
      question: "Eu preciso passar por todas as etapas do processo de seleção?",
      answer: [
        "Sim. Todos os candidatos devem passar por todas as etapas do processo de seleção. Caso alguma etapa não seja concluída, haverá desclassificação.",
      ],
    },
    {
      question: "Tenho menos que 17 anos, posso fazer o curso?",
      answer: [
        "A idade mínima para fazer o curso é de 16 anos completos.",
      ],
    },
    {
      question: "Vou fazer 16 anos durante o curso, posso fazer minha inscrição?",
      answer: [
        "Não. No momento da sua inscrição, você já precisa ter 16 anos.",
      ],
    },
    {
      question: "Posso fazer o curso mesmo tendo mais de 24 anos?",
      answer: [
        "Sim, ainda que você tenha mais que 24 anos, você pode fazer o curso normalmente.",
      ],
    },
    {
      question: "Posso fazer o curso mesmo tendo estudado em escola particular?",
      answer: [
        "Sim, você pode fazer o curso normalmente.",
      ],
    },
  ];

  return (
    <FAQContainer>
      <h1 className="title">FAQ (Perguntas Frequentes)</h1>
      <FAQ faqs={faqs} />
    </FAQContainer>
  );
};

export default FAQs;
