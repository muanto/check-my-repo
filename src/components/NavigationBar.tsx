import { useDispatch } from "react-redux";

import { nextScreen, prevScreen } from "../store/checkMyRepoSlice";

import { Title } from "../components/typo";
import styled from "styled-components";
import { NextIcon, PrevIcon } from "./icons";
import { Heading, Button } from "@chakra-ui/react";

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
          <Button
            size="sm"
            colorPalette="gray"
            data-testid="prev-button"
            disabled={prevDisabled}
            onClick={() => dispatch(prevScreen())}
          >
            <PrevIcon />
          </Button>
        )}
      </div>

      <Heading size="4xl" fontWeight={700} ml={5} mr={5}>
        {title}
      </Heading>

      <div>
        {nextShow && (
          <Button
            size="sm"
            colorPalette="gray"
            data-testid="next-button"
            disabled={nextDisabled}
            onClick={() => dispatch(nextScreen())}
          >
            <NextIcon />
          </Button>
        )}
      </div>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;
