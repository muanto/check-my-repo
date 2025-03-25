import { Button } from "./components/buttons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import {
  restart,
  setUsername,
  setRepositoryName,
} from "./store/checkMyRepoSlice";
import { Title } from "./components/typo";
import { AppContainer, ScreenContainer } from "./components/containers";
import WelcomeScreen from "./screens/WelcomeScreen";
import CheckScreen from "./screens/CheckScreen";
import InputScreen from "./screens/InputScreen";

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
