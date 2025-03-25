import { Button } from "../components/buttons";
import { useDispatch } from "react-redux";
import { restart } from "../store/checkMyRepoSlice";
import { Title } from "../components/typo";
import { ScreenContainer } from "../components/containers";

const SuccessScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScreenContainer>
      <Title>Respository mandato!</Title>
      <Button onClick={() => dispatch(restart())}>Home</Button>
    </ScreenContainer>
  );
};

export default SuccessScreen;
