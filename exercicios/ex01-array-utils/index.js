import { unique, groupBy, sumBy } from "./utils/arrayUtils.js";

// Teste unique
const nomes = ["Ana", "Carlos", "Ana", "João", "Carlos"];
console.log("Unique:", unique(nomes));

// Teste groupBy
const produtos = [
  { nome: "Banana", categoria: "Frutas" },
  { nome: "Maçã", categoria: "Frutas" },
  { nome: "Cenoura", categoria: "Legumes" },
  { nome: "Alface", categoria: "Verduras" }
];

console.log("GroupBy:", groupBy(produtos, "categoria"));

// Teste sumBy
const compras = [
  { nome: "Caneta", preco: 2.5 },
  { nome: "Caderno", preco: 15 },
  { nome: "Borracha" }
];

console.log("SumBy:", sumBy(compras, "preco"));