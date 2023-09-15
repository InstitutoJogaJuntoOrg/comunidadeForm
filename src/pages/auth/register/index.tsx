import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BiShow } from "react-icons/bi";
import {
  RegisterSchemaType,
  RegisterSchema,
} from "../../../schema/registerSchema";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Checkbox } from "primereact/checkbox";
import { Footer } from "../../../components/footer";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const notifySuccess = () => toast.success("Usuário cadastrado com sucesso!");
  const [checked, setChecked] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [email, setEmail] = useState<string>(
    localStorage.getItem("email") || ""
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  function handleSubmitRegister(data: RegisterSchemaType) {
    const requestData = {
      username: data.name,
      password: data.password,
      email: data.email,
    };

    axios
      .post("https://back.ilhabelatech.com/users/", requestData)
      .then((response) => {
        notifySuccess();
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

  return (
  <>
    <Container>
      <ToastContainer />
      <h1>Registro</h1>
      <form
        onSubmit={handleSubmit(handleSubmitRegister)}
        style={{
          width: "30rem",
        }}
      >
        <FormField>
          <label>Qual o seu primeiro nome?</label>
          <InputText
            id="name"
            {...register("name")}
            aria-describedby="email-help"
            placeholder="Nome"
          />
        </FormField>

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
        <div
          className="card flex justify-content-center"
          style={{
            display: "flex",
            width: "100%",
            marginTop: "1rem",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Checkbox
            style={{ maxWidth: "30px" }}
            onChange={(e) => setChecked(!!e.checked)}
            checked={checked}
            required
          ></Checkbox>
          Aceitar os termos
        </div>

        <button
          style={{
            fontSize: "16px",
            borderRadius: "26px",
          }}
          type="submit"
        >
          Registrar
        </button>
        <br />
        <br />
      </form>
    </Container>
          <Footer />
          </>
  );
};
