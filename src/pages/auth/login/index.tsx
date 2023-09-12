import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField, Register } from "../register/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormInputs, loginFormSchema } from "../../../schema/loginSchema";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
export const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [data, setData] = useState();
  const navigate = useNavigate();
  const handleSubmitLogin = handleSubmit(async (data) => {
    try {
      const response = await axios.post(
        "http://back.ilhabelatech.com:8000/users/login/",
        { email: data.email, password: data.password }
      );
  
      if (response.status === 200) {
        console.log("logado");
        setData(response.data);
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        localStorage.setItem("username", response.data.username);
        toast.success("Autenticado com sucesso!");
  
        setTimeout(() => {
          navigate('/inscricao');
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          console.log("Erro de autenticação:", error.response.data.error);
          toast.error(error.response.data.error);
        } else {
          console.error("Erro ao fazer login:", error);
        }
      }
    }
  });
  

  console.log(data);

  return (
    <Container>
        <ToastContainer />
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit(handleSubmitLogin)}
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
            value={email}
          />
        </FormField>

        <FormField>
          <label>Senha</label>
          <InputText
            id="password"
            {...register("password")}
            aria-describedby="password-help"
            placeholder="Senha"
            type="password"
          />
        </FormField>

        <div
          style={{
            marginTop: "1rem",
            color: "white",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <span>Esqueci minha senha</span>
        </div>

        <button
          style={{
            fontSize: "16px",
            borderRadius: "26px",
          }}
          type="submit"
        >
          Fazer login
        </button>
        <br />
        <br />
      </form>

      <Register>
        <h3>Ainda não tem uma conta?</h3>
        <span className="register">
          <Link to={"/register"}>Clique aqui e registre-se</Link>
        </span>
      </Register>
    </Container>
  );
};
