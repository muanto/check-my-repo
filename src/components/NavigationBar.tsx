import { NavigationButton } from "../components/buttons";
import { useDispatch } from "react-redux";

import { nextScreen, prevScreen } from "../store/checkMyRepoSlice";

import { Title } from "../components/typo";
import styled from "styled-components";

export const NavigationBarWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;

  ${Title} {
    margin: 0 20px;
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
            disabled={prevDisabled}
            onClick={() => dispatch(prevScreen())}
          >
            {"<"}
          </NavigationButton>
        )}
      </div>

      <Title>{title}</Title>

      <div>
        {nextShow && (
          <NavigationButton
            disabled={nextDisabled}
            onClick={() => dispatch(nextScreen())}
          >
            {">"}
          </NavigationButton>
        )}
      </div>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;
