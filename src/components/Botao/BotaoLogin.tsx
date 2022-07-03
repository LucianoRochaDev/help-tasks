import { Typography } from "@mui/material";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

interface Props {
  disabled: boolean;
  onClick: () => void;
  texto: string;
}

function BotaoLogin({ disabled, onClick, texto }: Props) {
  return (
    <S.ButtonBaseSocial
      sx={{ margin: "40px 0 18px 0" }}
      onClick={onClick}
      disabled={disabled}
    >
      <S.SocialContainer
        $disabled={disabled}
        style={{
          boxShadow: disabled
            ? "rgba(0, 0, 0, 0.1) 0px 1px 4px"
            : "rgba(0, 0, 0, 0.3) 0px 3px 8px",
        }}
      >
        <Typography
          marginX="auto"
          color={disabled ? Colors.gray4 : Colors.primaryTints.tint4}
        >
          {texto}
        </Typography>
      </S.SocialContainer>
    </S.ButtonBaseSocial>
  );
}

export default BotaoLogin;
