import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { setUsername, setRepositoryName } from "./store/checkMyRepoSlice";
import { AppContainer } from "./components/customUI";
import WelcomeScreen from "./screens/WelcomeScreen";
import SendScreen from "./screens/SendScreen";
import InputScreen from "./screens/InputScreen";
import SuccessScreen from "./screens/SuccessScreen";

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
          inputPlaceholder="Scrivi il tuo username di github"
          onInputChange={function (value: string): void {
            dispatch(setUsername(value));
          }}
        />
      )}
      {currentScreen === 2 && (
        <InputScreen
          title="Repository"
          inputValue={repositoryName}
          inputPlaceholder="Scrivi il nome del repo di github"
          onInputChange={function (value: string): void {
            dispatch(setRepositoryName(value));
          }}
        />
      )}
      {currentScreen === 3 && <SendScreen />}

      {currentScreen === 4 && <SuccessScreen />}
    </AppContainer>
  );
}
