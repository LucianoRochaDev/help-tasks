import styled from "styled-components";
import { Colors } from "../shared/colors";

export const BackgroundContainer = styled.div`
  min-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(
    rgba(85, 85, 255, 1) 10%,
    rgba(0, 189, 255, 1) 100%
  );
`;

export const MainContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const MainContainerTodoList = styled(MainContainerLogin)`
  background-color: ${Colors.primaryTints.tint4};
`;
