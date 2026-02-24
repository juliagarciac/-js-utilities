interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}

const biblioteca: Livro[] = [
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
    disponivel: true
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    disponivel: false
  },
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    disponivel: true
  }
];

function listarTitulosDisponiveis(livros: Livro[]): string[] {
  return livros
    .filter(livro => livro.disponivel)
    .map(livro => livro.titulo);
}

const titulosDisponiveis = listarTitulosDisponiveis(biblioteca);

console.log(titulosDisponiveis);