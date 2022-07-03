import { Box, ButtonBase } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../../../shared/colors";

export const TodoListContainer = styled(Box)`
  width: 70vw;
  min-width: 280px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
  border-radius: 8px;
  padding: 16px 22px 8px 22px;
  margin: 10px 0;
  color: white;
  background: linear-gradient(
    rgba(85, 85, 255, 1) 10%,
    rgba(0, 189, 255, 1) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;
`;

export const ButtonBaseTask = styled(ButtonBase)`
  width: 100%;
  height: 45px;
`;

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 24px;
`;

export const TaskItemContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
  display: flex;
  border-radius: 6px;
  background-color: ${Colors.primaryTints.tint5};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 8px;
`;

export const LoadingTasksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 15px;
`;
