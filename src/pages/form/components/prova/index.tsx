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
    const response = await fetch(`${import.meta.env.VITE_API_URL}/quiz/`, {
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
        question_15: 1,
      }),
    });

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
      <form onSubmit={handleSubmit(handleForm)} className=" responsiveProva">
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            1: O computador é uma máquina destinada ao processamento de dados,
            capaz de obedecer a instruções que visam produzir certas
            transformações nesses dados para alcançar um fim determinado. Esta
            máquina, por sua vez, é formada por uma parte física e uma parte
            lógica, que são conhecidas como:
          </h1>
          <label className="hLabel" htmlFor="q1-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option1"
              value={3}
            />
            Disco rígido e Windows
          </label>

          <label className="hLabel" htmlFor="q1-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option2"
              value={2}
            />
            Programa e placa-mãe
          </label>

          <label className="hLabel" htmlFor="q1-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option3"
              value={1}
            />
            Hardware e software
          </label>

          <label className="hLabel" htmlFor="q1-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option4"
              value={4}
            />
            CPU e monitor
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
            2: Um aplicativo, também conhecido como app (do inglês application)
            ou aplicação é o nome dado a um software de computador que oferece
            funcionalidades para que um dispositivo possa executar determinadas
            tarefas necessárias ao usuário, como por exemplo, redigir um texto,
            fazer uma planilha de vendas, escutar músicas ou acessar a internet.
            Por falar em internet, quais dos aplicativos listados abaixo podemos
            utilizar para acessarmos a internet?
          </h1>
          <label className="hLabel" htmlFor="q2-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option1"
              value={2}
            />
            Microsoft Word, Photoshop e Excel
          </label>

          <label className="hLabel" htmlFor="q2-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option2"
              value={4}
            />
            Windows Explorer, Notepad ++ e Python
          </label>

          <label className="hLabel" htmlFor="q2-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option3"
              value={3}
            />
            Steam, Adobe Acrobat e Windows Media Player
          </label>

          <label className="hLabel" htmlFor="q2-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option4"
              value={2}
            />
            PowerPoint, Youtube e MySQL
          </label>

          <label className="hLabel" htmlFor="q2-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option5"
              value={1}
            />
            Google Chrome, Safari e Microsoft Edge
          </label>
        </div>
