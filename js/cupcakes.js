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
        favorito: false,
        pagina: "chocolate-com-ganash.html"
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
        favorito: false,
        pagina: "morango.html"
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
        favorito: false,
        pagina: "baumilha-classico.html"
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
        favorito: false,
        pagina: "red-valvet-com-cram-cheese.html"
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
