import {
  Box,
  FormControlLabel,
  Grid,
  Slide,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DefaultInput from "../../components/Input/DefaultInput";
import { CustomInput } from "../../components/Input/styles";
import {
  BackgroundContainer,
  MainContainerTodoList,
} from "../../components/MainContainer";
import ToolbarTodoList from "../../components/Toolbar/ToolbarTodoList";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Colors } from "../../shared/colors";
import * as S from "./styles";
import DataParaAlerta from "../../components/DatePicker/DataParaAlerta";

const TaskDetalhes = () => {
  const [slide, setSlide] = useState(true);
  const [receberAlerta, setReceberAlerta] = useState(false);

  const handleReceberAlerta = () => {
    setReceberAlerta((prevState) => !prevState);
  };

  return (
    <BackgroundContainer>
      <ToolbarTodoList />
      <MainContainerTodoList>
        <Box
          overflow="hidden"
          borderRadius="8px"
          padding="15px"
          sx={{ backgroundColor: "transparent" }}
        >
          <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
            <S.TodoListContainer>
              <Typography
                fontSize="clamp(19px, 1.3vw, 22px)"
                margin="0 0 -5px 0"
                color={Colors.white}
                fontFamily="Love Ya Like A Sister, cursive"
              >
                Detalhes
              </Typography>
              <Grid container item columnSpacing={4}>
                <Grid item xs={6}>
                  <DefaultInput label="Título" value="" onChange={() => {}} />
                </Grid>
                <Grid item xs={6}>
                  <DefaultInput label="Data" value="" onChange={() => {}} />
                </Grid>
                <Grid item xs={12}>
                  <DefaultInput
                    label="Notas"
                    value=""
                    onChange={() => {}}
                    multiline
                  />
                </Grid>
                <Grid
                  item
                  display="flex"
                  justifyContent="center"
                  xs={12}
                  mt={2}
                >
                  <Typography color={Colors.white}>
                    Receber Alerta?{" "}
                    <Switch
                      checked={receberAlerta}
                      onChange={handleReceberAlerta}
                    />
                  </Typography>
                </Grid>
                <DataParaAlerta />
              </Grid>
            </S.TodoListContainer>
          </Slide>
        </Box>
      </MainContainerTodoList>
    </BackgroundContainer>
  );
};

export default TaskDetalhes;
