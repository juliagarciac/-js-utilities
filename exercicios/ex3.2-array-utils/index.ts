type Usuario = {
  id: number;
  nome: string;
  email: string;
  senha: string;
};

type UsuarioCompleto = Required<Usuario>;

type UsuarioSomenteLeitura = Readonly<Usuario>;

type UsuarioPublico = Pick<Usuario, "id" | "nome">;

type UsuarioSemSenha = Omit<Usuario, "senha">;

console.log("Utility Types funcionando!");