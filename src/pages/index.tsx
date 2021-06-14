import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  FormElementsContainer,
  ProPaper,
  ProContainer,
} from "ui/styles/pages/index.style";
import { Button, Typography, Container } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />

          <Typography color={"error"}>CEP inválido</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProPaper>
          <ProContainer>
            <UserInformation
              name={"Maby"}
              picture={"https://github.com/MariaGabrielaReis.png"}
              rating={5}
              description={"São José dos Campos"}
            />
            <UserInformation
              name={"Wallace"}
              picture={""}
              rating={4}
              description={"Monteiro Lobato"}
            />
            <UserInformation
              name={"Caio"}
              picture={""}
              rating={4}
              description={"Taubaté"}
            />
            <UserInformation
              name={"Giovanna"}
              picture={""}
              rating={5}
              description={"São José dos Campos"}
            />
          </ProContainer>
        </ProPaper>
      </Container>
    </div>
  );
}
