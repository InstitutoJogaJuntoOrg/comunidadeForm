import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
  ul {
    display: block;
    list-style: none;
    padding: 0;
    text-align: center;
  }
}

  li {
    color: white;

  }

  a {
    font-size: 24px;
    color: white;
    text-decoration: none;
  }
`;