// DADOS DOS CUPCAKES (26 cupcakes como solicitado)
const cupcakes = [
    {
        id: 1,
        nome: "Chocolate com Nozes",
        preco: 8.5,
        tamanho: "standard",
        categoria: "chocolate",
        imagem: "cupcake-chocolate-com-nozes.jpg",
        favorito: false
    },
    {
        id: 2,
        nome: "Chocolate com Ganache",
        preco: 9.0,
        tamanho: "standard",
        categoria: "chocolate",
        imagem: "cupcake-de-chocolate-com-ganache-3.jpg",
        favorito: false
    },
    {
        id: 3,
        nome: "Chocolate Branco",
        preco: 8.0,
        tamanho: "standard",
        categoria: "chocolate",
        imagem: "cupcake-chocolate-branco.jpg",
        favorito: false
    },
    {
        id: 4,
        nome: "Chocolate Mini",
        preco: 4.5,
        tamanho: "mini",
        categoria: "chocolate",
        imagem: "cupcake-chocolate-mini.jpg",
        favorito: false
    },
    {
        id: 5,
        nome: "Morango Fresco",
        preco: 9.5,
        tamanho: "standard",
        categoria: "frutas",
        imagem: "cupcake-de-morango-1.jpg",
        favorito: false
    },
    {
        id: 6,
        nome: "Morango com Chocolate",
        preco: 10.0,
        tamanho: "standard",
        categoria: "frutas",
        imagem: "cupcake-morango-chocolate.jpg",
        favorito: false
    },
    {
        id: 7,
        nome: "Morangos Silvestres",
        preco: 11.0,
        tamanho: "standard",
        categoria: "frutas",
        imagem: "cupcake-morangos-silvestres.jpg",
        favorito: false
    },
    {
        id: 8,
        nome: "Morango Mini",
        preco: 5.0,
        tamanho: "mini",
        categoria: "frutas",
        imagem: "cupcake-morango-mini.jpg",
        favorito: false
    },
    {
        id: 9,
        nome: "Baunilha Clássico",
        preco: 7.5,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-baunilha-classico-1.jpg",
        favorito: false
    },
    {
        id: 10,
        nome: "Baunilha com Glacê",
        preco: 8.0,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-baunilha-glace.jpg",
        favorito: false
    },
    {
        id: 11,
        nome: "Red Velvet com Cream Cheese",
        preco: 12.0,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-de-red-velvet-com-cream-cheese-1.jpg",
        favorito: false
    },
    {
        id: 12,
        nome: "Red Velvet Mini",
        preco: 6.0,
        tamanho: "mini",
        categoria: "especiais",
        imagem: "cupcake-red-velvet-mini.jpg",
        favorito: false
    },
    {
        id: 13,
        nome: "Limão Siciliano",
        preco: 8.5,
        tamanho: "standard",
        categoria: "frutas",
        imagem: "cupcake-limao-siciliano.jpg",
        favorito: false
    },
    {
        id: 14,
        nome: "Coco com Chocolate",
        preco: 9.5,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-coco-chocolate.jpg",
        favorito: false
    },
    {
        id: 15,
        nome: "Maracujá",
        preco: 9.0,
        tamanho: "standard",
        categoria: "frutas",
        imagem: "cupcake-maracuja.jpg",
        favorito: false
    },
    {
        id: 16,
        nome: "Doce de Leite",
        preco: 10.5,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-doce-de-leite.jpg",
        favorito: false
    },
    {
        id: 17,
        nome: "Café Expresso",
        preco: 9.0,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-cafe-expresso.jpg",
        favorito: false
    },
    {
        id: 18,
        nome: "Amêndoas Crocantes",
        preco: 11.5,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-amendoas-crocantes.jpg",
        favorito: false
    },
    {
        id: 19,
        nome: "Framboesa",
        preco: 10.0,
        tamanho: "standard",
        categoria: "frutas",
        imagem: "cupcake-framboesa.jpg",
        favorito: false
    },
    {
        id: 20,
        nome: "Mousse de Chocolate",
        preco: 13.0,
        tamanho: "standard",
        categoria: "chocolate",
        imagem: "cupcake-mousse-chocolate.jpg",
        favorito: false
    },
    {
        id: 21,
        nome: "Ninho com Nutella",
        preco: 12.5,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-ninho-nutella.jpg",
        favorito: false
    },
    {
        id: 22,
        nome: "Pistache",
        preco: 14.0,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-pistache.jpg",
        favorito: false
    },
    {
        id: 23,
        nome: "Mix de Frutas Vermelhas",
        preco: 11.0,
        tamanho: "standard",
        categoria: "frutas",
        imagem: "cupcake-frutas-vermelhas.jpg",
        favorito: false
    },
    {
        id: 24,
        nome: "Chocolate com Menta",
        preco: 9.5,
        tamanho: "standard",
        categoria: "chocolate",
        imagem: "cupcake-chocolate-menta.jpg",
        favorito: false
    },
    {
        id: 25,
        nome: "Caramelo Salgado",
        preco: 10.5,
        tamanho: "standard",
        categoria: "especiais",
        imagem: "cupcake-caramelo-salgado.jpg",
        favorito: false
    },
    {
        id: 26,
        nome: "Mix Mini",
        preco: 15.0,
        tamanho: "mini",
        categoria: "especiais",
        imagem: "cupcake-mix-mini.jpg",
        favorito: false
    }
];

