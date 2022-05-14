

// Inicializa o Carousel
const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    // Your options go here
  });

  // Função que oculta e exibe menu
  const exibeMenu = () => {
    // Muda a visualização dos itens com a classe oculta menu, mudando de hide(oculto) para show(exibir)
    $('.oculta-navbar').toggle()
  }
  // final da função que oculta e exibe o menu 