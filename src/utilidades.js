export const catalogo = [
  {
    id: "1",
    marca: "KitKat",
    nome: "Abacaxi",
    preco: 70,
    imagem: "abacaxi.png",
    japones: false,
  },
  {
    id: "2",
    marca: "KitKat",
    nome: "Algodão Doce",
    preco: 85,
    imagem: "algodao-doce.png",
    japones: true,
  },
  {
    id: "3",
    marca: "KitKat",
    nome: "Ao Leite",
    preco: 60,
    imagem: "ao-leite.png",
    japones: false,
  },
  {
    id: "4",
    marca: "KitKat",
    nome: "Avelã",
    preco: 160,
    imagem: "avela.png",
    japones: false,
  },
  {
    id: "5",
    marca: "KitKat",
    nome: "Banana",
    preco: 110,
    imagem: "banana.png",
    japones: false,
  },
  {
    id: "6",
    marca: "KitKat",
    nome: "Café",
    preco: 170,
    imagem: "cafe.png",
    japones: true,
  },
  {
    id: "7",
    marca: "KitKat",
    nome: "Churros",
    preco: 75,
    imagem: "churros.png",
    japones: true,
  },
  {
    id: "8",
    marca: "KitKat",
    nome: "Coco",
    preco: 88,
    imagem: "coco.png",
    japones: true,
  },
  {
    id: "9",
    marca: "KitKat",
    nome: "Dark",
    preco: 70,
    imagem: "dark.png",
    japones: false,
  },
  {
    id: "10",
    marca: "KitKat",
    nome: "Framboesa",
    preco: 85,
    imagem: "framboesa.png",
    japones: true,
  },
  {
    id: "11",
    marca: "KitKat",
    nome: "Goiaba",
    preco: 60,
    imagem: "goiaba.png",
    japones: false,
  },
  {
    id: "12",
    marca: "KitKat",
    nome: "Limão",
    preco: 160,
    imagem: "limao.png",
    japones: false,
  },
  {
    id: "13",
    marca: "KitKat",
    nome: "Maracúja",
    preco: 110,
    imagem: "maracuja.png",
    japones: false,
  },
  {
    id: "14",
    marca: "KitKat",
    nome: "Menta",
    preco: 170,
    imagem: "menta.png",
    japones: true,
  },
  {
    id: "15",
    marca: "KitKat",
    nome: "Morango",
    preco: 75,
    imagem: "morango.png",
    japones: true,
  },
  {
    id: "16",
    marca: "KitKat",
    nome: "Pistache",
    preco: 88,
    imagem: "pistache.png",
    japones: true,
  },
  {
    id: "17",
    marca: "KitKat",
    nome: "White",
    preco: 88,
    imagem: "white.png",
    japones: true,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

  const cartaoProdutoCarrinho = `
    <img
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${produto.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;
  //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
