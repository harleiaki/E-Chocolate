const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderBrasileiros() {
  exibirTodos();
  const produtosMasculinos = Array.from(
    catalogoProdutos.getElementsByClassName("brasileiro")
  );

  for (const produto of produtosBrasileiros) {
    produto.classList.add("hidden");
  }
}

function esconderJaponeses() {
  exibirTodos();
  const produtosFemininos = Array.from(
    catalogoProdutos.getElementsByClassName("japones")
  );

  for (const produto of produtosJaponeses) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-brasileiros")
    .addEventListener("click", esconderJaponeses);
  document
    .getElementById("exibir-japoneses")
    .addEventListener("click", esconderBrasileiros);
}
