import { mdiCheckBold, mdiDeleteForever } from "@mdi/js";
import { Box, Typography } from "@mui/material";
import React from "react";
import ItemIconButton from "../../components/Botao/ItemIconButton";
import * as S from "./styles";

interface Props {
  titulo: string;
}

const TaskItem = ({ titulo }: Props) => {
  return (
    <S.TaskItemContainer>
      <S.ButtonBaseTask
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        <Typography
          fontSize={"clamp(13.5px, 1.3vw, 15px)"}
          whiteSpace="nowrap"
          px="13px"
        >
          {titulo}
        </Typography>
      </S.ButtonBaseTask>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        pl="3px"
      >
        <ItemIconButton path={mdiCheckBold} />
        <ItemIconButton path={mdiDeleteForever} />
      </Box>
    </S.TaskItemContainer>
  );
};

export default TaskItem;
