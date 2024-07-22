import { InputText } from "primereact/inputtext";
import { Container } from "../../form";
import { FormField } from "../register/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EmailFormSchemaType, EmailFormSchema } from "../../../schema/emailSchema";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../../../components/footer";


export const EmailPage = () => {
  const { handleSubmit, register } = useForm<EmailFormSchemaType>({
    resolver: zodResolver(EmailFormSchema),
  });
  const navigate = useNavigate();

  const notifySuccess = () => toast.success("Usuário encontrado");
  const notifyError = () => toast.info("Crie uma conta para prosseguir");

  const handleSubmitLogin = async (data: EmailFormSchemaType) => {
    try {
      const response = await axios.post(
        `https://devapi.jogajuntoinstituto.org/users/email_check/`,
        { email: data.email }
      );

      if (response.status === 200) {
        console.log("OK");
        localStorage.setItem("email", data.email);
        notifySuccess();

        setTimeout(() => {
          navigate('/auth');
        }, 2000);
      } 
    } catch (error) {
      notifyError();
      localStorage.setItem("email", data.email);
      console.log(data.email);
      setTimeout(() => {
        navigate('/register');
      }, 2000);
    }
  }

  return (
    <>
      <ToastContainer />
      <Container>
        <h1>Qual é seu email?</h1>
  <div className="h">
        <form
          onSubmit={handleSubmit(handleSubmitLogin)}
          style={{
            width: "30rem",
          }}
        >
          <FormField>
            <br />
        <span style={{
          color: 'white'
        }}>email</span>
        <br />
            <InputText
              id="email"
              {...register("email")}
              required
              aria-describedby="email-help"
              placeholder="Email"
            />
          </FormField>

          <button
            style={{
              fontSize: "16px",
              borderRadius: "26px",
            }}
            type="submit"
          >
            Prosseguir
          </button>
          <br />
          <br />
        </form>
  </div>
      </Container>
      <Footer />
    </>
  );
};
