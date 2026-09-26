// ENTRDA DE DADOS 
// Elementos HTML
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
                <h3>${
                    !cupcake.pagina ?
                    cupcake.nome :
                    `<a href="javascript: abrirPaginaModal('${cupcake.pagina}');">${cupcake.nome}<a/>`
                }</h3>
                <p class="preco">R$ ${cupcake.preco.toFixed(2)}</p>
                <p class="tamanho"><span>${cupcake.tamanho}</span></p>
                <p class="categoria">${cupcake.categoria}</p>
            </div>`;

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

// abrir pagina modal
function abrirPaginaModal(pagina){
    // abre modal
    abriModal();
    // Envia requisição
    fetch('produtos/' + pagina)
     // Recebe resposta e utiliza async
     .then(async (resposta) => {
        let html = "";
        if (resposta.ok) {
            //Aguardar execução
            html = await resposta.text();
        } else {
            html = "<p>Página não encontrada!</p>";
        }
        modal.querySelector('.modal-corpo').innerHTML = html;
    });
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
