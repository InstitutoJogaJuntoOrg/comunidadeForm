import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField } from "../register/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Footer } from "../../../components/footer";
import {
    newPassword,
  newPasswordType,
} from "../../../schema/newPassword";
import { BiShow } from "react-icons/bi";


export const NewPassword = () => {
  const [uid, setUuid] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const navigate = useNavigate();
  const notifySuccess = () => toast.success('Senhas alteradas com sucesso!');

  useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
  useState<boolean>(false);
  
  function ErrosSending() {
    if (errors.password) {
      toast.error(
        "Senha inválida"
      );
    }
    if (errors.confirmPassword) {
        toast.error(
          "As senhas não são iguais"
        );
      }
  }

  const [email] = useState<string>(
    localStorage.getItem("email") || ""
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newPasswordType>({
    resolver: zodResolver(newPassword),
  });


  function handleSubmitRegister(data: newPasswordType) {
    
    const requestData = {
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    axios
      .post(`https://devapi.jogajuntoinstituto.org/password_reset/${uid}/${token}/`, requestData)
      .then((response) => {
        notifySuccess();
        setTimeout(() => {
          navigate("/auth");
        }, 2000);
        console.log(response.status)
          if (response.status === 201) {
          localStorage.setItem("email", email);
          
          setTimeout(() => {
            navigate("/auth");
          }, 2000);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          let response = error.response.data.message;
          console.error("Erro ao cadastrar o usuário:", response);
          toast.error(response);
        } else {
          console.error("Erro ao cadastrar o usuário:", error);
        }
      });
  }

  useEffect(() => {
    function getUrlParams(): Record<string, string> {
        const params: Record<string, string> = {};

        // Primeiro, dividimos a URL na primeira ocorrência de '?'
        const parts = window.location.search.split('?');
        parts.shift();  // Remove o primeiro item vazio

        // Itera sobre todas as partes
        for (let part of parts) {
            const [key, value] = part.split('=');
            params[key] = decodeURIComponent(value); // decodifica os valores dos parâmetros
        }
        
        setToken(params.token);
        setUuid(params.uid);
        return params;
    }

    const params = getUrlParams();
    
}, []);

  console.log(errors);
  return (
    <>
      <div className="heigh">
        
        <Container>
          
          <ToastContainer />
          <br />

          <h1>Qual sua nova senha?</h1>
          <br />
          <p
            style={{
              padding: "1rem",
            }}
          >
            O código, será enviado para o seu e-mail para que possa realizar a
            redefinição de senha.
          </p>
          <form
            onSubmit={handleSubmit(handleSubmitRegister)}
            style={{
              width: "30rem",
            }}
          >
                <FormField>
            <label>Senha</label>
            <div style={{ position: "relative", display: "flex" }}>
              <InputText
                id="password"
                {...register("password")}
                aria-describedby="password-help"
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                className={errors.confirmPassword ? "p-invalid" : ""}
              />
              <BiShow
                className="icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </FormField>

          <FormField>
            <label>Repetir Senha</label>
            <div style={{ position: "relative", display: "flex" }}>
              <InputText
                id="repeatPassword"
                {...register("confirmPassword")}
                aria-describedby="repeatPassword-help"
                placeholder="Repetir Senha"
                className={errors.confirmPassword ? "p-invalid" : ""}
                type={showConfirmPassword ? "text" : "password"}
              />
              <BiShow
                className="icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
          </FormField>

            <button
              style={{
                fontSize: "16px",
                borderRadius: "26px",
              }}
              type="submit"
              onClick={ErrosSending}
            >
              Enviar
            </button>
            
          </form>
        </Container>
      </div>
 
      <Footer />
    </>
  );
};
