import React from "react";
import * as S from "./styles";

interface Props {
  inputAdicionarTask: string;
  setInputAdicionarTask: React.Dispatch<React.SetStateAction<string>>;
}

const TodoInput = ({ inputAdicionarTask, setInputAdicionarTask }: Props) => {
  return (
    <S.DarkInput
      value={inputAdicionarTask}
      onChange={(event) => {
        setInputAdicionarTask(event.target.value);
      }}
      label="Nova Tarefa"
      type="text"
      variant="standard"
      margin="normal"
      fullWidth
    />
  );
};

export default TodoInput;
