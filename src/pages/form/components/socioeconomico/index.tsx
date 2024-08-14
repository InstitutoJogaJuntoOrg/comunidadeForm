//form/componentes/socioeconômico

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ContainerButtons } from "../..";
import {
  SocioeconomicoSchema,
  SocioeconomicoSchemaType,
} from "../../../../schema/socioeconomico";
import { benefits } from "../options/benefits";
import { childrens } from "../options/childrens";
import { collor } from "../options/collor";
import { deficiency } from "../options/deficiency";
import { emprego } from "../options/emprego";
import { family } from "../options/family";
import { gender } from "../options/gender";
import { guildance } from "../options/guidance";
import { scholl } from "../options/scholl";
import { schollPublic } from "../options/schollPublic";
import { institutoOptions } from "../options/instituto";
import { studing } from "../options/studing";

export const SocioEconomico = ({
  setTabEnabled,
  setActiveTab,
  setVisible,
}: any) => {
  interface City {
    name: string;
    code: string;
  }
  const [selectedcollor, setSelectedcollor] = useState<City | null>(null);
  const [selectedchildrens, setSelectedchildrens] = useState<City | null>(null);
  const [selectedemprego, setSelectedEmprego] = useState<any>('');
  const [selectedguildance, setSelectedguildance] = useState<City | null>(null);
  const [selectedfamily, setSelectedfamily] = useState<City | null>(null);
  const [selectedscholl, setSelectedscholl] = useState<City | any>(null);
  const [selectedgender, setSelectedgender] = useState<City | null>(null);
  const [selectedBenefits, setSelectedBenefits] = useState<City | any>(null);
  const [selectedSchollPublic, setselectedSchollPublic] = useState<City | null>(
    null
  );
  const [selectedStuding, setSelectedStuding] = useState<any>(null);
  const [selectedDeficiency, SetSelectedDeficiency] = useState<City | null>(
    null
  );
  const [selectedInstitutoOptions, setSelectedInstitutoOptions] =
    useState(null);
  const [hasFormBeenSubmitted, setHasFormBeenSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SocioeconomicoSchemaType>({
    resolver: zodResolver(SocioeconomicoSchema),
  });

  console.log(hasFormBeenSubmitted);

  const apiUrl =
  "https://api.jogajuntoinstituto.org/hotsite/students/socioeconomics/";
  async function sendSocioEconomicInfo(data: SocioeconomicoSchemaType) {
    localStorage.setItem("socioeconomicForm", "true");
    try {
      const salario = Number(data.income);
      if (Number.isNaN(salario)) {
        toast.error("Salario com valor incorreto.");
        return;
      }
  
      const socioeconomicData: any = {
        sociadata_physical_disability: data.deficiency,
        average_monthly_income: salario,
        sociodata_race: data.color,
        sociodata_gender: data.gender,
        sociodata_sexual_orientation: data.guidance,
        socioeconomic_has_children: Number(data.children),
        education_level: data.schooling,
        socioeconomic_receives_benefit: data.benefit,
        public_school: data.schollPublic,
        is_studying: data.isStuding,
        socioeconomic_average_family_income: salario,
        socioeconomic_people_at_home: data.family.name,
        employment_status: data.employment_status,
        where_found_us: data.howDidYouHearAboutInstitute ?? ""
      };
  
      if (data.schooling === "ensino_medio_incompleto") {
        socioeconomicData.schoolName = data.schollName;
      }
  
      if (data.isStuding === true) {
        socioeconomicData.current_course = data.current_course;
      }
  
      if (data.benefit === true) {
        socioeconomicData.socioeconomic_benefit_name = data.benefitsName;
      }
  
      const token = localStorage.getItem("token");
  
      const response = await axios.post(apiUrl, socioeconomicData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (response.status == 200 || response.status == 201) {
        toast.success("Formulário enviado com sucesso!");
        localStorage.setItem("subscription_code", response.data.subscription_code);
        setTabEnabled(false);
        setActiveTab(2);
         setVisible(true);
        return;
      }
  
      toast.error("Erro ao enviar o formulario, tente novamente mais tarde!");
    } catch (error) {
      toast.error("Erro ao enviar o formulario, tente novamente mais tarde!");
      console.log("error: ", error);
    }
  }
  
  console.log(errors);
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    const checkFormSubmission = async () => {
      try {
        const response = await axios.get(
          "https://api.jogajuntoinstituto.org/hotsite/students/personalinfo/"
        );

        localStorage.setItem("token", response.data.access);
        if (response.status === 200 || response.status === 201) {
          toast.success("Formulário enviado com sucesso!");
          setHasFormBeenSubmitted(true);
        } else if (response.status === 400) {
          toast.error("Erro ao enviar formulário");
        } else if (response.status === 401) {
          if (response.data && response.data.detail) {
            toast.error(response.data.detail); // Exibir a mensagem de erro da API
          } else {
            toast.error("Erro ao enviar formulário"); // Mensagem de erro padrão
          }
        }
      } catch (error: any) {
        if (error.response && error.response.status === 500) {
          toast.error("Erro ao enviar formulário");
          setTabEnabled(false);
        }
      }
    };

    checkFormSubmission();
  }, []);

  return (
    <div
      style={{
        width: "2rem",
      }}
    >
      <form
        onSubmit={handleSubmit(sendSocioEconomicInfo)}
        className="boxSh"
        style={{
          maxWidth: "40rem",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="inputForm"
          >
            <label>Possui algum tipo de deficiência física? *</label>

            <Dropdown
              value={selectedDeficiency}
              options={deficiency}
              optionLabel="name"
              onChange={(e) => {
                SetSelectedDeficiency(e.value);
                setValue("deficiency", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.deficiency
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="inputForm"
          >
            <label>Qual gênero você se identifica? *</label>
            <Dropdown
              value={selectedgender}
              options={gender}
              optionLabel="name"
              onChange={(e) => {
                setSelectedgender(e.value);
                setValue("gender", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.gender
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              showClear
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="card flex justify-content-center inputForm"
          >
            <label>Qual sua situação de emprego? *</label>
            <Dropdown
              value={selectedemprego}
              options={emprego}
              optionLabel="name"
              onChange={(e) => {
                setSelectedEmprego(e.value);
                setValue("employment_status", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.employment_status
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              showClear
            />
            {selectedemprego != "desempregado" && (
              <>
                <label>Qual nome da empresa: *</label>
                <InputText
                  {...register("company_name")}
                  id="company_name"
                  aria-describedby="username-help"
                  className={
                    errors.company_name
                      ? "p-invalid w-full md:w-14rem"
                      : "w-full md:w-14rem"
                  }
                  placeholder="Nome da empresa"
                />
              </>
            )}
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="card flex justify-content-center inputForm"
          >
            <label>Tem filhos? *</label>
            <InputText
              {...register("children")}
              id="renda"
              type="number"
              aria-describedby="username-help"
              className={
                errors.children
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              placeholder="0"
            />

          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            className="inputForm"
          >
            <label>Qual a renda média mensal da sua família? *</label>
            <InputText
              {...register("income")}
              id="renda"
              aria-describedby="username-help"
              className={
                errors.income
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              placeholder="R$"
            />
          </div>
        </div>
        <br />
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="inputForm"
          >
            <label>Cor/raça *</label>
            <Dropdown
              value={selectedcollor}
              options={collor}
              optionLabel="name"
              onChange={(e) => {
                setSelectedcollor(e.value);
                setValue("color", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.color
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="inputForm"
          >
            <label>Qual sua orientação sexual? *</label>
            <Dropdown
              value={selectedguildance}
              options={guildance}
              optionLabel="name"
              onChange={(e) => {
                setSelectedguildance(e.value);
                setValue("guidance", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.guidance
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              showClear
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="inputForm"
          >
            <label>Números de membros da família? *</label>
            <Dropdown
              value={selectedfamily}
              options={family}
              optionLabel="name"
              onChange={(e) => {
                setSelectedfamily(e.value);
                setValue("family", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.family
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              showClear
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="card flex justify-content-center inputForm"
          >
            <label>Qual sua escolaridade: *</label>
            <Dropdown
              value={selectedscholl}
              options={scholl}
              optionLabel="value"
              optionValue="name"
              onChange={(e) => {
                setSelectedscholl(e.value);
                setValue("schooling", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.schooling
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
            />
            {selectedscholl === "ensino_medio_incompleto" && (
              <>
              <br />
                <label>Qual nome da escola: *</label>
                <InputText
                  {...register("schollName")}
                  id="schollName"
                  aria-describedby="username-help"
                  className={
                    errors.schollName
                      ? "p-invalid w-full md:w-14rem"
                      : "w-full md:w-14rem"
                  }
                  placeholder="Nome da escola"
                />
              </>
            )}
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="card flex justify-content-center inputForm"
          >
            <label>
              Você ou alguém da sua família recebe algum benefício social? *
            </label>

            <Dropdown
              value={selectedBenefits}
              options={benefits}
              optionLabel="name"
              onChange={(e) => {
                setSelectedBenefits(e.value);
                setValue("benefit", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.benefit
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              showClear
            />
            {selectedBenefits === true && (
              <>
                <label>Qual o nome do benefício: *</label>
                <InputText
                  {...register("benefitsName")}
                  id="benefitsName"
                  aria-describedby="username-help"
                  className={
                    errors.benefitsName
                      ? "p-invalid w-full md:w-14rem"
                      : "w-full md:w-14rem"
                  }
                  placeholder="Nome do benefício"
                />
              </>
            )}
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="card flex justify-content-center inputForm"
          >
            <label>Você esta estudando ? *</label>

            <Dropdown
              value={selectedStuding}
              options={studing}
              optionLabel="name"
              onChange={(e) => {
                setSelectedStuding(e.value);
                setValue("isStuding", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.isStuding
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              showClear
            />
            <br />
            {selectedStuding === true && (
              <div   className="inputForm">
                <label>Qual o nome do curso: *</label>
                <InputText
                  {...register("current_course")}
                  id="current_course"
                  aria-describedby="username-help"
                  className={
                    errors.current_course
                      ? "p-invalid w-full md:w-14rem"
                      : "w-full md:w-14rem"
                  }
                  placeholder="Nome do curso"
                />
              </div>
            )}
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".0rem",
            }}
            className="inputForm"
          >
            <label>É aluno de escola pública? *</label>

            <Dropdown
              value={selectedSchollPublic}
              options={schollPublic}
              optionLabel="name"
              onChange={(e) => {
                setselectedSchollPublic(e.value);
                setValue("schollPublic", e.value);
              }}
              placeholder="Selecione"
              className={
                errors.schollPublic
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              showClear
            />
          </div>
          <br />
          <div
            className="inputForm"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>Onde conheceu o instituto? *</label>

            <Dropdown
              options={institutoOptions}
              value={selectedInstitutoOptions}
              optionLabel="name"
              onChange={(e) => {
                setSelectedInstitutoOptions(e.value);
                setValue("howDidYouHearAboutInstitute", e.value);
              }}
              placeholder="Onde conheceu o instituto?"
              className={
                errors.howDidYouHearAboutInstitute
                  ? "p-invalid w-full md:w-14rem"
                  : "w-full md:w-14rem"
              }
              showClear
            />
          </div>
        </div>
        <ContainerButtons>
          <button type="submit" onClick={handleSubmit(sendSocioEconomicInfo)}>
            Enviar
          </button>
        </ContainerButtons>
      </form>
    </div>
  );
};
