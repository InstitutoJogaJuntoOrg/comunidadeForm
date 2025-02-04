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
      questionquinze: parseInt(data.questionquinze),
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
        className=" responsiveProva"
      >
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            1: O que significa "dados"?.
          </h1>
          <label className="hLabel" htmlFor="q1-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option1"
              value={3}
            />
            Imagens e vídeos apenas
          </label>

          <label className="hLabel" htmlFor="q1-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option2"
              value={1}
            />
            Informações que podem ser analisadas
          </label>

          <label className="hLabel" htmlFor="q1-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option3"
              value={2}
            />
            Apenas números sem valor
          </label>

          <label className="hLabel" htmlFor="q1-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option4"
              value={4}
            />
            Apenas gráficos
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
            2: Se uma empresa tem mais vendas em dezembro do que em janeiro, qual pode ser a razão?
          </h1>
          <label className="hLabel" htmlFor="q2-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option1"
              value={2}
            />
            Janeiro é um mês mais quente
          </label>

          <label className="hLabel" htmlFor="q2-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option2"
              value={1}
            />
            Dezembro tem promoções e festas, atraindo mais clientes
          </label>

          <label className="hLabel" htmlFor="q2-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option3"
              value={3}
            />
            A empresa fechou em janeiro
          </label>

          <label className="hLabel" htmlFor="q2-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option4"
              value={2}
            />
            Janeiro não tem feriados
          </label>

        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            3: O que é um "gráfico"
          </h1>
          <label className="hLabel" htmlFor="q3-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option2"
              value={3}
            />
            Uma tabela de dados.
          </label>
          <br />
          <label className="hLabel" htmlFor="q3-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option3"
              value={1}
            />
            Uma maneira de representar dados visualmente, como barras ou linhas
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
            Um tipo de relatório longo
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
            Um programa de computador
          </label>
   
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            4: Se você olhar para um gráfico de vendas e ver que ele tem uma linha reta, o que isso pode significar?
          </h1>
          <label className="hLabel" htmlFor="q4-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option1"
              value={5}
            />
            As vendas aumentaram muito
          </label>

          <label className="hLabel" htmlFor="q4-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option2"
              value={4}
            />
            As vendas diminuíram bastante
          </label>

          <label className="hLabel" htmlFor="q4-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option3"
              value={1}
            />
            As vendas ficaram estáveis, sem grandes variaçõe
          </label>

          <label className="hLabel" htmlFor="q4-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFour")}
              id="q4-option4"
              value={2}
            />
            Não há vendas registradas
          </label>

      
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            5: Qual é a função de um "relatório" em uma empresa?
          </h1>
          <label className="hLabel" htmlFor="q5-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option1"
              value={5}
            />
            Criar gráficos bonitos
          </label>

          <label className="hLabel" htmlFor="q5-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option2"
              value={4}
            />
            Contar histórias sobre os dados
          </label>

          <label className="hLabel" htmlFor="q5-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option3"
              value={1}
            />
            Organizar e apresentar informações importantes para tomar decisões.
          </label>

          <label className="hLabel" htmlFor="q5-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFive")}
              id="q5-option4"
              value={3}
            />
            Escrever sobre os problemas da empresa
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
            6: Se você tivesse que prever o número de clientes que um produto terá no próximo mês, qual ferramenta seria útil?
          </h1>
          <label className="hLabel" htmlFor="q6-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option1"
              value={3}
            />
            Computador
          </label>

          <label className="hLabel" htmlFor="q6-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option2"
              value={1}
            />
            Modelo preditivo
          </label>

          <label className="hLabel" htmlFor="q6-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option3"
              value={2}
            />
            Impressora
          </label>

          <label className="hLabel" htmlFor="q6-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSix")}
              id="q6-option4"
              value={4}
            />
             Telefone
          </label>

        
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            7: Se você tem a opção de escolher entre uma planilha com dados bem organizados e outra bagunçada, qual seria mais fácil de analisar?
          </h1>
          <label className="hLabel" htmlFor="q7-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option1"
              value={2}
            />
            A bagunçada
          </label>

          <label className="hLabel" htmlFor="q7-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option2"
              value={1}
            />
            A bem organizada
          </label>

          <label className="hLabel" htmlFor="q7-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option3"
              value={3}
            />
            Nenhuma das opções
          </label>

          <label className="hLabel" htmlFor="q7-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionSeven")}
              id="q7-option4"
              value={4}
            />
            Ambas são igualmente boas
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            8: O que você faria se encontrasse um dado faltante em sua pesquisa?
          </h1>
          <label className="hLabel" htmlFor="q8-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option1"
              value={3}
            />
            Ignoraria e seguiria em frente
          </label>

          <label className="hLabel" htmlFor="q8-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option2"
              value={2}
            />
            Deletaria todos os dados
          </label>

          <label className="hLabel" htmlFor="q8-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option3"
              value={1}
            />
            Tentaria descobrir o valor que falta ou removeria esse dado
          </label>

          <label className="hLabel" htmlFor="q8-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEight")}
              id="q8-option4"
              value={4}
            />
            Colocaria um valor aleatório
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            9: Se você tem 3 maçãs e compra 2 mais, quantas maçãs você tem agora?
          </h1>
          <label className="hLabel" htmlFor="q9-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option1"
              value={6}
            />
            2
          </label>

          <label className="hLabel" htmlFor="q9-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option2"
              value={3}
            />
           3
          </label>

          <label className="hLabel" htmlFor="q9-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option3"
              value={1}
            />
            5
          </label>

          <label className="hLabel" htmlFor="q9-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionNine")}
              id="q9-option4"
              value={4}
            />
            6
          </label>

        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            10: Qual dessas opções é um exemplo de um dado estruturado?
          </h1>
          <label className="hLabel" htmlFor="q10-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option1"
              value={2}
            />
            Imagem
          </label>

          <label className="hLabel" htmlFor="q10-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option2"
              value={3}
            />
            Texto em um blog
          </label>

          <label className="hLabel" htmlFor="q10-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option3"
              value={1}
            />
            Tabela com números de vendas
          </label>

          <label className="hLabel" htmlFor="q10-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTen")}
              id="q10-option4"
              value={4}
            />
            Vídeo
          </label>

        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            11: Se você olhar para um gráfico e ver que as barras estão sempre subindo, o que isso pode indicar?
          </h1>
          <label className="hLabel" htmlFor="q11-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option1"
              value={3}
            />
            Que os dados estão em declínio
          </label>

          <label className="hLabel" htmlFor="q11-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option2"
              value={2}
            />
            Que os dados estão constantes
          </label>

          <label className="hLabel" htmlFor="q11-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option3"
              value={1}
            />
            Que há um aumento nas vendas ou desempenho
          </label>

          <label className="hLabel" htmlFor="q11-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionEleven")}
              id="q11-option4"
              value={4}
            />
            Que os dados são confusos
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            12: Se a empresa tem mais lucro em meses de verão do que no inverno, qual é a conclusão mais provável?
          </h1>
          <label className="hLabel" htmlFor="q12-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option1"
              value={4}
            />
            O lucro é o mesmo em todos os meses
          </label>

          <label className="hLabel" htmlFor="q12-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option2"
              value={1}
            />
            O clima quente atrai mais clientes
          </label>

          <label className="hLabel" htmlFor="q12-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option3"
              value={3}
            />
            Os clientes compram mais no inverno
          </label>

          <label className="hLabel" htmlFor="q12-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwelve")}
              id="q12-option4"
              value={2}
            />
            Não há diferença de lucro entre as estações
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            13: Se você precisar tomar uma decisão importante com base em dados, o que você deve fazer primeiro?
          </h1>
          <label className="hLabel" htmlFor="q13-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option1"
              value={4}
            />
            Ignorar os dados
          </label>

          <label className="hLabel" htmlFor="q13-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option2"
              value={1}
            />
            Analisar os dados para entender o que eles estão dizendo
          </label>

          <label className="hLabel" htmlFor="q13-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option3"
              value={2}
            />
            Usar apenas sua intuição
          </label>

          <label className="hLabel" htmlFor="q13-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThirteen")}
              id="q13-option4"
              value={3}
            />
             Contar com a sorte
          </label>

        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            14: Se um número de vendas em janeiro foi 50 e em fevereiro foi 75, qual é a diferença entre os dois meses?
          </h1>
 
          <label className="hLabel" htmlFor="q14-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFourteen")}
              id="q14-option1"
              value={1}
            />
            25
          </label>

          <label className="hLabel" htmlFor="q14-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFourteen")}
              id="q14-option2"
              value={2}
            />
            100
          </label>

          <label className="hLabel" htmlFor="q14-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFourteen")}
              id="q14-option3"
              value={3}
            />
            50
          </label>

          <label className="hLabel" htmlFor="q14-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionFourteen")}
              id="q14-option4"
              value={4}
            />
            150
          </label>
        </div>
        <br />
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>
            15: Qual desses pode ser considerado um "KPI" (indicador-chave de performance)
          </h1>
 
          <label className="hLabel" htmlFor="q15-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionquinze")}
              id="q15-option1"
              value={1}
            />
            Número de clientes que compraram um produto
          </label>

          <label className="hLabel" htmlFor="q15-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionquinze")}
              id="q15-option2"
              value={2}
            />
            Nome do produto
          </label>

          <label className="hLabel" htmlFor="q15-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionquinze")}
              id="q15-option3"
              value={3}
            />
            Data da compra
          </label>

          <label className="hLabel" htmlFor="q15-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionquinze")}
              id="q15-option4"
              value={4}
            />
            Endereço do cliente
          </label>
        </div>

        <button type="button" onClick={handleSubmit(handleForm)}>
          Enviar
        </button>
      </form>
    </Container>
  );
};
