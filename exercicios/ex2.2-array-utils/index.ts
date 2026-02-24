type Sucesso = {
  tipo: "sucesso";
  dados: string[];
};

type Erro = {
  tipo: "erro";
  mensagem: string;
};

type Resultado = Sucesso | Erro;

function exibirResultado(r: Resultado): void {
  if (r.tipo === "sucesso") {
    console.log("Dados recebidos:");
    console.log(r.dados.join(", "));
  } else {
    console.log("Erro encontrado:");
    console.log(r.mensagem);
  }
}

const resultadoSucesso: Resultado = {
  tipo: "sucesso",
  dados: ["Livro A", "Livro B", "Livro C"]
};

const resultadoErro: Resultado = {
  tipo: "erro",
  mensagem: "Falha ao carregar dados."
};

exibirResultado(resultadoSucesso);
exibirResultado(resultadoErro);