import { Button, SendButton } from "../components/buttons";
import { useDispatch, useSelector } from "react-redux";
import { nextScreen } from "../store/checkMyRepoSlice";
import { DataValue, ErrorMessage, Title } from "../components/typo";
import { ScreenContainer } from "../components/containers";
import NavigationBar from "../components/NavigationBar";
import usePushMoreIO from "../hooks/usePushMoreIO";
import { RootState } from "../store/store";
import { useEffect } from "react";

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

export default CheckScreen;
