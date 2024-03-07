import { useState } from "react";
import { CardsProps } from "../../../interface/cards";
import { cardTwo } from "../../../utils/cardtwo";
import {
  ContainerCard,
  Background,
  ImageWrapper,
  OpacityOverlay,
} from "./styles";

export const CardTwo = ({ image, alt, className, titleCard }: CardsProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Background>
      <ContainerCard
        className={className}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ImageWrapper style={{ opacity: hovered ? 0 : 1 }}>
          <img src={image} alt={alt} />
          <OpacityOverlay style={{ display: hovered ? "none" : "block" }}>
            <span className="titleOpacity">{titleCard}</span>
          </OpacityOverlay>
        </ImageWrapper>
        <OpacityOverlay style={{ display: hovered ? "block" : "none" }}>
          {cardTwo.map((item) => {
            return (
              <div className="Card">
                <span className="titleCard mtoptwo">
                  <strong>{item.Programa}</strong>
                </span>
                {item.Fases.map((fase, index) => (
                  <div key={index}>
                    <span className="tiitlecard">
                     
                        <span>{fase.Nome}</span>
                     
                    </span>
                    <br />
   
                    {fase.Descrição && (
                      <h2 className="tiitlecard">
                         {fase.Descrição}
                      </h2>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </OpacityOverlay>
      </ContainerCard>
    </Background>
  );
};
