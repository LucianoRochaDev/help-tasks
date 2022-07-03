import React from "react";
import * as S from "./styles";

interface Props {
  value: string | number;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  label: string;
  type?: string;
  multiline?: boolean;
}

const DefaultInput = ({ value, onChange, label, type, multiline }: Props) => {
  return (
    <S.CustomInput
      value={value}
      onChange={onChange}
      label={label}
      type={type ? type : "text"}
      variant="standard"
      margin="normal"
      multiline={multiline}
      // rows={multiline ? 3 : ""}
      maxRows={multiline ? 5 : ""}
      fullWidth
    />
  );
};

export default DefaultInput;
