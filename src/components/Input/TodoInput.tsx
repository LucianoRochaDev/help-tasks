import React from "react";
import * as S from "./styles";

const TodoInput = () => {
  return (
    <S.CustomInput
      label="Nova Tarefa"
      type="text"
      variant="standard"
      margin="normal"
      fullWidth
    />
  );
};

export default TodoInput;
