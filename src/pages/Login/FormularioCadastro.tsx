import { Box, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import BotaoLogin from "../../components/Botao/BotaoLogin";
import { LightInput } from "../../components/Input/styles";
import { MensagemDeErro } from "../../components/MensagemDeErro";
import { UserContext } from "../../context/UserContext";
import { UserCadastro } from "../../models/UserModel";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

interface Props {
  useFormCadastro: UseFormReturn<UserCadastro, object>;
  onRegistrarUsuario: (data: UserCadastro) => void;
  onLoginUsuario: (data: UserCadastro) => void;
  botaoDesabilitado: boolean;
}

const FormularioCadastro = ({
  useFormCadastro,
  onRegistrarUsuario,
  onLoginUsuario,
  botaoDesabilitado,
}: Props) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Box>
      <S.FormContainer>
        <S.FormTitulo>{`Bem Vindo(a)!`}</S.FormTitulo>
        <Typography
          marginTop={"12px"}
          fontWeight={500}
          fontSize={17}
          color={Colors.black}
        >
          {isLogin ? "Estávamos te esperando!" : "Ainda não possui Login?"}
        </Typography>
        <Grid container columnSpacing={8} px={1.5}>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={useFormCadastro.control}
              render={({ field: { value, onChange, onBlur } }) => (
                <LightInput
                  value={value ?? ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  label="E-mail"
                  type="email"
                  variant="standard"
                  margin="normal"
                  fullWidth
                />
              )}
            />
            <MensagemDeErro error={useFormCadastro.formState.errors.email} />
          </Grid>
          <Grid item xs={12} mt={"-5px"}>
            <Controller
              name="senha"
              control={useFormCadastro.control}
              render={({ field: { value, onChange, onBlur } }) => (
                <LightInput
                  value={value ?? ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  label="Senha"
                  type="password"
                  variant="standard"
                  margin="normal"
                  fullWidth
                />
              )}
            />
            <MensagemDeErro error={useFormCadastro.formState.errors.senha} />
          </Grid>
        </Grid>
        <BotaoLogin
          disabled={botaoDesabilitado}
          texto={isLogin ? "Login" : "Registrar-se"}
          onClick={
            isLogin
              ? useFormCadastro.handleSubmit(onLoginUsuario)
              : useFormCadastro.handleSubmit(onRegistrarUsuario)
          }
        />
      </S.FormContainer>
      <Typography
        marginY={"10px"}
        fontSize={"13px"}
        textAlign="center"
        width={"100%"}
        color={Colors.primaryTints.tint4}
      >
        Rocha Tecnologia &#174;
      </Typography>
    </Box>
  );
};

export default FormularioCadastro;
