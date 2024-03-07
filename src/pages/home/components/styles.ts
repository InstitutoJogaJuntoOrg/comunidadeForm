import styled from "styled-components";

export const Background = styled.div`
  position: relative;
`;

export const ContainerCard = styled.div`
  position: relative;
  width: 499px;
  height: 600px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: 900px) {
    width: 320px;
    height: 300px;
    flex-direction: column;
    align-items: center;
  }
  &:hover {
    box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const StepsContainer = styled.div`
  margin-top: 9rem;
  padding: 1rem 5rem;
  margin-bottom: 5rem;
  width: 100%;

  .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    width: 5rem !important;
    height: 5rem !important;
    font-size: 3rem;
    color: #FCD700;
    font-weight: 900;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    background-color: #95d07f;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-number {
    background: #95d07f;
  }
  .p-steps .p-steps-item:before {
    top: 70%;
    border-top: 4px solid #95d07f;
  }

  @media (max-width: 775px) {
    .p-steps.p-readonly .p-steps-item {
      display: none;
    }
    .pass {
      display: block !important;
      color: white;
      font-size: 1.5rem;
      text-align: center;

      margin-bottom: 1rem;
      font-weight: 500;
    }
  }
  .pass {
    display: none;
  }

  p {
    font-size: 0.5rem;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 875px) {
    grid-template-columns: repeat(1, 3fr);
  }
    @media (max-width: 975px) {
    grid-template-columns: repeat(1, 3fr);
  }
  div {
    padding: 2rem;
    margin-top: 22px;

    background-color: #FCD700;
    max-width: 20rem;
    background-color: #54993a;
    max-width: 15rem;

    text-align: left;
    border-radius: 22px;
    display: flex;
    align-items: center;
    p {
      color: white;
      font-size: 1.2rem;
      @media (max-width: 1000px) {
        font-size: 1.2rem;
        padding: 1rem 1rem;
        text-align: center;
      }
    }
    @media (max-width: 775px) {
      max-width: 20rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    scale:1.7;
    object-fit: cover;
  }
`;

export const OpacityOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(23, 23, 23, 0.91) 0%,
    #FCD700 0%,
    rgba(255, 255, 255, 0) 100%
  );
  .titletwo {
    @media (max-width: 900px) {

      font-size: 0.7rem!important;
    }
  }
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s linear;
  .tiitlecard {
    font-size: 1.2rem;
    font-weight: 400;
    @media (max-width: 900px) {
      font-size: 0.7rem;
    }
  }
  .Card {
    padding: 2rem;
    display: flex;
    gap: 1rem;
    color: #1b512d;
    line-height: 22px;
    flex-direction: column;
    @media (max-width: 900px) {
      font-size: 0.7rem;
      line-height: 12px;
    }
  }
  .mtop {
    margin-top: 22%;
    @media (max-width: 900px) {
      margin-top: 0%;
    }
  }
  .mtoptwo {
    margin-top: 5%;
    @media (max-width: 900px) {
      margin-top: 0%;
    }
  }
  .titleCard {
    font-size: 1.5rem;
    @media (max-width: 900px) {
      font-size: .8rem!important;
    }

  }
  .desc {
    margin-top: -5px !important;
  }
  .titleOpacity {
    position: absolute;
    top: 80%;
    left: 10%;
    font-size: 34px;
    font-style: normal;
    font-weight: 800;
    color: white;
    transition: 1s linear;


    @media (max-width: 900px) {
      top:76%;
      left: 5%;
      font-size: 24px;
    }
  }
  p {
    justify-content: center;
    align-items: center;
    display: flex;
    color: #1b512d;
    margin-top: 40%;
    font-weight: 600;
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;
