
type Entidade = {
  id: number;
  criadoEm: Date;
};


type Usuario = Entidade & {
  nome: string;
  email: string;
  senha: string;
};


type UsuarioPublico = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;
type UsuarioSomenteLeitura = Readonly<UsuarioPublico>;


type ApiSucesso<T> = {
  status: "sucesso";
  dados: T;
};

type ApiErro = {
  status: "erro";
  mensagem: string;
};

type ApiResponse<T> = ApiSucesso<T> | ApiErro;


function sucesso<T>(dados: T): ApiResponse<T> {
  return {
    status: "sucesso",
    dados
  };
}


function erro(mensagem: string): ApiResponse<never> {
  return {
    status: "erro",
    mensagem
  };
}


function processarResposta<T>(resposta: ApiResponse<T>): void {
  if (resposta.status === "sucesso") {
    console.log("✅ Sucesso:");
    console.log(resposta.dados);
  } else {
    console.log("❌ Erro:");
    console.log(resposta.mensagem);
  }
}


const usuario: Usuario = {
  id: 1,
  criadoEm: new Date(),
  nome: "Júlia",
  email: "julia@email.com",
  senha: "123456"
};


const usuarioPublico: UsuarioPublico = {
  id: usuario.id,
  criadoEm: usuario.criadoEm,
  nome: usuario.nome,
  email: usuario.email
};


const atualizacao: UsuarioAtualizacao = {
  nome: "Júlia Silva"
};


const respostaOk = sucesso<UsuarioPublico>(usuarioPublico);

const respostaFalha = erro("Usuário não encontrado");

processarResposta(respostaOk);
processarResposta(respostaFalha);