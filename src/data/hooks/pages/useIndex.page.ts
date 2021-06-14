import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/validationService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValid = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(""),
    [searchDone, setSearchDone] = useState(false),
    [loading, setLoading] = useState(false),
    [housekeeper, setHousekeeper] = useState([] as UserShortInterface[]),
    [housekeeperRemaining, setHousekeeperRemaining] = useState(0);

  return { cep, setCep, cepValid };
}
