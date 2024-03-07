import styled from "styled-components";

export const FAQContainer = styled.div`
  .title {
    font-size: 3rem;
    color: #588b46;
  }
  .wrapper {
    max-width: 100rem;
  }
  .respQuestion {
    max-width: 49rem;
  }

  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
  margin-top: 5rem;
  div {
    align-items: center;
  }
`;

export const ContainerQuestions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  .openClass {
    cursor: pointer;
    background-color: #fff;
    padding: 2em;
    width: 50rem;
    margin-top: 20px;
    border-radius: 5px;
  }
  @media only screen and (max-width: 768px) { /* Tablets e dispositivos menores */
    .openClass {
      width: 100%; /* Altera a largura para 100% em dispositivos menores */
    }
  }
`;
