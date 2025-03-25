import React, { useEffect } from "react";

import { Button, SendButton } from "./components/buttons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import {
  restart,
  nextScreen,
  setUsername,
  setRepositoryName,
} from "./store/checkMyRepoSlice";
import { TextInput } from "./components/inputs";
import { DataValue, ErrorMessage, Title } from "./components/typo";
import NavigationBar from "./components/NavigationBar";
import { AppContainer, ScreenContainer } from "./components/containers";
import usePushMoreIO from "./hooks/usePushMoreIO";
interface InputScreenProps {
  title: string;
  inputValue: string;
  inputPlaceholder: string;
  onInputChange: (value: string) => void;
}
const InputScreen = ({
  title,
  inputValue,
  inputPlaceholder,
  onInputChange,
}: InputScreenProps) => {
  const dispatch = useDispatch();
  const [pristine, setPristine] = React.useState<Boolean>(true);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const isNextDisabled: boolean = inputValue.length === 0;
  return (
    <ScreenContainer>
      <NavigationBar title={title} nextDisabled={isNextDisabled} />
      <form
        onSubmit={(ev) => {
          if (!isNextDisabled) dispatch(nextScreen());
          ev.preventDefault();
        }}
      >
        <TextInput
          ref={inputRef}
          value={inputValue}
          placeholder={inputPlaceholder}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
            if (pristine === true) {
              setPristine(false);
            }
            onInputChange(ev.target.value);
          }}
        />
      </form>
      <ErrorMessage>
        {!pristine && inputValue.length === 0 && "Valore richiesto"}
      </ErrorMessage>
    </ScreenContainer>
  );
};

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScreenContainer>
      <Title>Benvenuto</Title>
      <p>
        Nelle prossime schermate verra richiesto di inserire <br /> username e
        nome del repository del tuo progetto github
      </p>
      <Button onClick={() => dispatch(nextScreen())}>Procediamo</Button>
    </ScreenContainer>
  );
};
const CheckScreen = () => {
  const dispatch = useDispatch();
  const pushMoreIo = usePushMoreIO();
  const { username, repositoryName } = useSelector(
    (state: RootState) => state.checkMyRepo
  );

  useEffect(() => {
    if (pushMoreIo.state === "success") {
      dispatch(nextScreen());
    }
  }, [dispatch, pushMoreIo.state]);

  const sendData = async () => {
    pushMoreIo.sendData({
      username: username,
      repositoryName: repositoryName,
    });
  };
  const isLoading: boolean = pushMoreIo.state === "loading";
  return (
    <ScreenContainer>
      <NavigationBar title="Controllo dati inriti" nextShow={false} />
      <DataValue>/{username}</DataValue>
      <DataValue>/{repositoryName}</DataValue>

      <SendButton
        onClick={!isLoading ? sendData : undefined}
        disabled={isLoading}
      >
        {isLoading ? "Invio in corso" : "Invio!"}
      </SendButton>

      <ErrorMessage>
        {pushMoreIo.state === "error"
          ? "Errore durante invio verificare e riprovare"
          : ""}
      </ErrorMessage>
    </ScreenContainer>
  );
};
const SuccessScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScreenContainer>
      <Title>Respository mandato!</Title>
      <Button onClick={() => dispatch(restart())}>Home</Button>
    </ScreenContainer>
  );
};
export default function App() {
  const dispatch = useDispatch();
  const { currentScreen, username, repositoryName } = useSelector(
    (state: RootState) => state.checkMyRepo
  );
  return (
    <AppContainer>
      {currentScreen === 0 && <WelcomeScreen />}
      {currentScreen === 1 && (
        <InputScreen
          title="Username"
          inputValue={username}
          inputPlaceholder="username"
          onInputChange={function (value: string): void {
            dispatch(setUsername(value));
          }}
        />
      )}
      {currentScreen === 2 && (
        <InputScreen
          title="Repository"
          inputValue={repositoryName}
          inputPlaceholder="scrivi il nome del repo github"
          onInputChange={function (value: string): void {
            dispatch(setRepositoryName(value));
          }}
        />
      )}
      {currentScreen === 3 && <CheckScreen />}

      {currentScreen === 4 && <SuccessScreen />}
    </AppContainer>
  );
}
