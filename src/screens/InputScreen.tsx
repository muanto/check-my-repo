import { useDispatch } from "react-redux";
import { nextScreen } from "../store/checkMyRepoSlice";
import { ErrorMessage } from "../components/typo";
import { ScreenContainer } from "../components/customUI";
import NavigationBar from "../components/NavigationBar";
import { useEffect, useRef, useState } from "react";
import { Input, VStack } from "@chakra-ui/react";

interface InputScreenProps {
  title: string;
  inputValue: string;
  inputPlaceholder: string;
  onInputChange: (value: string) => void;
}
const InputScreen = ({
  title,
  inputValue,
  inputPlaceholder,
  onInputChange,
}: InputScreenProps) => {
  const dispatch = useDispatch();
  const [pristine, setPristine] = useState<Boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const isNextDisabled: boolean = inputValue.length === 0;
  return (
    <VStack minW={"50%"}>
      <NavigationBar title={title} nextDisabled={isNextDisabled} />
      <form
        onSubmit={(ev) => {
          if (!isNextDisabled) dispatch(nextScreen());
          ev.preventDefault();
        }}
      >
        <Input
          width={300}
          variant="flushed"
          ref={inputRef}
          value={inputValue}
          placeholder={inputPlaceholder}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
            if (pristine === true) {
              setPristine(false);
            }
            onInputChange(ev.target.value);
          }}
        />
      </form>
      <ErrorMessage>
        {!pristine && inputValue.length === 0 && "Valore richiesto"}
      </ErrorMessage>
    </VStack>
  );
};
export default InputScreen;
