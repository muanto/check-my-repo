import { useDispatch } from "react-redux";
import { nextScreen } from "../store/checkMyRepoSlice";
import {
  ScreenContainer,
  Title,
  Button,
  Paragraph,
} from "../components/customUI";
import { NextIcon } from "../components/icons";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScreenContainer>
      <Title>Benvenuto</Title>
      <Paragraph>
        Nelle prossime schermate verra richiesto di inserire <br /> username e
        nome del repository del tuo progetto github
      </Paragraph>
      <Button onClick={() => dispatch(nextScreen())}>
        Procediamo
        <NextIcon />
      </Button>
    </ScreenContainer>
  );
};

export default WelcomeScreen;
