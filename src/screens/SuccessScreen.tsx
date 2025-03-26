import { useDispatch } from "react-redux";
import { restart } from "../store/checkMyRepoSlice";
import { ScreenContainer } from "../components/customUI";
import { Button, Heading } from "@chakra-ui/react";

const SuccessScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScreenContainer>
      <Heading size="5xl" fontWeight={700} mb={10}>
        Respository mandato!
      </Heading>
      <Button colorPalette="blue" onClick={() => dispatch(restart())}>
        Home
      </Button>
    </ScreenContainer>
  );
};

export default SuccessScreen;