<br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            3: Já faz algum tempo que a internet se tornou uma ferramenta
            indispensável para realização de várias tarefas do nosso dia a dia,
            como executar operações bancárias, fazer compras, marcar consultas,
            enviar documentos, só para citar algumas. Muitas dessas tarefas são
            feitas por meio de sites. Para que possamos encontrar um site na
            internet, precisamos de seu "nome", por exemplo:
            "www.jogajuntoinstituto.org". Este "nome" é chamado de:
          </h1>
          <label className="hLabel" htmlFor="q3-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option1"
              value={2}
            />
            Link
          </label>

          <label className="hLabel" htmlFor="q3-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option2"
              value={1}
            />
            URL
          </label>

          <label className="hLabel" htmlFor="q3-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option3"
              value={3}
            />
            Nickname
          </label>

          <label className="hLabel" htmlFor="q3-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option4"
              value={4}
            />
            HTTPS
          </label>

          <label className="hLabel" htmlFor="q3-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option5"
              value={5}
            />
            Algoritmo
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            4: Seguindo a definição encontrada em um dicionário, o termo
            "projeto" pode ser definido como: <br /> <br /> 1 - desejo, intenção
            de fazer ou realizar (algo) no futuro; plano. <br /> 2 - descrição
            escrita e detalhada de um empreendimento a ser realizado; plano,
            delineamento, esquema. <br /> <br />
            Desta forma, podemos dizer que os projetos podem ter diversas
            finalidades, entre elas, sociais, de engenharia, pessoais, de
            tecnologia... Contudo, seja qual for a finalidade, em essência, o
            termo projeto pode ser definido como:
          </h1>
          <label className="hLabel" htmlFor="q4-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option1"
              value={5}
            />
            Uma estratégia constante de aperfeiçoamento, na qual as etapas se
            sucedem, sem fim programado.
          </label>

          <label className="hLabel" htmlFor="q4-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option2"
              value={4}
            />
            Um conjunto de fases previamente definidas, sem programação de fim
            ou início, mas que cumprem um propósito indeterminado
          </label>

          <label className="hLabel" htmlFor="q4-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option3"
              value={1}
            />
            Um esforço feito para atingir um objetivo, com início e fim
            programados.
          </label>

          <label className="hLabel" htmlFor="q4-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option4"
              value={2}
            />
            Um conjunto de estratégias modulares que se conectam e completam um
            ciclo contínuo de retroalimentação.
          </label>

          <label className="hLabel" htmlFor="q4-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option5"
              value={3}
            />
            Nenhuma das alternativas.
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            5: Em Tecnologia da Informação (TI), os projetos englobam soluções
            tecnológicas usadas para produzir, acessar, transmitir e gerenciar
            dados, podendo ser o desenvolvimento de um software para gestão
            comercial, um aplicativo de compras, de namoro e até um jogo (entre
            muitos outros). E, para que esses projetos alcancem o resultado
            planejado e obtenham sucesso, eles precisam de gestão. Entre os
            métodos de gestão utilizados em TI, podemos citar:
          </h1>
          <label className="hLabel" htmlFor="q5-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option1"
              value={5}
            />
            Diagrama, fluxograma e Kanban
          </label>

          <label className="hLabel" htmlFor="q5-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option2"
              value={4}
            />
            Trello, contínuo, cascata e normal
          </label>

          <label className="hLabel" htmlFor="q5-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option3"
              value={3}
            />
            Jira, Trello, Ishikawa e Venn
          </label>

          <label className="hLabel" htmlFor="q5-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option4"
              value={1}
            />
            Cascata, incremental, espiral e ágeis
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
            6: O Scrum é um sistema ágil de gerenciamento de projetos comumente
            usado no desenvolvimento de softwares, embora também seja usado em
            outros campos, incluindo pesquisa, vendas, marketing e educação. No
            Scrum, cada pessoa envolvida no projeto assume papéis e funções
            determinadas dentro do grupo. Entre estes papéis estão:
          </h1>
          <label className="hLabel" htmlFor="q6-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option1"
              value={3}
            />
            Gerente de projetos, Cliente, Presidente e Squad.
          </label>

          <label className="hLabel" htmlFor="q6-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option2"
              value={2}
            />
            Scrum Master, gerente geral, analista de testes e programadores.
          </label>

          <label className="hLabel" htmlFor="q6-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option3"
              value={1}
            />
            Scrum Master, Product Owner (dono do produto), cliente e time Scrum.
          </label>

          <label className="hLabel" htmlFor="q6-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option4"
              value={4}
            />
            Cliente, Presidente, Squad e Scrum Master
          </label>

          <label className="hLabel" htmlFor="q6-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option5"
              value={5}
            />
            Nenhuma das alternativas.
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            7: Partindo do pressuposto que todo software precisa preencher
            requisitos mínimos para ser lançado no mercado, qual é o principal
            objetivo do profissional de QA em um processo de desenvolvimento?
          </h1>
          <label className="hLabel" htmlFor="q7-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option1"
              value={2}
            />
            Acelerar o desenvolvimento de software
          </label>

          <label className="hLabel" htmlFor="q7-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option2"
              value={1}
            />
            Garantir que não haja bugs no software
          </label>

          <label className="hLabel" htmlFor="q7-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option3"
              value={3}
            />
            Minimizar os custos do projeto
          </label>

          <label className="hLabel" htmlFor="q7-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option4"
              value={4}
            />
            Criar documentação detalhada do software
          </label>

          <label className="hLabel" htmlFor="q7-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option5"
              value={5}
            />
            Melhorar a colaboração entre equipes
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            8: Para que um computador, notebook ou celular possam executar todas
            as suas funções, ele conta com um sistema operacional, ou seja, um
            software, ou um conjunto de softwares, que tem como papel gerenciar
            e administrar todos os recursos presentes em um sistema e servir de
            interface entre usuário e computador. São exemplos de sistema
            operacional, EXCETO:
          </h1>
          <label className="hLabel" htmlFor="q8-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option1"
              value={3}
            />
            Windows e macOS
          </label>

          <label className="hLabel" htmlFor="q8-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option2"
              value={2}
            />
            Linux Ubuntu e Android
          </label>

          <label className="hLabel" htmlFor="q8-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option3"
              value={1}
            />
            Brave e Android
          </label>

          <label className="hLabel" htmlFor="q8-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option4"
              value={4}
            />
            ChromeOS e Windows
          </label>

          <label className="hLabel" htmlFor="q8-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option5"
              value={5}
            />
            Linux Ubuntu e iOS
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            9: Uma das comodidades proporcionadas pela internet, seja para
            trabalho, lazer ou estudo, é a possibilidade de transferência
            instantânea de dados para e de qualquer lugar do planeta. As ações
            de mandar e receber arquivos via dispositivo conectado à internet
            recebem, respectivamente, os nomes de:
          </h1>
          <label className="hLabel" htmlFor="q9-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option1"
              value={4}
            />
            Pix e e-mail
          </label>

          <label className="hLabel" htmlFor="q9-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option2"
              value={3}
            />
            Wi-fi e download
          </label>

          <label className="hLabel" htmlFor="q9-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option3"
              value={2}
            />
            E-mail e HTTP
          </label>

          <label className="hLabel" htmlFor="q9-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option4"
              value={1}
            />
            Upload e download
          </label>

          <label className="hLabel" htmlFor="q9-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option5"
              value={5}
            />
            Upload e link
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            10: No mercado de tecnologia, notamos cada vez mais a preferência de
            profissionais em trabalhar remotamente, permitindo que atendam
            clientes em diferentes cidades e países, evitando assim custos com
            deslocamento e outras questões do trabalho presencial. Para realizar
            reuniões online, muitas vezes utiliza-se ferramentas como: Zoom,
            Skype, Google Meet. Qual das seguintes opções descreve uma
            característica exclusiva do Google Meet:
          </h1>
          <label className="hLabel" htmlFor="q10-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option1"
              value={1}
            />
            Integração com calendários Google
          </label>

          <label className="hLabel" htmlFor="q10-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option2"
              value={2}
            />
            Possibilidade de planos de fundo virtuais
          </label>

          <label className="hLabel" htmlFor="q10-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option3"
              value={3}
            />
            Suporte a chamadas telefônicas
          </label>

          <label className="hLabel" htmlFor="q10-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option4"
              value={4}
            />
            Gravação automática do áudio das reuniões
          </label>

          <label className="hLabel" htmlFor="q10-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option5"
              value={5}
            />
            Nenhuma das opções
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            11: O profissional de TI (tecnologia da informação) possui uma vasta
            área de atuação profissional, podendo exercer diversas funções,
            dependendo do seu conhecimento técnico, escolaridade, experiência,
            etc. São exemplos de áreas em que um profissionais de TI pode atuar,
            EXCETO:
          </h1>
          <label className="hLabel" htmlFor="q11-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option1"
              value={3}
            />
            Ciência de dados e administração de redes
          </label>

          <label className="hLabel" htmlFor="q11-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option2"
              value={2}
            />
            Desenvolvimento de sistemas e segurança cibernética
          </label>

          <label className="hLabel" htmlFor="q11-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option3"
              value={1}
            />
            Contabilidade e programação
          </label>

          <label className="hLabel" htmlFor="q11-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option4"
              value={4}
            />
            Testes de software e desenvolvimento mobile
          </label>

          <label className="hLabel" htmlFor="q11-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option5"
              value={5}
            />
            UX Design e UI Design
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            12: Complete a sentença com o próximo elemento da sequência 1, 1, 2,
            3, 5, 8, __
          </h1>
          <label className="hLabel" htmlFor="q12-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option1"
              value={5}
            />
            11
          </label>

          <label className="hLabel" htmlFor="q12-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option2"
              value={4}
            />
            58
          </label>

          <label className="hLabel" htmlFor="q12-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option3"
              value={3}
            />
            8
          </label>

          <label className="hLabel" htmlFor="q12-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option4"
              value={2}
            />
            0
          </label>

          <label className="hLabel" htmlFor="q12-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option5"
              value={1}
            />
            13
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            13: Complete a sentença com o próximo elemento da sequência 0, 1, 4,
            9, 16, 25, 36, __
          </h1>
          <label className="hLabel" htmlFor="q13-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option1"
              value={4}
            />
            49
          </label>

          <label className="hLabel" htmlFor="q13-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option2"
              value={3}
            />
            63
          </label>

          <label className="hLabel" htmlFor="q13-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option3"
              value={2}
            />
            99
          </label>

          <label className="hLabel" htmlFor="q13-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option4"
              value={1}
            />
            45
          </label>

          <label className="hLabel" htmlFor="q13-option5">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option5"
              value={5}
            />
            89
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
            <br />
            <br />
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
