import { useEffect, useState } from "react";
import MyDropdown from "../profile";
import { StyledNavLink } from "../styles";
import { MobileMenuContainer } from "./styles";

const MobileMenu = ({ closeMenu }: any) => {
  const [user, setUser] = useState<string | undefined>(undefined);

  useEffect(() => {
    const checkUserAuthentication = () => {
      const emailFromLocalStorage = localStorage.getItem("username");

      if (emailFromLocalStorage) {
        setUser(emailFromLocalStorage);
      }
    };

    checkUserAuthentication();
  }, []);

  return (
    <MobileMenuContainer>
      <div>
        {!user && (
          <StyledNavLink to="/login" onClick={closeMenu}>
            Inscrição
          </StyledNavLink>
        )}

        {user && (
          <StyledNavLink to={user ? "/inscricao" : "/auth"} onClick={closeMenu}>
            Inscrição
          </StyledNavLink>
        )}
        <li>
          <a
            style={{
              textDecoration: "none",
              color: "#f8fcf7",
            }}
            href="https://wa.me/5511945950731"
            target={"_blank"}
          >
            Ajuda
          </a>
        </li>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          {user && <MyDropdown />}
        </div>
      </div>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
