export interface UserModel {
  authProvider: string;
  email: string | null;
  name: string | null;
  uid: string;
  profilePhoto: string | null;
}

export interface UserCadastro {
  email: string;
  senha: string;
}
