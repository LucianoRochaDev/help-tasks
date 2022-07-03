import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BackgroundContainer,
  MainContainerLogin,
} from "../../components/MainContainer";
import ToolbarLogin from "../../components/Toolbar/ToolbarLogin";
import { UserCadastro } from "../../models/UserModel";
import FormularioCadastro from "./FormularioCadastro";
import { UserCadastroSchema } from "../../models/UserModel.validation";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Cadastro = () => {
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);

  const { auth, cadastrarUsuario, loginUsuario } = useContext(UserContext);

  const useFormCadastro = useForm<UserCadastro>({
    mode: "onBlur",
    resolver: yupResolver(UserCadastroSchema),
  });

  const onRegistrarUsuario = async (data: UserCadastro) => {
    setBotaoDesabilitado(true);
    try {
      await cadastrarUsuario(auth, data.email, data.senha);
    } catch (error) {
      console.log({ error });
    } finally {
      setBotaoDesabilitado(false);
    }
  };

  const onLoginUsuario = async (data: UserCadastro) => {
    setBotaoDesabilitado(true);
    try {
      await loginUsuario(auth, data.email, data.senha);
    } catch (error) {
      console.log({ error });
    } finally {
      setBotaoDesabilitado(false);
    }
  };

  return (
    <BackgroundContainer>
      <ToolbarLogin />
      <MainContainerLogin>
        <FormularioCadastro
          useFormCadastro={useFormCadastro}
          onRegistrarUsuario={onRegistrarUsuario}
          onLoginUsuario={onLoginUsuario}
          botaoDesabilitado={botaoDesabilitado}
        />
      </MainContainerLogin>
    </BackgroundContainer>
  );
};

export default Cadastro;
