import { useDispatch } from "react-redux";
import { nextScreen } from "../store/checkMyRepoSlice";
import { ErrorMessage, Input } from "../components/customUI";
import { ScreenContainer } from "../components/customUI";
import NavigationBar from "../components/NavigationBar";
import { useEffect, useRef, useState } from "react";

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
    <ScreenContainer>
      <NavigationBar title={title} nextDisabled={isNextDisabled} />
      <form
        onSubmit={(ev) => {
          if (!isNextDisabled) dispatch(nextScreen());
          ev.preventDefault();
        }}
      >
        <Input
          ref={inputRef}
          style={{ minWidth: "400px" }}
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
    </ScreenContainer>
  );
};
export default InputScreen;
