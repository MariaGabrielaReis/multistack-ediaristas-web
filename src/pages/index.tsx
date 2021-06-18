import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  FormElementsContainer,
  ProPaper,
  ProContainer,
} from "ui/styles/pages/index.style";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const {
    cep,
    setCep,
    cepValid,
    searchPro,
    error,
    housekeeper,
    searchDone,
    loading,
    housekeeperRemaining,
  } = useIndex();

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
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {error && <Typography color={"error"}>{error}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValid || loading}
            onClick={() => searchPro(cep)}
          >
            {loading ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {searchDone &&
          (housekeeper.length > 0 ? (
            <ProPaper>
              <ProContainer>
                {housekeeper.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProContainer>

              <Container sx={{ textAlign: "center" }}>
                {housekeeperRemaining > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {housekeeperRemaining}{" "}
                    {housekeeperRemaining > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponível na sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}
