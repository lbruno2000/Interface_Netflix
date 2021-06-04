$('.owl-carousel').owlCarousel({
    loop:true, /*se quer fazer efeito de loop, daí fica de forma infinita, se não, ele para no final */
    margin:10, // margem de um filme para outro */
    nav:false, /*botão de navegação */
    //responsividade do sistema
    responsive:{
        0:{ //próximo de 0 pixels, 5 itens na tela
            items:1
        },
        600:{ //próximo de 600 pixels, 5 itens na tela
            items:3
        },//próximo de 1000 pixels, 5 itens na tela
        1000:{
            items:5
        }
    }
})