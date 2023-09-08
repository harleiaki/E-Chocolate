const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderBrasileiro() {
  exibirTodos();
  const produtosBrasileiros = Array.from(
    catalogoProdutos.getElementsByClassName("brasileiro")
  );

  for (const produto of produtosBrasileiros) {
    produto.classList.add("hidden");
  }
}

function esconderJapones() {
  exibirTodos();
  const produtosJapones = Array.from(
    catalogoProdutos.getElementsByClassName("japones")
  );

  for (const produto of produtosJapones) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-brasileiro")
    .addEventListener("click", esconderJapones);
  document
    .getElementById("exibir-japones")
    .addEventListener("click", esconderBrasileiro);
}
