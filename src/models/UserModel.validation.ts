import * as Yup from "yup";
import { UserCadastro } from "./UserModel";

export const UserCadastroSchema: Yup.SchemaOf<UserCadastro> = Yup.object({
  email: Yup.string().required("Campo obrigatório"),
  senha: Yup.string()
    .required("Campo obrigatório")
    .min(8, "8 dígitos necessários"),
});
