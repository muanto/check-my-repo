import { useDispatch, useSelector } from "react-redux";
import { nextScreen } from "../store/checkMyRepoSlice";
import { ErrorMessage, Paragraph } from "../components/customUI";
import { ScreenContainer, Button } from "../components/customUI";
import NavigationBar from "../components/NavigationBar";
import usePushMoreIO from "../hooks/usePushMoreIO";
import { RootState } from "../store/store";
import { useEffect } from "react";

const SendScreen = () => {
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
      <NavigationBar title="Controllo dati inseriti" nextShow={false} />
      <Paragraph>/{username}</Paragraph>
      <Paragraph>/{repositoryName}</Paragraph>

      <Button onClick={!isLoading ? sendData : undefined} disabled={isLoading}>
        {isLoading ? "Invio in corso" : "Invio!"}
      </Button>

      <ErrorMessage>
        {pushMoreIo.state === "error"
          ? "Errore durante invio verificare e riprovare"
          : ""}
      </ErrorMessage>
    </ScreenContainer>
  );
};

export default SendScreen;
