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
import { Footer } from "../../../components/footer";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const notifySuccess = () => toast.success("Usuário cadastrado com sucesso!");
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
    const cleanedPhone = data.phone.replace(/[\s\.-]/g, "");
    const requestData = {
      first_name: data.name,
      password: data.password,
      email: data.email,
      phone: cleanedPhone,
    };

    axios
      .post(`https://api.jogajuntoinstituto.org/hotsite/students/`, requestData)
      .then((response) => {
        notifySuccess();
        setTimeout(() => {
          navigate("/auth");
        }, 2000);
        if (response.status === 201) {
          localStorage.setItem("email", email);
          localStorage.setItem("username", data.name);
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
  console.log(errors);
  return (
    <div>
      <div className="containerAll2">
        <div className="vector">
          <img src="/Vector.png" alt="" />
        </div>
        <div className="vector2">
          <img src="/Vector2.png" alt="" />
        </div>

        <Container>
          <ToastContainer />
          <br />
          <br />
          <br />
          <div className="background-div2"></div>
          <div className="containerRegister">
            <form
              onSubmit={handleSubmit(handleSubmitRegister)}
              style={{
                width: "30rem",
              }}
            >
              <h1>Registro</h1>
              <FormField>
                <label>Qual o seu primeiro nome?</label>
                <InputText
                  id="name"
                  {...register("name")}
                  aria-describedby="email-help"
                  placeholder="Nome"
                  className={errors.name ? "p-invalid" : ""}
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
                <label>Telefone</label>
                <InputText
                  id="phone"
                  {...register("phone")}
                  aria-describedby="phone-help"
                  placeholder="Exemplo: 11945555555"
                  className={errors.phone ? "p-invalid" : ""}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "white",
                    marginTop: "6px",
                  }}
                >
                  {errors.phone?.message} Exemplo: 11945555555
                </span>
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
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
};