// ENTRADAS
const produtosGrade = document.getElementById("produtosGrade");
const categoriaFiltro = document.getElementById("categoriaFiltro");
const precoFiltro = document.getElementById("precoFiltro");
const precoValor = document.getElementById("precoValor");
const botaoLimparFiltros = document.getElementById("botaoLimparFiltros");
const favoritosQuantidade = document.getElementById("favoritosQuantidade");

// FUNÇÃO PARA LISTAR OS CUPCAKES
function listarCupcakes(cupcakesListagem = cupcakes) {
    // Limpa a grade de produtos
    produtosGrade.innerHTML = "";

    // Lista cada cupcake da lista
    cupcakesListagem.forEach((cupcake) => {
        const produto = document.createElement("div");
        produto.className = "produto sombra";
        // Criando elementos HTML com innerHTML
        produto.innerHTML = `
            <div class="produto-imagem">
                <img src="img/${cupcake.imagem}" width="100%" alt="${cupcake.name}">
                <button class="botao-favoritar ${ cupcake.favorito ? "favorito" : "" }">${ cupcake.favorito ? "❤️" : "🤍" }</button>
            </div>
            <div class="produto-info">
                <h3>${cupcake.nome}</h3>
                <p class="preco">R$ ${cupcake.preco.toFixed(2)}</p>
                <p class="tamanho"><span>${cupcake.tamanho}</span></p>
                <p class="categoria">${cupcake.categoria}</p>
            </div>
        `;

        // Insere o produto à grade (como último incremento)
        produtosGrade.appendChild(produto);
    });

    atualizarFavoritosQuantidade();
}

// FUNÇÃO PARA FILTRAR CUPCAKES
function filtrarCupcakes() {
    // Obtém o valor do SELECT "categoriaFiltro"
    const categoriaSelecionada = categoriaFiltro.value;
    // Converte números recionais em inteiros
    const precoMaximo = parseInt(precoFiltro.value);
    // Filtra cupcakes
    const cupcakesFiltrados = cupcakes.filter((cupcake) => {
        const categoriaArranjo = categoriaSelecionada === "todos" || cupcake.categoria === categoriaSelecionada;
        const precoArranjo = cupcake.preco <= precoMaximo;
        console.log(categoriaArranjo && precoArranjo)
        return categoriaArranjo && precoArranjo;
    });

    listarCupcakes(cupcakesFiltrados);
}

// FUNÇÃO PARA FAVORITAR
function mudarFavorito(cupcakeId) {
    // Busca cupcake pela chave ID
    const cupcake = cupcakes.find((c) => c.id === cupcakeId);
    if (cupcake) {
        // Alterna valor de favorito
        cupcake.favorito = !cupcake.favorito;
        // Mantém os filtros e atualiza a lista
        filtrarCupcakes(); 
    }
}

// ATUALIZAR CONTADOR DE FAVORITOS
function atualizarFavoritosQuantidade() {
    // Conta cupcakes cuja chave "favorito" possui valor "true"
    const favoritosContagem = cupcakes.filter((c) => c.favorito === true).length;
    // Altera conteúdo textual do elemento
    favoritosQuantidade.querySelector("span").textContent = favoritosContagem;
}

// EVENTOS LISTENERS
categoriaFiltro.addEventListener("change", filtrarCupcakes);

precoFiltro.addEventListener("input", function () {
    precoValor.textContent = `R$ ${this.value},00`;
    filtrarCupcakes();
});

botaoLimparFiltros.addEventListener("click", function () {
    categoriaFiltro.value = "todos";
    precoFiltro.value = "20";
    precoValor.textContent = "R$ 20,00";
    filtrarCupcakes();
});

produtosGrade.addEventListener("click", function (event) {
    if (event.target.classList.contains("botao-favoritar")) {
        const card = event.target.closest(".produto");
        const cupcakeNome = card.querySelector("h3").textContent;
        // Busca cupcake por nome
        const cupcake = cupcakes.find((c) => c.nome === cupcakeNome);
        
        if (cupcake) {
            mudarFavorito(cupcake.id);
        }
    }
});

// INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", function () {
    listarCupcakes();
});
