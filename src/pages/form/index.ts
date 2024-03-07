import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  .options {
    background-color: #191919;
    border-radius: 16px;
    padding: 1rem;
    max-width: 900px;
    width: 100%;
  }
  padding-bottom: 6rem;
  .buttonYellow {
    background-color: #fcd700!important;
  }
  .inputForm {
    width: 100%;
    padding: 1rem 1rem;
    gap: 1rem;
    color: white;
    background-color: #191919;
display: flex;
flex-direction: column;
align-items: start;
input {
  background-color: transparent;
}
border-radius: 16px;
  }
  .containerRegister {
    height: 100vh;
  }
  .background-div2 {
    background-color: #fcd700;
    position: absolute;
    width: 41rem;
    border-radius: 76px;
    height: 28rem;
    top: 20rem;
    z-index: -1;
    @media (max-width: 800px) {
      display: none;
    }
  }
  .background-div {
    background-color: #fcd700;
    position: absolute;
    width: 41rem;
    border-radius: 76px;
    height: 28rem;
    top: 12rem;

    @media (max-width: 800px) {
      display: none;
    }
  }
  background: url("https://cdn.discordapp.com/attachments/566850308702208001/1153381517091934280/Group_168.png");
  background-size: cover;

  .margintop {
    margin-top: 2rem;
  }

  .modals {
    width: 42rem;
  }
  .h {
    height: 75vh;
  }
  #date {
    padding: 1rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 6px;
    color: white;
  }
  .success {
    text-align: center;
    margin-top: 10rem;
    padding: 5rem;
    border-radius: 6px;
    background-color: #fcd700;
    color: #000;
    font-weight: 600;
    p {
      font-weight: 400;
    }
  }
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  > h1 {
    margin-top: 2rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    color: white;
    font-size: 46px;
    @media (max-width: 800px) {
      font-size: 36px;
    }
  }

  .dadosSocieconomicos {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .flexEnd {
    justify-content: flex-end;
  }
  .inputCheck {
    width: 3%;
  }
  form {
    h1 {
      color: white;
    }
    .p-button {
      width: 100%;
    }
    .p-invalid {
      border: 2px solid red;
    }
    @media only screen and (max-width: 800px) {
      width: 39rem;
    }

    @media only screen and (max-width: 600px) {
      padding: 1rem;
      width: 21rem !important;
    }

    border-radius: 25px;
    box-shadow: 0px 15px 57px 0px rgba(0, 0, 0, 0.25);
    margin-top: 0rem;

    width: 51rem;
    padding: 1.5rem 3rem 1rem 3rem;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
      input {
        width: 100%;
      }
    }
    button {
      cursor: pointer;
      color: #001219;
      font-size: 2rem;
      margin-top: 2rem;
      background-color: #fcd700;
font-weight: 600;
font-family: Arial, Helvetica, sans-serif;
      border: none;
      padding: 1rem;
      border-radius: 6px;
      width: 100%;
    }
    h1 {
      font-size: 2.75rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
      font-weight: 600;
    }
  }
`;
export const ContainerSteps = styled.div`
  margin-top: 2rem;
`;
export const ContainerFlexInputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }
`;
export const ContainerButtons = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  gap: 5rem;
  @media only screen and (max-width: 600px) {
    gap: 1.5rem;
  }
  .back {
    background-color: #95d07f;
  }
  .buttonForm {
    cursor: pointer;
    width: 153px !important;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000;
    text-align: center;
    border-radius: 26px !important;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  .buttonFormSubmit {
    cursor: pointer;
    width: 153px !important;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-shrink: 0;
    color: black;
    text-align: center;
    border-radius: 26px !important;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;
