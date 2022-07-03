import { FieldError } from "react-hook-form";

interface Props {
  error?: FieldError;
  sx?: any;
}

export const MensagemDeErro = ({ error, sx }: Props) => {
  return error ? (
    <p style={{ color: "red", marginTop: "4px", fontSize: "15px", ...sx }}>
      {error.message}
    </p>
  ) : null;
};
