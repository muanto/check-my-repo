import { useDispatch } from "react-redux";

import { nextScreen, prevScreen } from "../store/checkMyRepoSlice";

import { Button, Title } from "../components/customUI";
import styled from "styled-components";
import { NextIcon, PrevIcon } from "./icons";

const NavigationBarWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;

  ${Title} {
    padding: 0 20px;
  }
`;
const NavigationButton = styled(Button)`
  background: rgb(237, 242, 246);
  color: rgb(0, 0, 0);
  padding: 8px;

  &:disabled {
    background: rgba(237, 242, 246, 0.5);
    color: rgba(0, 0, 0, 0.3);
  }
`;
interface NavigationBarProps {
  title: string;
  nextShow?: boolean;
  nextDisabled?: boolean;
  prevShow?: boolean;
  prevDisabled?: boolean;
}
const NavigationBar = ({
  title,
  nextShow = true,
  nextDisabled = false,
  prevShow = true,
  prevDisabled = false,
}: NavigationBarProps) => {
  const dispatch = useDispatch();

  return (
    <NavigationBarWrapper>
      <div>
        {prevShow && (
          <NavigationButton
            data-testid="prev-button"
            disabled={prevDisabled}
            onClick={() => dispatch(prevScreen())}
          >
            <PrevIcon />
          </NavigationButton>
        )}
      </div>

      <Title>{title}</Title>

      <div>
        {nextShow && (
          <NavigationButton
            data-testid="next-button"
            disabled={nextDisabled}
            onClick={() => dispatch(nextScreen())}
          >
            <NextIcon />
          </NavigationButton>
        )}
      </div>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;
