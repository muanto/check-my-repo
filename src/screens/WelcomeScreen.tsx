import { useDispatch } from "react-redux";
import { nextScreen } from "../store/checkMyRepoSlice";
import { ScreenContainer } from "../components/customUI";
import { NextIcon } from "../components/icons";
import { Heading, Text, Button, VStack, Box } from "@chakra-ui/react";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <Box
      data-state="open"
      animation={"slide-fade-in"}
      animationDuration="slowest"
      animationStyle={{ _open: "slide-fade-in", _closed: "slide-fade-out" }}
    >
      <VStack>
        <Heading size="5xl" fontWeight={700}>
          Benvenuto
        </Heading>
        <Text mb={10} textStyle="4xl" fontWeight={300} lineHeight={1.5}>
          Nelle prossime schermate verra richiesto di inserire <br /> username e
          nome del repository del tuo progetto github
        </Text>
        <Button onClick={() => dispatch(nextScreen())} colorPalette="blue">
          Procediamo
          <NextIcon />
        </Button>
      </VStack>
    </Box>
  );
};

export default WelcomeScreen;
