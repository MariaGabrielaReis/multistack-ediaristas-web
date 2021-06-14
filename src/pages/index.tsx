import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

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
    </div>
  );
}
