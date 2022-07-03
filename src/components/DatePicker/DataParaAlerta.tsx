import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { CalendarPicker, StaticDatePicker } from "@mui/x-date-pickers";
import React from "react";
import * as S from "./styles";
import { CustomInput } from "../Input/styles";

const DataParaAlerta = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());
  return (
    <Grid item display="flex" justifyContent="center" xs={12}>
      <S.CalendarContainer>
        <CalendarPicker
          views={["month", "day"]}
          date={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </S.CalendarContainer>
    </Grid>
  );
};

export default DataParaAlerta;
