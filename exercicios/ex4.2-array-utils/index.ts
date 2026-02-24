function identidade<T>(valor: T): T {
  return valor;
}

function primeiroElemento<T>(lista: T[]): T {
  return lista[0];
}

type ApiResponse<T> = {
  sucesso: boolean;
  dados: T;
};

function combinar<A, B>(valor1: A, valor2: B) {
  return {
    primeiro: valor1,
    segundo: valor2
  };
}

function mostrarId<T extends { id: number }>(obj: T): number {
  return obj.id;
}

