import { Container } from "../..";
import { useForm } from "react-hook-form";
import { ProvaSchema, ProvaSchemaType } from "../../../../schema/provaSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const Prova = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProvaSchemaType>({
    resolver: zodResolver(ProvaSchema),
  });

  const handleForm = async (data: ProvaSchemaType) => {
    const transformedData = {
      ...data,
      questionOne: parseInt(data.questionOne),
      questionTwo: parseInt(data.questionTwo),
      questionThree: parseInt(data.questionThree),
      questionFour: parseInt(data.questionFour),
      questionFive: parseInt(data.questionFive),
      questionSix: parseInt(data.questionSix),
      questionSeven: parseInt(data.questionSeven),
      questionEight: parseInt(data.questionEight),
      questionNine: parseInt(data.questionNine),
      questionTen: parseInt(data.questionTen),
      questionEleven: parseInt(data.questionEleven),
      questionTwelve: parseInt(data.questionTwelve),
      questionThirteen: parseInt(data.questionThirteen),
      questionFourteen: parseInt(data.questionFourteen),
    };
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://api.jogajuntoinstituto.org/hotsite/students/exam/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          question_1: transformedData.questionOne,
          question_2: transformedData.questionTwo,
          question_3: transformedData.questionThree,
          question_4: transformedData.questionFour,
          question_5: transformedData.questionFive,
          question_6: transformedData.questionSix,
          question_7: transformedData.questionSeven,
          question_8: transformedData.questionEight,
          question_9: transformedData.questionNine,
          question_10: transformedData.questionTen,
          question_11: transformedData.questionEleven,
          question_12: transformedData.questionTwelve,
          question_13: transformedData.questionThirteen,
          question_14: transformedData.questionFourteen,
        }),
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      localStorage.setItem("quizForm", "true");
      console.log(responseData);
      window.location.reload();
    } else {
      console.error("Erro ao enviar os dados para a API");
    }
  };

  console.log(errors);
  return (
    <Container>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="boxSh responsiveProva"
      >
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            1:(CESGRANRIO 2023) Nos últimos meses, o campo da comunicação ganhou
            um concorrente que pode substituir o ser humano em uma conversa e,
            até mesmo, produzir respostas em tempo real.
          </h1>
          <label className="hLabel" htmlFor="q1-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option1"
              value={3}
            />
            Java
          </label>

          <label className="hLabel" htmlFor="q1-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option2"
              value={2}
            />
            Phyton
          </label>

          <label className="hLabel" htmlFor="q1-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option3"
              value={1}
            />
            ChatGPT
          </label>

          <label className="hLabel" htmlFor="q1-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option4"
              value={4}
            />
            Java-script
          </label>

          <label className="hLabel" htmlFor="q1-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option5"
              value={5}
            />
            Nenhuma das alternativas
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            2: (SABESP 2014) Correspondem, respectivamente, aos elementos placa
            de som, editor de texto, modem, editor de planilha e navegador de
            internet:
          </h1>
          <label className="hLabel" htmlFor="q2-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option1"
              value={2}
            />
            software, software, hardware, software e hardware.
          </label>

          <label className="hLabel" htmlFor="q2-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option2"
              value={4}
            />
            hardware, software, software, software e hardware.
          </label>

          <label className="hLabel" htmlFor="q2-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option3"
              value={3}
            />
            hardware, software, hardware, hardware e software
          </label>

          <label className="hLabel" htmlFor="q2-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option4"
              value={2}
            />
            software, hardware, hardware, software e software.
          </label>

          <label className="hLabel" htmlFor="q2-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option5"
              value={1}
            />
            hardware, software, hardware, software e software.
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            3: (TRE/SP 2012) O sistema operacional de um computador consiste em
            um:
          </h1>
          <label className="hLabel" htmlFor="q3-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option2"
              value={1}
            />
            software de gerenciamento, que serve de interface entre os recursos
            disponíveis para uso do computador e o usuário, sem que este tenha
            que se preocupar com aspectos técnicos do hardware.
          </label>
          <br />
          <label className="hLabel" htmlFor="q3-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option3"
              value={3}
            />
            conjunto de procedimentos programados, armazenados na BIOS, que é
            ativado tão logo o computador seja ligado
          </label>
          <br />
          <label className="hLabel" htmlFor="q3-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option4"
              value={4}
            />
            conjunto de dispositivos de hardware para prover gerenciamento e
            controle de uso dos componentes de hardware, software e firmware.
          </label>
          <br />
          <label className="hLabel" htmlFor="q3-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option5"
              value={5}
            />
            hardware de gerenciamento que serve de interface entre os recursos
            disponíveis para uso do computador e o usuário, sem que este tenha
            que se preocupar com aspectos técnicos do software.
          </label>
          <br />
          <label className="hLabel" htmlFor="q3-option6">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option6"
              value={6}
            />
            conjunto de procedimentos programados, armazenados na BIOS, que é
            ativado tão logo o computador seja ligado.
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            4: (Vunesp/TJ-SP) Sabendo que é verdadeira a afirmação “Todos os
            alunos de Fulano foram aprovados no concurso”, então é
            necessariamente verdade:
          </h1>
          <label className="hLabel" htmlFor="q4-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option1"
              value={5}
            />
            Fulano não foi aprovado no concurso.
          </label>

          <label className="hLabel" htmlFor="q4-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option2"
              value={4}
            />
            Se Roberto não é aluno de Fulano, então ele não foi aprovado no
            concurso
          </label>

          <label className="hLabel" htmlFor="q4-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option3"
              value={1}
            />
            Se Carlos não foi aprovado no concurso, então ele não é aluno de
            Fulano
          </label>

          <label className="hLabel" htmlFor="q4-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option4"
              value={2}
            />
            Fulano foi aprovado no concurso
          </label>

          <label className="hLabel" htmlFor="q4-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option5"
              value={3}
            />
            Se Elvis foi aprovado no concurso, então ele é aluno de Fulano.
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            5: (IFRN 2023) No método Scrum de gerenciamento de projeto, os
            artefatos auxiliam as equipes a gerenciarem o desenvolvimento de
            software. Dentro do Scrum, o artefato que lista as funcionalidades
            desejadas do produto é o
          </h1>
          <label className="hLabel" htmlFor="q5-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option1"
              value={5}
            />
            burnup chart.
          </label>

          <label className="hLabel" htmlFor="q5-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option2"
              value={4}
            />
            product incremente
          </label>

          <label className="hLabel" htmlFor="q5-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option3"
              value={3}
            />
            sprint backlog.
          </label>

          <label className="hLabel" htmlFor="q5-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option4"
              value={1}
            />
            product backlog
          </label>

          <label className="hLabel" htmlFor="q5-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option5"
              value={2}
            />
            Nenhuma das alternativas.
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            6: (FUNRIO) Sabe-se que todo B é A e que algum C é A. Segue-se
            necessariamente que:
          </h1>
          <label className="hLabel" htmlFor="q6-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option1"
              value={3}
            />
            todo A é B.
          </label>

          <label className="hLabel" htmlFor="q6-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option2"
              value={2}
            />
            algum C é B.
          </label>

          <label className="hLabel" htmlFor="q6-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option3"
              value={1}
            />
            pelo menos um A é B
          </label>

          <label className="hLabel" htmlFor="q6-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option4"
              value={4}
            />
            todo A é C
          </label>

          <label className="hLabel" htmlFor="q6-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option5"
              value={5}
            />
            nenhum B é C.
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            7: (IFRS) Como forma de obter dados sigilosos, é muito comum pessoas
            receberem um grande número de e-mails em sua caixa postal
            solicitando dados pessoais e financeiros. Essas mensagens procuram
            induzir o usuário a acessar páginas que supostamente são de seu
            “Internet Banking”. Esse cenário constitui uma prática de:
          </h1>
          <label className="hLabel" htmlFor="q7-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option1"
              value={2}
            />
            DoS
          </label>

          <label className="hLabel" htmlFor="q7-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option2"
              value={1}
            />
            Phishing
          </label>

          <label className="hLabel" htmlFor="q7-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option3"
              value={3}
            />
            Scam
          </label>

          <label className="hLabel" htmlFor="q7-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option4"
              value={4}
            />
            Publishing
          </label>

          <label className="hLabel" htmlFor="q7-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option5"
              value={5}
            />
            Pote de mel
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            8: (Enem) Jogar baralho é uma atividade que estimula o raciocínio.
            Um jogo tradicional é a Paciência, que utiliza 52 cartas.
            Inicialmente são formadas sete colunas com as cartas. A primeira
            coluna tem uma carta, a segunda tem duas cartas, a terceira tem três
            cartas, a quarta tem quatro cartas, e assim sucessivamente até a
            sétima coluna, a qual tem sete cartas, e o que sobra forma o monte,
            que são as cartas não utilizadas nas colunas. <br /> A quantidade de
            cartas que forma o monte é
          </h1>
          <label className="hLabel" htmlFor="q8-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option1"
              value={3}
            />
            21.
          </label>

          <label className="hLabel" htmlFor="q8-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option2"
              value={1}
            />
            24
          </label>

          <label className="hLabel" htmlFor="q8-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option3"
              value={2}
            />
            26
          </label>

          <label className="hLabel" htmlFor="q8-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option4"
              value={4}
            />
            28
          </label>

          <label className="hLabel" htmlFor="q8-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option5"
              value={5}
            />
            31
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            9: (FGV/TCE-SE) Duas tartarugas estavam juntas e começaram a
            caminhar em linha reta em direção a um lago distante. A primeira
            tartaruga percorreu 30 metros por dia e demorou 16 dias para chegar
            ao lago. A segunda tartaruga só conseguiu percorrer 20 metros por
            dia e, portanto, chegou ao lago alguns dias depois da primeira.
            Quando a primeira tartaruga chegou ao lago, o número de dias que ela
            teve que esperar para a segunda tartaruga chegar foi:
          </h1>
          <label className="hLabel" htmlFor="q9-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option1"
              value={1}
            />
            8
          </label>

          <label className="hLabel" htmlFor="q9-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option2"
              value={3}
            />
            9
          </label>

          <label className="hLabel" htmlFor="q9-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option3"
              value={2}
            />
            10
          </label>

          <label className="hLabel" htmlFor="q9-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option4"
              value={4}
            />
            12
          </label>

          <label className="hLabel" htmlFor="q9-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option5"
              value={5}
            />
            15
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            10: (IFES) Recentemente, vários sites de instituições ligadas ao
            governo brasileiro foram alvos de ataques. A técnica utilizada é
            conhecida por produzir um elevado número de solicitações de serviços
            com o objetivo de retardar as respostas às solicitações legítimas e
            causar a indisponibilidade do serviço. O método de ataque descrito é
            conhecido como:
          </h1>
          <label className="hLabel" htmlFor="q10-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option1"
              value={2}
            />
            Cavalo de Tróia
          </label>

          <label className="hLabel" htmlFor="q10-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option2"
              value={1}
            />
            Negação de serviço (DoS)
          </label>

          <label className="hLabel" htmlFor="q10-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option3"
              value={3}
            />
            Porta de entrada
          </label>

          <label className="hLabel" htmlFor="q10-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option4"
              value={4}
            />
            Engenharia Social
          </label>

          <label className="hLabel" htmlFor="q10-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option5"
              value={5}
            />
            Spam
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            11: (IFRN 2023) Um arquivo JSON (JavaScript Object Notation) é um
            padrão aberto para troca de dados entre sistemas. Para assegurar o
            uso adequado desse tipo de arquivo, foi criada a linguagem
            declarativa JSON Schema. Sobre o conceito de JSON Schema é correto
            afirmar:
          </h1>
          <label className="hLabel" htmlFor="q11-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option1"
              value={3}
            />
            Cria uma representação visual dos dados JSON
          </label>

          <label className="hLabel" htmlFor="q11-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option2"
              value={1}
            />
            Descreve a estrutura e as restrições dos dados JSON
          </label>

          <label className="hLabel" htmlFor="q11-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option3"
              value={2}
            />
            Comprime os dados JSON para economizar espaço de armazenamento
          </label>

          <label className="hLabel" htmlFor="q11-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option4"
              value={4}
            />
            Encripta os dados JSON para protegê-los contra acessos não
            autorizados.
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            12: (IFRN 2023) Os requisitos de software são descrição dos recursos
            e funcionalidades do sistema alvo e são comumente classificados em
            requisitos funcionais e requisitos não funcionais. Sobre os
            requisitos não funcionais sabe-se que:
          </h1>
          <label className="hLabel" htmlFor="q12-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option1"
              value={1}
            />
            descrevem as restrições e características de qualidade do software.
          </label>

          <label className="hLabel" htmlFor="q12-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option2"
              value={4}
            />
            definem as etapas do ciclo de vida do software.
          </label>

          <label className="hLabel" htmlFor="q12-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option3"
              value={3}
            />
            definem as interfaces de comunicação com outros sistemas
          </label>

          <label className="hLabel" htmlFor="q12-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option4"
              value={2}
            />
            detalham as funcionalidades específicas do software
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            13: (IFBA2020) HTML é uma linguagem de marcação que descreve a estrutura
            de um documento. Essa linguagem é utilizada para desenvolver páginas
            Web. Sobre o HTML seguem-se três afirmações: <br /> I - Páginas
            criadas em HTML sempre são visualizadas da mesma forma em
            navegadores diferentes, mesmo quando executados em plataformas de
            hardware diferentes. <br /> II - As páginas escritas em HTML são
            arquivos de texto no formato ASCII. <br /> III - O HTML possui um
            conjunto previamente definido de tags, no entanto o usuário pode
            criar as suas próprias tags. <br /> É correto apenas o que se afirma
            em
          </h1>
          <label className="hLabel" htmlFor="q13-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option1"
              value={4}
            />
            I.
          </label>

          <label className="hLabel" htmlFor="q13-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option2"
              value={1}
            />
            II.
          </label>

          <label className="hLabel" htmlFor="q13-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option3"
              value={2}
            />
            III.
          </label>

          <label className="hLabel" htmlFor="q13-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option4"
              value={3}
            />
            I e II.
          </label>

          <label className="hLabel" htmlFor="q13-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option5"
              value={5}
            />
            II e III.
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            14: Um algoritmo é uma sequência finita e ordenada de ações
            executáveis ou instruções que visam obter uma solução para um
            determinado tipo de problema. Alguns exemplos de algoritmos que
            podemos citar são: receitas culinárias, manual de instalação de
            aparelhos eletrônicos, instruções para chegarmos em algum lugar
            (como o metrô, por exemplo) e até um manual para montagem de móveis.
            Pensando em uma sequência simples de instruções para troca do pneu
            furado de um carro, quais seriam as alternativas que preencheriam,
            de forma lógica, as lacunas em branco?
          </h1>
          
          <img
            style={{
              width: "100%",
            }}
            src="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/prova.jpg"
            alt="img prova"
          />
          
          <label className="hLabel" htmlFor="q14-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFourteen")}
              id="q14-option1"
              value={2}
            />
            
            2 - colocar o estepe; 6 - ligar o carro e voltar à sua rota; 10 -
            pegar as ferramentas necessárias.
          </label>
<br />
          <label className="hLabel" htmlFor="q14-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFourteen")}
              id="q14-option2"
              value={1}
            />
            2 - pegar as ferramentas necessárias; 6 - colocar o estepe; 10 -
            ligar o carro e voltar à sua rota.
          </label>
          <br />
          <label className="hLabel" htmlFor="q14-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFourteen")}
              id="q14-option3"
              value={3}
            />
            2 - ligar o carro e voltar à sua rota; 6 - pegar as ferramentas
            necessárias; 10 - colocar o estepe.
          </label>
          <br />
          <label className="hLabel" htmlFor="q14-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFourteen")}
              id="q14-option4"
              value={4}
            />
            nenhuma das alternativas
          </label>
        </div>

        <button type="button" onClick={handleSubmit(handleForm)}>
          Enviar
        </button>
      </form>
    </Container>
  );
};
