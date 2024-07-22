import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField } from "../register/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Footer } from "../../../components/footer";
import {
  EmailFormSchemaPass,
  EmailFormSchemaPassType,
} from "../../../schema/resetPassword";


export const PasswordReset = () => {
  const navigate = useNavigate();
  const notifySuccess = () => toast.success("Email enviado com sucesso!");

  useState<boolean>(false);
  const [email, setEmail] = useState<string>(
    localStorage.getItem("email") || ""
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormSchemaPassType>({
    resolver: zodResolver(EmailFormSchemaPass),
  });

  function ErrosSending() {
    if (errors.email) {
      toast.error("Por informe um email válido");
    }
  }

  function handleSubmitRegister(data: EmailFormSchemaPassType) {
    const requestData = {
      email: data.email,
    };
    console.log(errors);
    axios
      .post(`${import.meta.env.VITE_API_URL}/password_reset/`, requestData)
      .then((response) => {
        notifySuccess();
        setTimeout(() => {
          navigate("/");
        }, 2000);
        if (response.status === 201) {
          localStorage.setItem("email", email);
          setTimeout(() => {
            navigate("/newpassword");
          }, 2000);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          let response = error.response.data.message;
          ErrosSending();
          console.error("Erro ao cadastrar o usuário:", response);
          toast.error(response);
        } else {
          console.error("Erro ao cadastrar o usuário:", error);
        }
      });
  }
  console.log(errors);
  return (
    <>
    
      <div className="heigh">
        <Container>
          <ToastContainer />
          <br />

          <h1 style={{
            color: "black"
          }}>Resetar senha</h1>
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
              <label>Email</label>
              <InputText
                id="email"
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="email-help"
                placeholder="Email"
                className={errors.email ? "p-invalid" : ""}
                value={email}
              />
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
            <br />
            <br />
          </form>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
