import { Button } from "../components/buttons";
import { useDispatch } from "react-redux";
import { nextScreen } from "../store/checkMyRepoSlice";
import { Title } from "../components/typo";
import { ScreenContainer } from "../components/containers";

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

export default WelcomeScreen;
