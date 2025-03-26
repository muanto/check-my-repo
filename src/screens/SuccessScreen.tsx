import { useDispatch } from "react-redux";
import { restart } from "../store/checkMyRepoSlice";
import { ScreenContainer, Title, Button } from "../components/customUI";

const SuccessScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScreenContainer>
      <Title>Repository mandato!</Title>
      <Button onClick={() => dispatch(restart())}>Home</Button>
    </ScreenContainer>
  );
};

export default SuccessScreen;
