import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #FCD700;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 93px;
    justify-content: space-between;
    padding: 0.2rem 4rem;

    li {
      z-index: 10;
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 700;
      text-decoration: none;
   

      &.active {
        color: #FCD700;
        background-color: #FCD700;
        border-radius: 60px;
      }
    }
  }

  ul {
    justify-content: flex-end;
    display: flex;
    gap: 25px;
  }

  .hamburger-icon {
    display: none;
    position: fixed;
    left: 90%;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    top: 1rem;
    z-index: 10;
    img {
      width: 70%;
    }
    ul {
      display: none;
    }

    .show-links ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      padding: 1rem;
      box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.25);
      z-index: 1;
      position: absolute;
      top: 93px;
      left: 0;
      width: 100%;
    }

    .hamburger-icon {
      display: block;
      z-index: 100;
      color: #000;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  z-index: 10;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #000;

  &:hover {
    color: white;
    background-color:#000;
    border-radius: 60px;
  }

  &.active {
    color: white;
    background-color:#000;
    border-radius: 60px;
  }
`;
