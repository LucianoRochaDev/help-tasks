import React from "react";
import * as S from "./styles";

interface Props {
  inputAdicionarTask: string;
  setInputAdicionarTask: React.Dispatch<React.SetStateAction<string>>;
  onAdicionarTask: () => void;
}

const TodoInput = ({
  inputAdicionarTask,
  setInputAdicionarTask,
  onAdicionarTask,
}: Props) => {
  return (
    <S.DarkInput
      value={inputAdicionarTask}
      onChange={(event) => {
        setInputAdicionarTask(event.target.value);
      }}
      onKeyDown={(event) => {
        event.key === "Enter" && onAdicionarTask();
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
