import { unique, groupBy, sumBy } from "./utils/arrayUtils.js";

// tste unique
const nomes = ["Ana", "Carlos", "Ana", "João"];
console.log("Unique:", unique(nomes));

// teste groupBy
type Produto = { nome: string; categoria: string };

const produtos: Produto[] = [
  { nome: "Banana", categoria: "Frutas" },
  { nome: "Maçã", categoria: "Frutas" },
  { nome: "Cenoura", categoria: "Legumes" }
];

console.log("GroupBy:", groupBy(produtos, "categoria"));

// Teste sumBy
type Despesa = { item: string; valor?: number };

const despesas: Despesa[] = [
  { item: "Transporte", valor: 20 },
  { item: "Almoço", valor: 35 },
  { item: "Café" }
];

console.log("SumBy:", sumBy(despesas, "valor"));