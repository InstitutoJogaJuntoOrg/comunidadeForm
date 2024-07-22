import styled from "styled-components";

export const ModalHome = styled.div`

  background-image: url('https://estaticos-ijj.s3.sa-east-1.amazonaws.com/Frame+11.png'); /* Substitua pelo caminho real da sua imagem */
  background-size: cover;
  background-repeat: no-repeat;
width: 800px;
height: 470px;
margin-top: -2.5rem;

a {
  color: white;
}
@media (max-width: 900px) {
  width: 270px;
height: 170px;
padding: 0rem;
background-size: contain;
    }
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  color: white;
  flex-direction: row;
  text-align: start;
  .contact {
    max-width: 300px;
    @media (max-width: 900px) {
     max-width: 80px;
    }
  }
 div>h1 {
  max-width: 480px;
  font-size: 3rem;
  @media (max-width: 900px) {
      font-size: 1rem;
    }
 }
 div>p{
  @media (max-width: 900px) {
      font-size: .7rem;
    }
 }
  .cadastro {
    display: flex;
    text-align: start;
    justify-content: center;
    flex-direction: column;
  }
  button {
    border: none;
    padding: 1.5rem 0rem;
    cursor: pointer;
    background-color: transparent;
    font-size: 2rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 600;
    text-align: start;
    gap: .5rem;
    
    @media (max-width: 900px) {
      svg {
        width: 20px;
      }
      font-size: .7rem;
    }
  }
`;
export const ContainerHome = styled.div`
  .subDescp {
    font-weight: 300;
    font-size: 20px;
    a {
      color: white;
      font-weight: 700;
    }
    @media (max-width: 900px) {
      font-size: 12px;
    }
  }

  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  .InitialMessage {
    max-width: 95%;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  .secondImg {
    img {
      height: auto;
      padding: 2rem;
      margin-top: 20%;
    }
  }
  section {
    position: absolute;
    top: -12%;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    @media (max-width: 900px) {
      font-size: 12px;
      top: -35%;
    }
    h1 {
      color: white;
      font-size: 96px;
      line-height: normal;
      font-weight: 900;
      margin: 0px;
      padding: 0px;
      @media (max-width: 1200px) {
        font-size: 66px;
      }
      @media (max-width: 1000px) {
        font-size: 40px;
      }
    }
  }
`;
export const ContainerCardLayout = styled.div`
  display: flex;
  margin-top: -22rem;
  gap: 3rem;
  justify-content: center;
  width: 100%;
  @media (max-width: 1900px) {
    margin-top: -15rem;
  }
  @media (max-width: 1700px) {
    margin-top: -10rem;
  }
  @media (max-width: 1600px) {
    margin-top: -10rem;
  }
  @media (max-width: 1300px) {
    margin-top: -10rem;
  }
  @media (max-width: 1100px) {
    margin-top: -5rem;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  text-align: center;
  color: white;
  height: 20px;
  @media (max-width: 1400px) {
    margin-top: 1rem !important;
  }

  gap: 1rem;
  span {
    font-size: 1rem;
    font-weight: 500;
  }
  button {
    cursor: pointer;
    margin-top: 1rem;
    background-color: #72b65a;
    box-shadow: 10px 4px 75px 0px rgba(0, 0, 0, 0.25);
    border-radius: 53px;
    border: none;
    padding: 1rem 5rem;
    font-size: 30px;
    color: white;
    font-weight: 600;
    @media (max-width: 1000px) {
      font-size: 20px;
    }
  }
`;
export const BannerContainer = styled.div`
margin-top: 40px;
width: 100%;

  img {
    max-width: 100%;
    height: auto;
 
  }
`;
export const About = styled.div`
  margin-top: 10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  h1 {
    font-size: 5rem;
    color: #FCD700;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.5rem;
    padding: 1rem 0;
    @media (max-width: 1000px) {
      font-size: 1rem;
      padding: 1rem 0;
    }
    color: #FCD700;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 800px) {
    height: 100%;
  }
  padding-top: 2rem;
  p {
    margin-top: 1rem;
    max-width: 900px;
  }
  background-color: black;
  padding-top: 3rem;
  color: white;
  padding: 5rem;
  flex-direction: column;
  font-size: 1.5rem;
  @media (max-width: 800px) {
    font-size: 1rem;
    gap: 0rem;
  }

  gap: 2rem;
  .button-help {
      background-color: #fcd700;
      border-radius: 16px;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  .banners {
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    justify-content: start;
 
    @media (max-width: 800px) {
       margin-top: 4rem;
  }
    img {
      width:25%;
      @media (max-width: 800px) {
        width:100%;
  }
    }
 
  }
 .subtitle {
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    max-width: 100%;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    button {
     padding: 1rem 2rem;
    }
    img {
      max-width: 50%;
    }
  }
`