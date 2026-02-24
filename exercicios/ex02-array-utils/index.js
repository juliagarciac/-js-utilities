import { unique, groupBy, sumBy } from "./utils/arrayUtils.js";
// Teste unique
const nomes = ["Ana", "Carlos", "Ana", "João"];
console.log("Unique:", unique(nomes));
const produtos = [
    { nome: "Banana", categoria: "Frutas" },
    { nome: "Maçã", categoria: "Frutas" },
    { nome: "Cenoura", categoria: "Legumes" }
];
console.log("GroupBy:", groupBy(produtos, "categoria"));
const despesas = [
    { item: "Transporte", valor: 20 },
    { item: "Almoço", valor: 35 },
    { item: "Café" }
];
console.log("SumBy:", sumBy(despesas, "valor"));
